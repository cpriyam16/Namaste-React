import React from "react"
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", className: "h1" },
  "Namaste React!"
);

const heading2 = React.createElement("h2", { id: "heading2" }, "Sub Heading");
const child = React.createElement("div", { id: "child" }, [heading, heading2]);
const parent = React.createElement("div", { id: "parent" }, child);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);