(ns ccg-rpg.subs
    (:require-macros [reagent.ratom :refer [reaction]]
                     [cljs.core.async.macros :refer [go go-loop]])
    (:require [re-frame.core :as re-frame]
              [cljs.core.async :refer [toggle merge admix mix put! chan <! >!  timeout close! sliding-buffer]]))

(re-frame/register-sub
 :name
 (fn [db]
   (reaction (:name @db))))

(re-frame/register-sub
  :user
  (fn [db]
    (reaction (:user @db))))

(re-frame/register-sub
  :turn
  (fn [db]
    (reaction (:turn @db))))

(re-frame/register-sub
  :cards
  (fn [db, [_ _]]
    (reaction (get-in @db [:cards]))))


(def mouse-downs (chan))
(def mouse-moves (chan))
(def mouse-ups (chan))
(def mouse-drag-ch (chan))
(def mixer (mix mouse-drag-ch))

(admix mixer mouse-downs)
(admix mixer mouse-moves)
(admix mixer mouse-ups)

(defn mousemove-signal [e]
  (put! mouse-moves (.-type e)))

(defn mousedown-signal [e]
  (put! mouse-downs (.-type e)))

(defn mouseup-signal [e]
  (put! mouse-ups (.-type e)))

(toggle mixer { mouse-moves {:mute true}})


(go-loop []
  (let [mc (<! mouse-drag-ch)]
    (cond
      (= mc "mousedown") (toggle mixer { mouse-moves {:mute false}})
      (= mc "mouseup") (toggle mixer { mouse-moves {:mute true}}))
    (.log js/console mc)
    (recur)))



;mouse drag subscriptions
(.addEventListener js/window "mousemove" mousemove-signal)
(.addEventListener js/window "mousedown" mousedown-signal)
(.addEventListener js/window "mouseup" mouseup-signal)
