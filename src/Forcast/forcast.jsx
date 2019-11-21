import React, {useState, useEffect} from "react";
import Header from "../Components/header";
import { useLocation } from "react-router-dom";
import weatherService from "../Services/weatherService";
import CloudAnimation from "../Components/cloudAnimation";

const Forcast = () => {
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    const [forcast, setForcast] = useState(null);

    useEffect(() => {
        weatherService(query.get("city"), query.get("units")).then(data => {
            setForcast(data);
        });
    }, [forcast]);

    const chooseAnimation = () => {
        if(forcast !== null) {
            const weather = forcast.weather[0].main;
            switch (weather) {
                case 'Clouds':
                    return <CloudAnimation />
                
                case 'Clear':
                    return <h1>Sunny!</h1>
            
                default:
                    return <h1>Something else!</h1>
            }
        }
        
    }

    return (
        <>
            <div className="row">
                <div className="col">
                <Header />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    {chooseAnimation()}
                </div>
            </div>
        </>
    );
}

export default Forcast;