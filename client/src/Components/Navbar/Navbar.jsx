import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<nav
				style={{ height: "125px", backgroundColor: "blanchedalmond" }}
				className="navbar"
				role="navigation"
				aria-label="main navigation"
			>
				<div className="navbar-brand">
					<a
						href="/"
						role="button"
						className="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>
				<div className="Pic">
					{" "}
					<img
						src="https://res.cloudinary.com/fsgeoff/image/upload/v1608325040/B09C3809-D8B4-4695-875A-C46D5A87E9B4_1_201_a_c0pgqz.jpg"
						alt="Geoff Nix"
						style={{ height: "125px", width: "105px" }}
					></img>
				</div>

				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
						

						<div className="navbar-item has-dropdown is-hoverable">
							<Link to="/" className="navbar-link" href="/">
								Geoff Nix
							</Link>

							<div className="navbar-dropdown">
								<Link
									to="/education"
									className="navbar-item"
									href="/education"
								>
									Education
								</Link>
								<Link
									to="/bio"
									className="navbar-item"
									href="/"
								>
									Bio
								</Link>
								<Link
									to="/workhistory"
									className="navbar-item"
									href="/"
								>
									Work History
								</Link>

								<Link
									to="/projects"
									className="navbar-item"
									href="/"
								>
									Projects
								</Link>
								<Link
									to="/contacts"
									className="navbar-item"
									href="/"
								>
									Contacts
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
