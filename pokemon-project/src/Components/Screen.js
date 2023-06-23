import React from "react";
import { useState } from "react";
import "../Styles/Global.css";
import "../Styles/Screen.css";
import { test } from "../test";
import Statbar from "./Statbar";
import { useEffect } from "react";

export default function Screen() {
  return (
    <div className="screen">
      <Statbar name="charmander" health="100" />
      <Statbar name="squirtle" health="100" />
    </div>
  );
}
