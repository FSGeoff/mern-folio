import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setName("");
		setEmail("");
		setMessage("");
		axios
			.post("/api/contacts", {
				name,
				email,
				message,
			})
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div
			style={{
				backgroundImage: `url("https://edge.alluremedia.com.au/m/l/2015/06/CodingSnippet.jpg")`,
				height: "600px",
			}}
		>
			<div className="spacer" style={{ height: "40px" }}></div>
			<form
				className="container "
				form
				// action="https://formspree.io/f/xknpejnz"
				// method="post"
				onSubmit={handleFormSubmit}
			>
				<div
					style={{
						fontFamily: "sans-serif",
						fontSize: "45px",
						fontWeight: "bold",
						textAlign: "center",
						color: "white",
						backgroundColor: "black",
						outline: "solid 1px white",
						borderColor: "white",
						borderRadius: "10px",
					}}
					className="column is-6
is-offset-3 "
				>
					<div style={{ height: "40px" }}></div>
					<h1>Contact Me</h1>
					<div style={{ height: "40px" }}></div>
					<input
						key="id"
						class="input is-primary"
						type="text"
						placeholder="Name"
						name="Name"
						id="name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					></input>
					<div style={{ height: "5px" }}></div>
					<input
						key="id"
						class="input is-primary"
						type="text"
						placeholder="Email"
						name="Email"
						id="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					></input>
					<div style={{ height: "5px" }}></div>
					<textarea
						key=""
						class="textarea"
						placeholder="Message"
						rows="5"
						name="Message"
						id="message"
						value={message}
						onChange={(e) => {
							setMessage(e.target.value);
						}}
					></textarea>
					<div style={{ height: "20px" }}></div>
					<button
						style={{
							height: "40px",
							backgroundColor: "black",
							color: "white",
							fontSize: "30px",
							border: "solid 1px white",
						}}
						className="button is-active is-fullwidth "
						type="submit"
					>
						SUBMIT
					</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;
