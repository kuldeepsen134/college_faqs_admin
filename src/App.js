import { useEffect } from "react";
import "./App.css";
import "./assets/css/adminlte.min.css";
import "./assets/css/fontawesome/css/all.css";
import "./assets/js/adminlte.js";

import "react-toastify/dist/ReactToastify.css";
import RoutesComponent from "./routes/routes";

function App() {
  useEffect(() => {
    document.body.classList.add(
      "hold-transition",
      "sidebar-mini",
      "layout-fixed"
    );
  }, []);
  return <RoutesComponent />;
}

export default App;
