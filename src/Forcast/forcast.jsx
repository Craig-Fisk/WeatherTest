import React, {useState, useEffect} from "react";
import Header from "../Components/header";
import { useLocation } from "react-router-dom";
import weatherService from "../Services/weatherService";
import CloudAnimation from "../Components/cloudAnimation";
import SunAnimation from "../Components/sunAnimation";

const Forcast = () => {
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    const [forcast, setForcast] = useState(null);
    const [temperature, setTemperature] = useState("");
    const [weather, setWeather] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        weatherService(query.get("city"), query.get("units")).then(data => {
            setForcast(data);
            setTemperature(data.main.temp);
            setWeather(data.weather[0].main);
            setDescription(data.weather[0].description);
            setName(data.name);
        });
    }, []);

    const chooseAnimation = () => {
        if(forcast !== null) {
            const weather = forcast.weather[0].main;
            switch (weather) {
                case 'Clouds':
                    return <CloudAnimation />
                
                case 'Clear':
                    return <SunAnimation />
            
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
                <div className="col-6">
                    {chooseAnimation()}
                </div>
                <div className="col-6">
                    <h2>{name}</h2>
                     <p>{weather} - {description}</p>
                    <p>{temperature}&deg;{query.get("units")}</p>
                </div>
            </div>
        </>
    );
}

export default Forcast;