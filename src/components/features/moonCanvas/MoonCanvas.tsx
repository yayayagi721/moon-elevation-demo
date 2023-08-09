import React, { useEffect } from "react";

import "./MoonCanvas.scss";
import MoonThree from "../../../lib/moon-three";

const MoonCanvas = React.memo(() => {
  useEffect(() => {
    MoonThree("rendering-target-for-moon");
  });
  return (
    <div className="moon-canvas">
      <canvas id="rendering-target-for-moon"></canvas>
    </div>
  );
});

export default MoonCanvas;
