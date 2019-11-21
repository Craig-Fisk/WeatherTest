import React, { useRef } from "react";
import Header from "../Components/header";
import { Link } from "react-router-dom"
export function Home() {
    const city = useRef(null);
    const units = useRef(null);
    const getURL = () => {
        if(city.current){
            return `/forcast?city=${city.current.value}&units=${units.current.value}`;   
        }
        return '/'
    }

    return (
        <>
            <div className="row">
                <div className="col">
                <Header />
                </div>
            </div>
            
            <div className="row">
                <div className="col-6">
                    <form>
                        <div className="form-group">
                            <label htmlFor="city">Email address</label>
                            <input type="text" ref={city} defaultValue="Chester" className="form-control" id="city" placeholder="Enter city name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="units">Password</label>
                            <select className="form-control" ref={units} id="units" defaultValue="c">
                                <option value="c">&deg;C</option>
                                <option value="f">&deg;F</option>
                            </select>
                        </div>
                        <Link className="btn btn-primary" to={location => {return getURL()}}>submit</Link>
                    </form>
                </div>
            </div>
            
        </>
    );
}