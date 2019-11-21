export default async function weatherService(city, units) {
    const apiKey = '1202b60313efecf047abab912a2d1093';
    const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units === 'c' ? 'metric' : 'imperial'}&APPID=${apiKey}`
        );
    const json = await response.json();
    return json;

    // const demoJson = { 
    //     "coord": { 
    //         "lon": -2.89, "lat": 53.19 
    //     }, "weather": [{ 
    //         "id": 803, 
    //         "main": "Clear", 
    //         "description": "broken clouds", 
    //         "icon": "04n" 
    //     }], 
    //     "base": "stations", 
    //     "main": { 
    //         "temp": 3.97, 
    //         "pressure": 1006, 
    //         "humidity": 80, 
    //         "temp_min": 2.78, 
    //         "temp_max": 5 
    //     }, 
    //     "visibility": 10000, 
    //     "wind": { "speed": 8.2, "deg": 100 }, 
    //     "clouds": { "all": 75 }, 
    //     "dt": 1574295117, 
    //     "sys": { "type": 1, "id": 1399, "country": "GB", "sunrise": 1574322371, "sunset": 1574352529 }, 
    //     "timezone": 0, 
    //     "id": 2653228, 
    //     "name": "Chester", 
    //     "cod": 200 
    // };
    // return demoJson;
}