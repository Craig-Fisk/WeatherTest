export default class SessionService {
    constructor(){};
    static storeWeather(newData) {
        const stored = window.sessionStorage.getItem('weather');
        if(stored) {
            const data = JSON.parse(stored);
            if(data.length === 5) {
                data.shift();
            }
            data.unshift(newData);
            window.sessionStorage.setItem('weather', JSON.stringify(data));
        } else {
            window.sessionStorage.setItem('weather', JSON.stringify([newData]));
        }
    }

    static retrieveWeather() {
        const stored = window.sessionStorage.getItem('weather');
        const data = JSON.parse(stored);
        return data;
    }
}