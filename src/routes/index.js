import LoginPage from "./../containers/GuestLayout/LoginPage";
import HomePage from "./../containers/GuestLayout/HomePage";

const routesAdmin = [];

const routesGuest = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/login",
    component: LoginPage,
  },
];

const routesUser = [];
export { routesAdmin, routesGuest, routesUser };
