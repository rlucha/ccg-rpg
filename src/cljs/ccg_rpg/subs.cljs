(ns ccg-rpg.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))

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
  (fn [db])
  (reaction (:cards @db)))
