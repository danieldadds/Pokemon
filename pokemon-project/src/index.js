import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./Components/Container";
import Statbar from "./Components/Statbar";
import { test } from "./test";
import { useState } from "react";
import Screen from "./Components/Screen";
const root = ReactDOM.createRoot(document.getElementById("root"));

// const [health, setHealth] = useState(0);

root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
