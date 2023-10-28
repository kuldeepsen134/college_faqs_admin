import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebars/Sidebar";
const Layout = ({ children }) => {
  const Children = children;
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <Children />
      </div>
    </div>
  );
};

export default Layout;
