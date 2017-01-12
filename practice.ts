class WeatherService {
    public weatherData;

    public getWeather(callback) {
        let url = `http://api.openweathermap.org/data/2.5/weather?API=&APPID=d43debb0b9a3919fef3f0f689e82583e&q=${this.city}`;
        let request = new XMLHttpRequest();
        request.addEventListener('load', function() {
            // parse weather data from Ajax call
            this.weatherData = JSON.parse(request.responseText);
            // invoke callback to notify that we are done
            callback();
        })
        request.open('GET', url);
        request.send();
    }

    constructor(private city: string) { }
}

// create instance of weather service for Seattle
let service = new WeatherService('Seattle');

// invoke the service to get weather data for Seattle
service.getWeather(() => {
    console.log(service.weatherData);
});
