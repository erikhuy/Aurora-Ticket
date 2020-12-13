import LoginPage from "./../containers/GuestLayout/LoginPage";
import HomePage from "./../containers/GuestLayout/HomePage";
import MovieBookingDetails from "../containers/GuestLayout/MovieBookingDetails/MovieBookingDetails";

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
    //Trang chi tiet dat phim
  {
    exact: false,
    path: "/movie/:id",
    component: MovieBookingDetails,
  }
];

const routesUser = [];
export { routesAdmin, routesGuest, routesUser };
