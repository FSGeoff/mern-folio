import React, { useState, useEffect } from "react";

const Clock = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		var timerID = setInterval(() => setTime(new Date()), 1000);

		return function cleanup() {
			clearInterval(timerID);
		};
	});

	return (
		<div>
			<h2 style={{ color: "white" }}>{time.toLocaleTimeString()}.</h2>
		</div>
	);
};

export default Clock;
