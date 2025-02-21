import React from "react";
import ReactDOM from "react-dom/client";

// import the index.css for styling of the page.
import "./index.css";

// import the App.js
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// index.js is the js code which is going to add to the root in the index.html page, which is the only page in our application
