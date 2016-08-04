(ns ccg-rpg.handlers
    (:require [re-frame.core :as re-frame]
              [ccg-rpg.db :as db]))

(defn next-turn
  [app-state [_ _]]
  (assoc-in app-state [:turn] (inc (get app-state :turn))))

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/register-handler
  :next-turn
  next-turn)
