import React from "react";
import CloudAnimation from "../Components/cloudAnimation";
import SunAnimation from "../Components/sunAnimation";

export function HistoryItem(props) {
    const chooseAnimation = (data) => {
        const weather = data.weather;
        switch (weather) {
            case 'Clouds':
                return <CloudAnimation />
            
            case 'Clear':
                return <SunAnimation />
        
            default:
                return <CloudAnimation />
        }
    }
    return (
        <div className="row">
                <div className="col-12 mb-3">
                    <div className="card">
                        <div className="card-header">
                            {props.data.name}
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    {chooseAnimation(props.data)}
                                </div>
                                <div className="col-9">
                                    Temperature: {props.data.temperature}<br/>
                                    Weather: {props.data.weather}<br/>
                                    Description: {props.data.description} 
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        
    );
}