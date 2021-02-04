import React from "react";
import { NavLink } from "react-router-dom";
import Weather from "../Weather/Weather";

const Navbar = () => {
	return (
		<>
			<div className="tabs is-centered">
			<div style={{backgroundColor:"black"}}><NavLink to="/">
							<img
								src="https://res.cloudinary.com/fsgeoff/image/upload/v1608325040/B09C3809-D8B4-4695-875A-C46D5A87E9B4_1_201_a_c0pgqz.jpg"
								alt="Geoff Nix"
								style={{ height: "125px", width: "105px", float:"left" }}
							></img>
						</NavLink></div>
			
				<ul style={{ backgroundColor: "black" }}>
					<li className="is-active">
					
					</li>
					<NavLink
						to="/"
						style={{ color: "white", fontSize: "22px" }}
					>
						Home
					</NavLink>
					<NavLink
						to="/bio"
						activeClassName="is-active"
						style={{ color: "#1D4EE7", fontSize: "22px" }}
					>
						Bio
					</NavLink>
					<NavLink
						to="education"
						activeClassName="is-active"
						style={{ color: "#E4FC02", fontSize: "22px" }}
					>
						Education
					</NavLink>
					<NavLink
						to="workhistory"
						activeClassName="is-active"
						style={{ color: "#CC02FC", fontSize: "22px" }}
					>
						Work History
					</NavLink>
					<NavLink
						to="/projects"
						activeClassName="is-active"
						style={{ color: "#04D936", fontSize: "22px" }}
					>
						Projects
					</NavLink>
					<NavLink
						to="contact"
						activeClassName="is-active"
						style={{ color: "#FC020F", fontSize: "22px" }}
					>
						Contact
					</NavLink>
				</ul>
				<Weather />
			</div>
		</>
	);
};

export default Navbar;
