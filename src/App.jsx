import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from "./Home/home";
import Forcast from "./Forcast/forcast";
import { History } from "./History/history";

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
                    <Route path="/history">
                        <History />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}