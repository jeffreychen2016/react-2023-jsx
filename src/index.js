// import the libs
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// get reference to div with id root
const el = document.getElementById("root");

// tell react to take control of that element
const root = ReactDOM.createRoot(el);

// render the component
root.render(<App />);
