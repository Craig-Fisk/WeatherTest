import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from "./Home/home";
import Forcast from "./Forcast/forcast";

export default function App() {
    return (
        <div className="container">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/forcast">
                        <Forcast />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}