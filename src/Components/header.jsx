import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="jumbotron mb-0">
                <h1 className="display-4">Weather Test Application</h1>
                <p className="lead">Where a simple weather forcast gets a really over complicated animation.</p>
                <hr className="my-4" />
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/history">History</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header;