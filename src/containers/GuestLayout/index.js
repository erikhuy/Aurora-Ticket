import React from "react";
import { Route } from "react-router-dom";

function GuestRender(props) {
  return <div>{props.children}</div>;
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
