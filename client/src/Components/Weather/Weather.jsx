import React, { useState, useEffect } from "react";
import axios from "axios";
import Clock from "../Clock/Clock";

const Weather = () => {
	const [weather, setWeather] = useState([]);
	const [temp, setTemp] = useState(0);
	

	useEffect(() => {
		axios
			.get(
				"https://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&appid=b6888160cea1ac7e31cb37a7c245701a"
			)
			.then((response) => {
				console.log(response.data.weather);
				console.log(response.data.main.temp);
				setWeather(response.data.weather);
				setTemp(response.data.main.temp);
				
			});
	}, []);

	return (
		<div style={{ backgroundColor: "black" }}>
			<div className="column is-2" style={{ backgroundColor: "black" }}>
				<h1
					style={{
						fontSize: "16px",
						fontFamily: "sans-serif",
						color: "white",
					}}
				>
					ATLANTA
				</h1>
				<p style={{ color: "white", fontFamily: "sans-serif" }}>
					{Math.round(temp)}&#8457;
				</p>

				{weather.map((forecast, index) => (
					<p
						key={index}
						style={{ color: "white", fontFamily: "sans-serif" }}
					>
						{forecast.main.toUpperCase()}
					</p>
				))}
				<Clock />
			</div>
		</div>
	);
};

export default Weather;
