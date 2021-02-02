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
					className="column is-half
is-offset-one-quarter "
				>
					<div style={{ height: "40px" }}></div>
					<h1>Contact Me</h1>
					<div style={{ height: "40px" }}></div>
					<input
						class="input is-primary"
						type="text"
						placeholder="Name"
						name="Name"
						id="name"
					></input>
					<div style={{ height: "5px" }}></div>
					<input
						class="input is-primary"
						type="text"
						placeholder="Email"
						name="Email"
						id="email"
					></input>
					<div style={{ height: "5px" }}></div>
					<textarea
						class="textarea"
						placeholder="message"
						rows="5"
						name="Message"
						id="message"
					></textarea>
					<div style={{ height: "20px" }}></div>
					<button
						style={{
							height: "40px",
							backgroundColor: "black",
							color: "white",
							fontSize: "30px",
							borderRadius: "15px",
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
