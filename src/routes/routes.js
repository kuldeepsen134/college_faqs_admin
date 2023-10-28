import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import RequireAuth from "../components/requireAuth";
import path from "./paths";
const loadRoutes = (routes, Layout) => {
  return routes.map((item) => {
    if (item?.public) return;
    return (
      <Route
        key={item.path}
        path={item.path}
        element={<Layout>{item.component}</Layout>}
      />
    );
  });
};

const loadPublic = (routes) => {
  return routes.map((item) => {
    if (item.public) {
      return (
        <Route key={item.path} path={item.path} element={<item.component />} />
      );
    }
  });
};

const RoutesComponent = () => {
  return (
    <Routes>
      {loadPublic(path)}
      <Route element={<RequireAuth />}>{loadRoutes(path, Layout)}</Route>
    </Routes>
  );
};
export default RoutesComponent;
