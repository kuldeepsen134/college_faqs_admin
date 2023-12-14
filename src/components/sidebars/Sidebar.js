import { Link, useLocation } from "react-router-dom";
import menu from "./menu";
import adminLogo from "../../assets/img/logo192.png";
import userLogo from "../../assets/img/user2-160x160.jpg";
const ChildComponent = ({ child }) => {
  const location = useLocation();
  return (
    <ul className="nav nav-treeview">
      {child.map((item) => (
        <li className="nav-item" key={item.name}>
          <Link
            to={item.path}
            className={`nav-link ${item.path == location.pathname ? "active" : null
              }`}
          >
            <i className="far fa-circle nav-icon"></i>
            <p>{item.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
const Sidebar = () => {

  const { pathname } = useLocation()

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" className="brand-link">
        <img
          src={adminLogo}
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
        />
        <span className="brand-text font-weight-light">College FAQs</span>
      </Link>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src={userLogo}
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Admin Dashboard
            </a>
          </div>
        </div>
        {/* search bar */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {menu.map((item) => {
              return (
                <li
                  key={item.name}
                  className={
                    item?.children ? "nav-item menu-is-opening menu-open" : ""
                  }
                >
                  <Link
                    to={item.path ? item.path : "#"}
                    className={`nav-link ${item.path == location.pathname ? "active" : ""
                      }`}
                  >
                    <i className={`nav-icon fas ${item?.icon}`}></i>
                    <p>
                      {item.name}
                      <i className="right fas fa-angle-left"></i>
                    </p>
                  </Link>
                  {item?.children ? (
                    <ChildComponent child={item.children} />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
