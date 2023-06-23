import React from "react";
import Screen from "./Screen";
import Consol from "./Consol";
import "../Styles/Global.css";
import "../Styles/Container.css";
import Statbar from "./Statbar";

export default function Container() {
  return (
    <div className="container">
      <Screen />

      <Consol />
    </div>
  );
}
