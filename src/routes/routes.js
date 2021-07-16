import Home from "../containers/home";
import Users from "../containers/users";
import Reports from "../containers/reports";

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/usuarios",
    component: Users,
  },
  {
    path: "/denuncias",
    component: Reports,
  },
];

export default routes;
