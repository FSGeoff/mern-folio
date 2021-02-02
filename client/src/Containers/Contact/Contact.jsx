import React from "react";

const Contact = () => {
	return (
		<div
			style={{
				backgroundImage: `url("https://edge.alluremedia.com.au/m/l/2015/06/CodingSnippet.jpg")`,
				height: "600px",
				// display: "flex",
				// flexDirection: "column",
			}}
		>
			<form
				className="container "
				form
				action="https://formspree.io/f/xknpejnz"
				method="post"
			>
				<div
					className="column is-half
is-offset-one-quarter "
				>
					<div style={{ height: "40px" }}></div>
					<h1
						style={{
							fontFamily: "sans-serif",
							fontSize: "45px",
							fontWeight: "bold",
							textAlign: "center",
							color: "white",
							backgroundColor: "black",
							opacity: "0.75",
							borderColor: "white",
							borderRadius: "10px",
						}}
					>
						Contact Me
					</h1>
					<div style={{ height: "40px" }}></div>
					<input
						class="input is-primary"
						type="text"
						placeholder="Name"
						name="Name"
						id="name"
					></input>
					<div style={{ height: "10px" }}></div>
					<input
						class="input is-primary"
						type="text"
						placeholder="Email"
						name="Email"
						id="email"
					></input>
					<div style={{ height: "10px" }}></div>
					<textarea
						class="textarea"
						placeholder="message"
						rows="5"
						name="Message"
						id="message"
					></textarea>
					<button className="button is-small is-fullwidth is-info" type="submit">SUBMIT</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;
