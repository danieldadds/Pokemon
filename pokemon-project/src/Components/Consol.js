import React from "react";
import "../Styles/Global.css";
import "../Styles/Consol.css";
import { test } from "../test";

export default function Consol() {
  function testFunc(props) {
    test.health = test.health - 10;
    console.log(props);
  }
  return (
    <div className="consol">
      Consol
      <button onClick={testFunc}>TEST</button>
    </div>
  );
}
