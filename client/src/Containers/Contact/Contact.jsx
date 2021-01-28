import React from "react";

const Contact = () => {
	return (
		<div>
			<h1>Contact Me</h1>
			<div className="container">
				<div className="column is-6">
					<input
						class="input is-primary"
						type="text"
						placeholder="Name"
					></input>

					<input
						class="input is-primary"
						type="text"
						placeholder="Email"
					></input>
					<textarea
						class="textarea"
						placeholder="10 lines of textarea"
						rows="10"
					></textarea>
				</div>
			</div>
		</div>
	);
};

export default Contact;
