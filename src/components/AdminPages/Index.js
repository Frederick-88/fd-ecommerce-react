import React from "react";
import { useRouteMatch, Switch, Route, NavLink } from "react-router-dom";

import Login from "./Login";
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
              <h3>Home</h3>
            </NavLink>
            <NavLink to={`${match.path}/users`}>
              <h3>Users</h3>
            </NavLink>
            <NavLink to={`${match.path}/product`}>
              <h3>Products</h3>
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
          <div className="d-flex d-row">Navbar,Navbar,Navbar</div>
          <AdminProductPage />
        </Route>
        <Route exact path={`${match.path}/users`}>
          <h1 className="text-success-s2 text-center">
            Welcome Admin, this is the users Page.
          </h1>
          <div className="d-flex d-row">Navbar,Navbar,Navbar</div>
          <AdminUsersPage />
        </Route>
      </Switch>
    </div>
  );
};
export default Index;
