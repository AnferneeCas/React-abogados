import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { authContext } from "./context/auth/auth";
import firebase from "./firebase";
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  var currentUser = firebase.auth.currentUser;
  console.log(firebase.auth.currentUser);
  return (
    <Route
      {...rest}
      render={routeProps =>
        currentUser != null ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
};

export default PrivateRoute;
