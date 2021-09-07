import React from "react";
import ReactDOM from "react-dom";
import "./Styles/main.css";
import App from "./App";
import { AppProvider } from "./util/context";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
