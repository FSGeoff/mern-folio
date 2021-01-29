import React from "react";

const Home = () => {
	return (
		
			<div
				style={{
					backgroundColor: "#E77919",
					height: "100%",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<div className="columns" style={{height: "550px"}}>
					<div className="column is-8 is-offset-2">
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
                        <div style={{outline: "solid 1px white",}}><p
							style={{
								fontSize: "35px",
								color: "white",
								textAlign: "center",
                                
                                boxShadow: "inherit",
							}}
						>
							My name is Geoff Nix and welcome to my site. I am a
							full stack developer that loves a challenge. This
							site was built using the full MERN stack. Please
							explore my site and get to know more about me.
						</p>
						<p style={{ textAlign: "center" }}>
							<a href="/">Resume /</a><a href="https://www.linkedin.com/in/geoff-nix-070512178/"> LinkedIn</a>
						</p></div>
						
					</div>
				</div>
			</div>
		
        
	);
};

export default Home;
