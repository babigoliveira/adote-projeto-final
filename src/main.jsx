import React from "react";
import ReactDOM from "react-dom/client";
import ThemeContextWrapper from "./components/ThemeContextWrapper";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>{" "}
  </ThemeContextWrapper>
);
