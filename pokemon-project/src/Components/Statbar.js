import React from "react";
import { useState } from "react";
import "../Styles/Global.css";
import "../Styles/Statbar.css";

import { test } from "../test";

export default function Statbar(props) {
  const [health, updateHealth] = useState(props.health);

  //   setHealth(test.health);

  return (
    <div className="stat-bar">
      {props.name}
      <div className="health-bar-container">
        <div className="health-bar" style={{ width: props.health + "%" }}></div>
      </div>
    </div>
  );
}
