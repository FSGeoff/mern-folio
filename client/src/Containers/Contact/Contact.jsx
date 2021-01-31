import React from "react";

const Contact = () => {
	return (
		<div style={{
            backgroundImage: `url("https://edge.alluremedia.com.au/m/l/2015/06/CodingSnippet.jpg")`,
            // height: "100%",
            // display: "flex",
            // flexDirection: "column",
        }}>
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
