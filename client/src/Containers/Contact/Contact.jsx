import React from "react";

const Contact = () => {
	return (
		<div>
			<h1>Feel Free to Contact Me</h1>
			<div className="container is-centered">
				<div className="column is-6 ">
					<input
						class="input is-primary"
						type="text"
						placeholder="Name"
					></input>
					<div style={{ height: "10px" }}></div>
					<input
						class="input is-primary"
						type="text"
						placeholder="Email"
					></input>
					<div style={{ height: "10px" }}></div>
					<textarea
						class="textarea"
						placeholder="message"
						rows="5"
					></textarea>
				</div>
			</div>
		</div>
	);
};

export default Contact;
