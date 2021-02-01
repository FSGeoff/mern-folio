import React from "react";

const Bio = () => {
	return (
		<div
			style={{
				backgroundImage: `url("https://edge.alluremedia.com.au/m/l/2015/06/CodingSnippet.jpg")`,
				height: "600px",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<div className="spacer" style={{ height: "50px" }}></div>
			<div
				className="column is-three-fifths
is-offset-one-fifth"
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
						Salesforce. About 2 years, a software engineering
						position, and 6 Salesforce Certifications later, I
						entered Ga Tech Coding Bootcamp. I'm definitely enjoying
						the journey. So much to learn.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Bio;
