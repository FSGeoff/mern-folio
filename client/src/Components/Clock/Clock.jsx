import React, { useState, useEffect } from "react";

const Clock = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		var timerID = setInterval(() => setDate(new Date()), 1000);

		return function cleanup() {
			clearInterval(timerID);
		};
	});

	return (
		<div>
			<h2 style={{ color: "white" }}>{date.toLocaleTimeString()}.</h2>
		</div>
	);
};

export default Clock;
