(ns ccg-rpg.db)

(def default-db
  { :name "CCG-RPG"
    :user "rlucha"
    :turn 0
    :cards [
            {:name "initial"
             :dmg 1
             :type :neutral}]})
