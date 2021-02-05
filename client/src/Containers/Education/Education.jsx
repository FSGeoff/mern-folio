import React from "react";

const Education = () => {
	return (
		<>
			<div
				style={{
					backgroundImage: `url("https://edge.alluremedia.com.au/m/l/2015/06/CodingSnippet.jpg")`,
					height: "1200px",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<div style={{ height: "50px" }}></div>
				<div
					className="columns"
					style={{ margin: "auto", display: "inline-block" }}
				>
					<div
						className="column "
						style={{
							height: "350",

							backgroundColor: "black",
							marginBottom: "10px",
							outline: "solid 1px white",
						}}
					>
						<img
							src="https://res.cloudinary.com/fsgeoff/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1612415969/southern-new-hampshire-university-logo_v5pzui.jpg"
							alt="SNHU"
							style={{ height: "150px", width: "350px" }}
						></img>
						<div>
							<h1
								style={{
									color: "white",
									fontSize: "20px",
									fontFamily: "sans-serif",
								}}
							>
								Southern New Hampshire University
							</h1>
							<div
								style={{
									color: "white",
									fontSize: "20px",
									fontFamily: "sans-serif",
								}}
							>
								<p>03/2021 - 06/2023</p>
								<p>Computer Science Major</p>
							</div>
						</div>
					</div>
					<div
						className="column "
						style={{
							height: "350",

							backgroundColor: "black",
							marginBottom: "10px",
							outline: "solid 1px white",
						}}
					>
						<img
							id="camp"
							src="https://res.cloudinary.com/fsgeoff/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1612416156/GaTechlogo_jgplfr.png"
							alt="Ga Tech"
							style={{ height: "150px", width: "350px" }}
						/>
						<h1
							style={{
								color: "white",
								fontSize: "20px",
								fontFamily: "sans-serif",
							}}
						>
							Georgia Tech Coding Bootcamp
						</h1>

						<div
							style={{
								color: "white",
								fontSize: "20px",
								fontFamily: "sans-serif",
							}}
						>
							<p>08/2020 - 02/2021</p>
							<p>Full Stack Developer</p>
						</div>
					</div>
				</div>

				<div className="spacer" style={{ height: "25px" }}></div>
				<div
					className="container"
					id="certs"
					style={{
						
						margin: "auto",
						border: "5px",
						padding: "8px",
					}}
				>
					<div className="columns is-mobile">
						<div className="column">
							<img
								src="https://res.cloudinary.com/fsgeoff/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1612219042/SFU_CRT_BDG_MC_Email_Spclst_RGB_wlqpd0.png"
								alt="salesforce"
							/>
						</div>
						<div className="column">
							<img
								src="https://res.cloudinary.com/fsgeoff/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1612219042/Admin_h2look.png"
								alt="salesforce"
							/>
						</div>
						<div className="column">
							<img
								src="https://res.cloudinary.com/fsgeoff/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1612219042/mcCon_sodxkt.png"
								alt="salesforce"
							/>
						</div>
					</div>
					<div className="columns is-mobile">
						<div className="column">
							<img
								src="https://res.cloudinary.com/fsgeoff/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1612219042/platApp_lufcow.png"
								alt="salesforce"
							/>
						</div>
						<div className="column">
							<img
								src="https://res.cloudinary.com/fsgeoff/image/upload/v1612219042/B2B_bmo2oj.png"
								alt="salesforce"
							/>
						</div>
						<div className="column">
							<img
								src="https://res.cloudinary.com/fsgeoff/image/upload/v1612219042/platDev_fqdq3a.png"
								alt="salesforce"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Education;
