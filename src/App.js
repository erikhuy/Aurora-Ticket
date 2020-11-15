import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routesGuest, routesUser, routesAdmin } from "./routes";
import GuestLayout from "./containers/GuestLayout";
import PageNotFound from "./containers/PageNotFound";

function App() {
  const showLayoutGuest = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <GuestLayout
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {showLayoutGuest(routesGuest)}
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
