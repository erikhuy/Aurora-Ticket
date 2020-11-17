import React from "react";
import { Route } from "react-router-dom";
import FooterGuest from "../../components/FooterGuest";
import NavbarGuest from "../../components/NavbarGuest";

function GuestRender(props) {
  return (
    <div>
      <NavbarGuest />
      {props.children}
      <FooterGuest />
      {/* {props.children} */}
    </div>
  );
}
export default function GuestLayout({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <GuestRender>
          <Component {...propsComponent} />
        </GuestRender>
      )}
    />
  );
}
