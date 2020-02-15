import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from "./Home"
import CTX from './store'
import LotsOfUsers from "./LotsOfUsers";

export default function App() {
  return (
    <CTX.Provider value={{}}>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

        </ul>

        <Switch>
          <Route path="/about">
          </Route>
          <Route path="/topics">
          </Route>
          <Route path="/">
            <Home users={LotsOfUsers} text="hello world"/>
          </Route>
        </Switch>
      </div>
    </Router>
    </CTX.Provider>
  );
}
