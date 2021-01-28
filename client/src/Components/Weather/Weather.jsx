import React, { useState, useEffect } from "react";
import axios from "axios";


const Weather = () => {
	const [weatherState, setWeatherState] = useState();

	const getWeather = () => {
        axios
			.get(
				"https://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&appid=b6888160cea1ac7e31cb37a7c245701a"
			)
			.then((response) => {
				console.log(response.data.weather[0].description.toUpperCase());
				console.log(Math.round(response.data.main.temp));

				console.log(response.data);
				setWeatherState(response.data);
				console.log(weatherState);
			})
			.catch((err) => {
				console.log(err);
			});
    };

	useEffect(() => {
        getWeather()
        // setWeatherState(response.data)
	});

	return (
		<div className="container">
            <p>{weatherState.main.temp}</p>
			{/* {weatherState.map((forecast) => (
				<div>
					<h1>Atlanta Weather</h1>
					<p>Temp: {forecast.temp}&#176;</p>
					<p></p>
				</div>
			))} */}
		</div>
	);
};

export default Weather;
