import { useEffect, useState } from "react";
import "./Overlays.scss";
import HeightDisplay from "../../ui/heightDisplay/HeightDisplay";
import { moonElevationService } from "../../../lib/moon-three/moonElevationService";

function Overlays() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handler = async (e: MouseEvent) => {
      const service = await moonElevationService();
      const ratio = 1 - e.pageY / window.innerHeight;
      setHeight(service.getElevationByRatio(ratio));
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
