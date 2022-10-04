import Dashboard from "@material-ui/icons/Dashboard";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    layout: "/admin",
  },
  {
    path: "/table-list",
    name: "Character List",
    icon: "content_paste",
    layout: "/admin",
  }

];

export default dashboardRoutes;
