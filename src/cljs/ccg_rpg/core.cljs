(ns ccg-rpg.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [devtools.core :as devtools]
              [ccg-rpg.handlers]
              [ccg-rpg.subs]
              [ccg-rpg.views :as views]
              [ccg-rpg.config :as config]
              [clojure.browser.repl :as repl]))



(defn dev-setup []
  (when config/debug?
    (println "dev mode")
    (devtools/install!)))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (re-frame/dispatch-sync [:initialize-db])
  (dev-setup)
  (mount-root)
  (repl/connect "http://localhost:9000/repl"))
