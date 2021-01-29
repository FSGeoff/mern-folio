import React from "react";
import {  NavLink } from "react-router-dom";
// import Weather from "../Weather/Weather";

const Navbar = () => {
	return (
		<>
			<div>
				<div className="tabs is-centered">
					<ul style={{ backgroundColor: "#202931" }}>
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
							style={{ color: "white" }}
							// activeClassName="is-active"
							// activeStyle={{ backgroundColor: "#e77a18" }}
						>
							Home
						</NavLink>
						<NavLink
							to="/bio"
							activeClassName="is-active"
							activeStyle={{ backgroundColor: "#e77a18" }}
							style={{ color: "white" }}
						>
							Bio
						</NavLink>
						<NavLink
							to="education"
							activeClassName="is-active"
							activeStyle={{ backgroundColor: "#e77a18" }}
							style={{ color: "white" }}
						>
							Education
						</NavLink>
						<NavLink
							to="workhistory"
							activeClassName="is-active"
							activeStyle={{ backgroundColor: "#e77a18" }}
							style={{ color: "white" }}
						>
							Work History
						</NavLink>
						<NavLink
							to="/projects"
							activeClassName="is-active"
							activeStyle={{ backgroundColor: "#e77a18" }}
							style={{ color: "white" }}
						>
							Projects
						</NavLink>
						<NavLink
							to="contact"
							activeClassName="is-active"
							activeStyle={{ backgroundColor: "#e77a18" }}
							style={{ color: "white" }}
						>
							Contact
						</NavLink>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
