import { useEffect, useState } from "react";
import "./Overlays.scss";
import HeightDisplay from "../../ui/heightDisplay/HeightDisplay";
import { getMaxHeight } from "../../../lib/moon-three/demRepository";

const moonMaxElevationMeter = 10786;

function Overlays() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const bottom = moonMaxElevationMeter - getMaxHeight();
      const ratio = 1 - e.pageY / window.innerHeight;
      const height = getMaxHeight();
      setHeight(height * ratio + bottom);
    };

    window.addEventListener("mousemove", handler);
    return () => {
      window.removeEventListener("mousemove", handler);
    };
  });

  return (
    <div className="height-display">
      <div className="left-top">
        <span>
          Visualize <br />
          the elevation <br />
          of the Moon 🌕
        </span>
      </div>
      <div className="right-bottom">
        <div className="legend"></div>
        <HeightDisplay height={height} />
      </div>
    </div>
  );
}

export default Overlays;
