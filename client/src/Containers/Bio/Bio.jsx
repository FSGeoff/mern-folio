import React from "react";

const Bio = () => {
	return (
		<div
			style={{
				backgroundImage: `url("https://edge.alluremedia.com.au/m/l/2015/06/CodingSnippet.jpg")`,
				height: "800px",
				display: "flex",
				flexDirection: "column",
				clear: "both",
			}}
		>
			
			<div
				className="column is-6 is-offset-3 "
				style={{
					outline: "solid 1px white",
					backgroundColor: "black",
				}}
			>
				{" "}
				<img
					style={{
						height: "350px",
						width: "275px",
						display: "block",
						marginLeft: "auto",
						marginRight: "auto",
					}}
					className="fade-in"
					src="https://res.cloudinary.com/fsgeoff/image/upload/v1609190012/C785A719-C5BE-4347-BDD3-1E69FA46DFAD_dbbpb4.jpg"
					alt="geoff nix"
				></img>
				<div
					className="column is-one-half
is-offset-one-fourth"
				>
					<p
						style={{
							color: "white",
							fontFamily: "sans-serif",
							fontSize: "22px",
						}}
					>
						Originally, I was a Licensed Master Barber in the State
						of Georgia. In September of 2017 I was introduced to
						Salesforce. About 2+ years, a software engineering
						position, and 6 Salesforce Certifications later, I
						enrolled in Ga Tech Coding Bootcamp. There, I
						established my coding knowledge foundation, and
						particularly, React.js. I'm currently enrolled in college
						in pursuit of a Bachelor's Degree in Computer Science.
						I've cherished every step of the journey and look
						forward to learning more.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Bio;
