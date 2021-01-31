import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
	const [weatherState, setWeatherState] = useState();

	useEffect(() => {
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
	});

	return (
		<div className="container">
			<h1>Atlanta Weather</h1>
    <p>{weatherState.main.temp}</p>
		</div>
	);
};

export default Weather;

