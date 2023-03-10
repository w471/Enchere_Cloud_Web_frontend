
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./assets/bootstrap/css/bootstrap.min.css"
import "./assets/fonts/fontawesome-all.min.css"
import "./assets/fonts/font-awesome.min.css"
import "./assets/fonts/fontawesome5-overrides.min.css"
import "./assets/css/Navigation-with-Search.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
