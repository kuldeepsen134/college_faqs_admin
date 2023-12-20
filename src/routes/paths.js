import Create from "../pages/Create";
import List from "../pages/List";
import Home from "../pages/Home";
import AddCollegeDetails from "../pages/AddCollegeDetails";
import ListAllColleges from "../pages/ListAllColleges";
import Login from "../pages/Login";
import Tags from "../pages/Tags";
import AddTags from "../pages/AddTags";
import AddDisplay from "../pages/AddDisplay";
import DisplayTable from "../pages/DisplayTable";
import AddBanner from "../pages/AddBanner";
import BannersTable from "../pages/BannersTable";
import PushUpdate from "../pages/PushUpdate";
import UpdatesList from "../pages/UpdatesList";
import AnalyticsList from "../pages/AnalyticsList";
import CollegeListEdit from "../pages/editCollegeDetail";
import UsersList from "../pages/User";
import ContactUs from "../pages/contactUs";
const path = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/create",
    component: Create,
  },
  {
    path: "/colleges/add",
    component: AddCollegeDetails,
  },
  {
    path: "/colleges/edit",
    component: AddCollegeDetails,
  },
  // {
  //   path: "/colleges/edit",
  //   component: CollegeListEdit,
  // },
  {
    path: "/colleges/list",
    component: ListAllColleges,
  },
  {
    path: "/tags/list",
    component: Tags,
  },
  {
    path: "/tags/add",
    component: AddTags,
  },
  {
    path: "/display-table/list",
    component: DisplayTable,
  },
  {
    path: "/display-table/add",
    component: AddDisplay,
  },
  {
    path: "/banners/list",
    component: BannersTable,
  },
  {
    path: "/banners/add",
    component: AddBanner,
  },
  {
    path: "/latest-updates/list",
    component: UpdatesList,
  },
  {
    path: "/latest-updates/add",
    component: PushUpdate,
  },
  {
    path: "/analytics/list",
    component: AnalyticsList,
  },
  {
    path: "/users/list",
    component: UsersList,
  },
  {
    path: "/contact-us/list",
    component: ContactUs,
  },
  {
    path: "/login",
    component: Login,
    public: true,
  },
];

export default path;
