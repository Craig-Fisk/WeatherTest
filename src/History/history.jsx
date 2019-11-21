import React, { useState, useEffect } from "react";
import Header from "../Components/header";
import SessionService from "../Services/sessionService";
import { HistoryItem } from "./item";
export function History() {
    const [items, setItems] = useState(null);
    useEffect(() => {
        const data = SessionService.retrieveWeather();
        setItems(data.map((element, i) => {         
            return (<HistoryItem key={i} data={element} />) 
        }));
    }, []);
    return (
        <>
            <div className="row">
                <div className="col">
                <Header />
                </div>
            </div>

            {items}            
        </>
    );
}