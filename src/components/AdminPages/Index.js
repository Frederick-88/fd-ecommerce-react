import React from "react";
import { useRouteMatch, Switch, Route, NavLink } from "react-router-dom";

import Login from "./AdminLogin";
import AdminDashboard from "./Dashboard";
import AdminProductPage from "./AdminProduct";
import AdminUsersPage from "./AdminUsers";

const Index = () => {
  let match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={match.path}>
          <h1 className="text-success-s2 text-center">
            Welcome Admin, this is the dashboard Page.
          </h1>
          <div className="d-flex d-row justify-content-center">
            <NavLink to={match.path}>
              <h4 className="text-success-s2 admin-nav">Home</h4>
            </NavLink>
            <hr className="vertical-line mx-4 my-0" />
            <NavLink to={`${match.path}/users`}>
              <h4 className="text-success-s2 admin-nav">Users</h4>
            </NavLink>
            <hr className="vertical-line mx-4 my-0" />
            <NavLink to={`${match.path}/product`}>
              <h4 className="text-success-s2 admin-nav">Products</h4>
            </NavLink>
          </div>
          <AdminDashboard />
        </Route>
        <Route exact path={`${match.path}/login`}>
          <Login />
        </Route>
        <Route exact path={`${match.path}/product`}>
          <h1 className="text-success-s2 text-center">
            Welcome Admin, this is the product Page.
          </h1>
          <div className="d-flex d-row justify-content-center">
            <NavLink to={match.path}>
              <h4 className="text-success-s2 admin-nav">Home</h4>
            </NavLink>
            <hr className="vertical-line mx-4 my-0" />
            <NavLink to={`${match.path}/users`}>
              <h4 className="text-success-s2 admin-nav">Users</h4>
            </NavLink>
            <hr className="vertical-line mx-4 my-0" />
            <NavLink to={`${match.path}/product`}>
              <h4 className="text-success-s2 admin-nav">Products</h4>
            </NavLink>
          </div>
          <AdminProductPage />
        </Route>
        <Route exact path={`${match.path}/users`}>
          <h1 className="text-success-s2 text-center">
            Welcome Admin, this is the users Page.
          </h1>
          <div className="d-flex d-row justify-content-center">
            <NavLink to={match.path}>
              <h4 className="text-success-s2 admin-nav">Home</h4>
            </NavLink>
            <hr className="vertical-line mx-4 my-0" />
            <NavLink to={`${match.path}/users`}>
              <h4 className="text-success-s2 admin-nav">Users</h4>
            </NavLink>
            <hr className="vertical-line mx-4 my-0" />
            <NavLink to={`${match.path}/product`}>
              <h4 className="text-success-s2 admin-nav">Products</h4>
            </NavLink>
          </div>
          <AdminUsersPage />
        </Route>
      </Switch>
    </div>
  );
};
export default Index;
