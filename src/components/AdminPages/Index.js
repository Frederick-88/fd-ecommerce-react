import React from "react";
import { connect } from "react-redux";
import {
  useRouteMatch,
  Switch,
  Route,
  Redirect,
  NavLink,
} from "react-router-dom";

import Login from "./AdminLogin";
import AdminDashboard from "./Dashboard";
import AdminProductPage from "./AdminProduct";
import AdminUsersPage from "./AdminUsers";

const Index = (props) => {
  let match = useRouteMatch();
  return (
    <div>
      <Switch>
        {/* match.path = /admin (ROUTE) */}
        <Route exact path={match.path}>
          {props.tokenAdmin ? (
            <div>
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
            </div>
          ) : (
            <Redirect push to={`${match.path}/login`} />
          )}
        </Route>
        <Route exact path={`${match.path}/login`}>
          {props.tokenAdmin ? <Redirect push to={match.path} /> : <Login />}
        </Route>
        <Route exact path={`${match.path}/product`}>
          {props.tokenAdmin ? (
            <div>
              <h1 className="text-success-s2 text-center">
                Welcome Admin, this is the Product Page.
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
            </div>
          ) : (
            <Redirect push to={`${match.path}/login`} />
          )}
        </Route>
        <Route exact path={`${match.path}/users`}>
          {props.tokenAdmin ? (
            <div>
              <h1 className="text-success-s2 text-center">
                Welcome Admin, this is the Users Page.
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
            </div>
          ) : (
            <Redirect push to={`${match.path}/login`} />
          )}
        </Route>
      </Switch>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    tokenAdmin: state.LoginReducer.tokenAdmin,
  };
};
export default connect(mapStateToProps, null)(Index);
