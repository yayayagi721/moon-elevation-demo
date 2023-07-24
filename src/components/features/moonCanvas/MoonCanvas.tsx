import React, { useState, useEffect } from "react";

import "./MoonCanvas.scss";
import MoonThree from "../../../lib/moon-three";

function Hoge() {
  useEffect(() => {
    MoonThree("rendering-target-for-moon");
    console.log("hoge");
  });
  return (
    <div className="moon-canvas">
      <canvas id="rendering-target-for-moon"></canvas>
    </div>
  );
}

export default Hoge;
