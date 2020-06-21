import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";

import Login from "./Login";
import AdminDashboard from "./Dashboard";

const Index = () => {
  let match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={match.path}>
          <AdminDashboard />
        </Route>
        <Route exact path={`${match.path}/login`}>
          <Login />
        </Route>
      </Switch>
    </div>
  );
};
export default Index;
