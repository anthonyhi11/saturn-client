import React from "react";
import { Route, Redirect } from "react-router-dom";
import TokenService from "./token-services";

export default function PrivateRoute({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={(componentProps) =>
        TokenService.hasAuthToken() ? (
          <Component {...componentProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
}
