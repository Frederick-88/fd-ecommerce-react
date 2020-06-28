import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserPage from "./components/UserPages/Index";
import AdminPage from "./components/AdminPages/Index";
import CartPage from "./components/UserPages/Cart";

function App() {
  return (
    <div>
      <BrowserView>
        <Router>
          <Switch>
            <Route exact path="/">
              <UserPage />
            </Route>
            <Route exact path="/cart">
              <CartPage />
            </Route>

            <Route path="/admin">
              <AdminPage />
            </Route>
          </Switch>
        </Router>
      </BrowserView>
      <MobileView>
        <h1> Not Rendered on Mobile, Please check via Desktop/PC. </h1>
      </MobileView>
    </div>
  );
}
export default App;
