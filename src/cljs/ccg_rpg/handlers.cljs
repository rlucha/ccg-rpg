(ns ccg-rpg.handlers
    (:require [re-frame.core :as re-frame]
              [ccg-rpg.db :as db]
              [ccg-rpg.cards.common :as cards]))

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))

(defn next-turn
  [app-state [_ _]]
  (assoc-in app-state [:turn] (inc (get app-state :turn))))

(defn find-card
  [app-state []]
  (assoc-in app-state [:cards] (conj (app-state :cards) (cards/create))))

(re-frame/register-handler
  :next-turn
  next-turn)

(re-frame/register-handler
  :find-card
  find-card)
