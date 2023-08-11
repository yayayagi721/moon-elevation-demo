import MoonCanvas from "../../features/moonCanvas/MoonCanvas";
import Overlays from "../../features/overlays/Overlays";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function MainPage() {
  useEffect(() => {
    // Google Analytics 測定 ID を入力して設定
    ReactGA.initialize("G-6GHMVE8VC7");
    ReactGA.send({
      hitType: "pageview",
      // アクセスしたパス (pathname) とクエリ文字列 (search) を送付する (必要に応じて編集する)
      page: "top",
    });
  }, []);

  return (
    <div className="main-page">
      <MoonCanvas />
      <Overlays />
    </div>
  );
}

export default MainPage;
