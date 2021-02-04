import React, { useState, useEffect } from "react";

const Clock = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		setTime(new Date());
	}, []);

	return <div>{time}</div>;
};

export default Clock;
