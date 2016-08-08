(ns ccg-rpg.cards.common)

(def card-types
  ["neutral" "fire" "water" "earth"])

(defn random-string [length]
  (let [ascii-codes (concat (range 48 58) (range 66 91) (range 97 123))]
    (apply str (repeatedly length #(char (rand-nth ascii-codes))))))

(defn create []
  { :name (random-string 10)
    :dmg (rand-int 10)
    :type (rand-nth (vec card-types))})
