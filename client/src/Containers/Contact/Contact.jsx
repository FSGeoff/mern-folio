import React from "react";

const Contact = () => {
	return (
		<div style={{backgroundColor: "#E77919", height: "550px"}}>
			<h1
				style={{
					fontFamily: "sans-serif",
					fontSize: "45px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#202931"
				}}
			>
				Contact Me
			</h1>
			<div className="container ">
				<div
					className="column is-half
is-offset-one-quarter "
				>
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
