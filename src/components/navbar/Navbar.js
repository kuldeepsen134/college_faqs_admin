import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import StatusToast from "../StatusToast";
const Navbar = () => {
  const { setAuth } = useAuth();
  const logout = () => {
    localStorage.removeItem("token");
    setAuth({ token: null });
  };
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars"></i>
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/colleges/list" className="nav-link">
            Colleges List
          </Link>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">
        <i className="fas fa-sign-out-alt" onClick={logout}></i>
      </ul>
      <StatusToast />
    </nav>
  );
};

export default Navbar;
