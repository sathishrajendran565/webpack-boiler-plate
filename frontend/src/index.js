import React, { Component, Suspense } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { history } from "../src/helpers/history";
import home from "../src/components/home/home";

import i18next from "i18next";

import common_se from "./translations/se/common.json";
import common_en from "./translations/en/common.json";

import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";

import "./assets/css/colors/orange.css";
import "./assets/css/responsive.css";

import "./index.css";

import { I18nextProvider } from "react-i18next";

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    en: {
      common: common_en, // 'common' is our custom namespace
    },
    se: {
      common: common_se,
    },
  },
});

const App = () => {
  return (
    <Suspense fallback="loading">
      <div>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={home} />
          </Switch>
        </Router>
      </div>
    </Suspense>
  );
};

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.querySelector("#root")
);
