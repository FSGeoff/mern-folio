import React from "react";

const Home = () => {
	return (
		<>
			<div
				style={{
					backgroundImage: `url("https://edge.alluremedia.com.au/m/l/2015/06/CodingSnippet.jpg")`,
					height: "100%",
					// display: "flex",
					// flexDirection: "column",
				}}
			>
				<div className="spacer" style={{ height: "60px" }}></div>
				<div className="columns" style={{ height: "550px" }}>
					<div className="column is-6 is-offset-3">
						<div
							style={{
								outline: "solid 1px white",
								backgroundColor: "black",
							}}
						>
							<p
								style={{
									fontSize: "35px",
									color: "white",
									textAlign: "center",

									boxShadow: "inherit",
								}}
							>
								<h1
									style={{
										fontSize: "50px",
										fontFamily: "sans-serif",
										color: "white",
										textAlign: "center",
									}}
								>
									Hello World
								</h1>
								My name is Geoff Nix and as you can see, I have
								a coding background. I am a full stack developer
								that loves a challenge. This site was built
								using the full MERN stack. Please explore my
								site and get to know more about me.
							</p>
							<p style={{ textAlign: "center" }}>
								<a href="/">Resume /</a>
								<a href="https://www.linkedin.com/in/geoff-nix-070512178/">
									{" "}
									LinkedIn
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
