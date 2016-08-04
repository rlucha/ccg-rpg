(ns ccg-rpg.views
    (:require [re-frame.core :as re-frame]))

(defn current-user []
  (let [user (re-frame/subscribe [:user])]
    [:span "user " [:b @user]]))

(defn next-turn []
  [:button {:on-click #(re-frame/dispatch [:next-turn])} "Next turn"])

(defn main-panel []
  (let [name (re-frame/subscribe [:name])
        turn (re-frame/subscribe [:turn])]
    (fn []
      [:div
        [:div @name " " (current-user)]
        [:div "Current turn " @turn]
        [:br]
        [:div (next-turn)]])))
