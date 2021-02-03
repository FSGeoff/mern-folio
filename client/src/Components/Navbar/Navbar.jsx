import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div className="tabs is-centered">
				<ul style={{ backgroundColor: "black" }}>
					<li className="is-active">
						<NavLink to="/">
							<img
								src="https://res.cloudinary.com/fsgeoff/image/upload/v1608325040/B09C3809-D8B4-4695-875A-C46D5A87E9B4_1_201_a_c0pgqz.jpg"
								alt="Geoff Nix"
								style={{ height: "125px", width: "105px" }}
							></img>
						</NavLink>
					</li>
					<NavLink
						to="/"
						style={{ color: "white", fontSize:"22px" }}
						
						
					>
						Home
					</NavLink>
					<NavLink
						to="/bio"
						activeClassName="is-active"
						activeStyle={{ backgroundColor: "#FC020F" }}
						style={{ color: "#1D4EE7", fontSize:"22px" }}
						
					>
						Bio
					</NavLink>
					<NavLink
						to="education"
						activeClassName="is-active"
						activeStyle={{ backgroundColor: "#04D936" }}
						style={{ color: "#E4FC02",fontSize:"22px" }}
					>
						Education
					</NavLink>
					<NavLink
						to="workhistory"
						activeClassName="is-active"
						activeStyle={{ backgroundColor: "#e77a18" }}
						style={{ color: "#CC02FC",fontSize:"22px" }}
					>
						Work History
					</NavLink>
					<NavLink
						to="/projects"
						activeClassName="is-active"
						activeStyle={{ backgroundColor: "#E4FC02" }}
						style={{ color: "#04D936",fontSize:"22px" }}
					>
						Projects
					</NavLink>
					<NavLink
						to="contact"
						activeClassName="is-active"
						activeStyle={{ backgroundColor: "#1D4EE7" }}
						style={{ color: "#FC020F",fontSize:"22px" }}
					>
						Contact
					</NavLink>
				</ul>

				{/* <div
					style={{ backgroundColor: "black" }}
					className="column is-2 "
				>
					<p style={{ float: "right", color: "white" }}>
						Atlanta, Ga
					</p>
					<br />
					<p style={{ float: "right", color: "white" }}>Temp:</p><br/>
                    <p style={{ float: "right", color: "white" }}>Forecast</p>
				</div> */}
			</div>
		</>
	);
};

export default Navbar;
