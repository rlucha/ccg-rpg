(ns ccg-rpg.handlers
    (:require [re-frame.core :as re-frame]
              [ccg-rpg.db :as db]))

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))


(defn next-turn
  [app-state [_ _]]
  (assoc-in app-state [:turn] (inc (get app-state :turn))))

(def card-types
  #{:neutral :fire :water :earth :air})

(defn create-card []
  {:name "whatever"
   :dmg 1
   :type (get card-types :neutral)})

(defn find-card
  [app-state []]
  (println app-state)
  (assoc-in app-state [:cards] (create-card)))

(re-frame/register-handler
  :next-turn
  next-turn)

(re-frame/register-handler
  :find-card
  find-card)
