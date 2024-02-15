import Register from "../pages/register";
import Welcome from "../pages/welcome";
import AddActivity from "../pages/activities/add";
import CalandarView from "../pages/calandarView";
import Login from "../pages/login";
export default routes = {
  register: {
    component: Register,
  },
  welcome: {
    component: Welcome,
  },
  addActivity: {
    component: AddActivity,
  },
  calandarView: {
    component: CalandarView,
  },
  login: {
    component: Login,
  },
};
