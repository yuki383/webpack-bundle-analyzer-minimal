import React from "react";
import { createRoot } from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const App = () => (
  <div>
    <h1>Hello, Webpack + React!</h1>
    <FontAwesomeIcon icon={faCoffee} />
  </div>
);
createRoot(document.getElementById("root")).render(<App />);
