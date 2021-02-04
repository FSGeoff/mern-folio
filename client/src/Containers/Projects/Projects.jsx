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
				height: "700px",
				display: "flex",
			}}
		>
			<div style={{ height: "40px" }} className="spacer"></div>
			<div className="container">
            <div className="spacer" style={{height:"50px", margin:"8px"}}></div>
				<div className="columns" style={{ paddingBottom: "25px" }}>
                    
					<card class="column is-8 is-offset-2">
						{projectsdirectory.map((project) => (
							<div
								key={project.id}
								style={{
									textAlign: "center",
									color: "white",
									backgroundColor: "black",
									border: "solid 1px white",
									marginBottom: "10px",

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
									<a href={project.repo}>GitHub Repo </a>/
									<a href={project.website}>Website</a>
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
