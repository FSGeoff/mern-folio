import React, { useState, useEffect } from "react";
import projectsdirectory from "./projectsdirectory.json";

const Projects = () => {
	const [projects, setProjects] = useState({});

	useEffect(() => {
		setProjects(projectsdirectory);
	}, [projects]);
	return (
		<div
			style={{
				backgroundImage: `url("https://edge.alluremedia.com.au/m/l/2015/06/CodingSnippet.jpg")`,
				height: "1000px",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<div style={{ height: "40px" }} className="spacer"></div>
			<div className="container"  >
				<div className="columns"  >
					<card 
						class="column is-three-fifths
is-offset-one-fifth" 
					>
						{projectsdirectory.map((project) => (
							<div key={project.id}
								style={{
									textAlign: "center",
									color: "white",
									backgroundColor: "black",
									border: "solid 1px white",
									margin: "10px",
									borderRadius: "15px",
									padding: "10px",
								}}
								class="tile is-child box"
								id="message-body"
							>
								<p
									class="title"
									id="message-header"
									style={{
										color: "white",
										textAlign: "center",
									}}
								>
									{project.name}
								</p>
								<p>
									<a href={project.repo}>repo</a>/
									<a href={project.website}>website</a>
								</p>

								<div class="content">
									<p>{project.body}</p>
								</div>
							</div>
						))}
					</card>
				</div>
			</div>
		</div>
	);
};

export default Projects;
