import React from "react";

const WorkHistory = () => {
	return (
		<div
			style={{
				backgroundImage: `url("https://edge.alluremedia.com.au/m/l/2015/06/CodingSnippet.jpg")`,
				height: "800px",
				display: "flex",
                flexDirection: "column",
                clear: "both"
			}}
		>

            <div className="spacer" style={{height:"50px"}}></div>
			<div className="container" id="work-hist" style={{outline:"solid 1px white", color:"white", backgroundColor:"black", padding:"16px"}}>
				<h2 id="work-hist-hdr">
					Docmation LLC - Software Engineer
					<span id="work-date">8/2019 - 11/2020</span>
				</h2>

				<div className="columns">
					<div className="column">
						<ul id="work-skills">
							<li>&bull;User Account Creation/Management</li>
							<li>&bull;Locale/Currency Settings</li>
							<li>&bull;Apex Sheets</li>
							<li>&bull;UI Testing</li>
						</ul>
					</div>
					<div className="column">
						<ul id="work-skills">
							<li>&bull;Workflows</li>
							<li>&bull;B2B Storefronts & Communities</li>
							<li>&bull;Product Data/Image</li>
							<li>&bull;Test classNamees</li>
						</ul>
					</div>
					<div className="column">
						<ul id="work-skills">
							<li>&bull;Product Pricing</li>
							<li>&bull;Checkout Flows</li>
							<li>&bull;End-to-End Flows</li>
							<li>&bull;Configurations</li>
						</ul>
					</div>
				</div>
				<hr />
				<h1 id="proj-hdr">Completed Projects</h1>

				<div className="columns">
					<div className="column">
						<a href="https://www.hireheroesusa.org/">
							<img
								src="https://www.hireheroesusa.org/wp-content/uploads/2020/06/cropped-NEW-WEBSITE-LOGO-2.png"
								alt="Hired Heroes Logo"
							/>
						</a>
					</div>
					<hr />
					<div className="column">
						<a href="https://corp.sureprep.com/">
							<img
								src="https://41kypz1ayytu4b9qxe1ay75k-wpengine.netdna-ssl.com/wp-content/themes/sureprep2017/img/sureprep-white.png"
								style={{ width: "160px", height: "35px" }}
								alt="SurePrep Logo"
							/>
						</a>
					</div>
					<div className="column">
						<a href="https://www.egress.com/en-us/products">
							<img
								src="https://www.egress.com/images/logo.svg"
								alt="Egress Logo"
								style={{ width: "250px", height: "30px" }}
							/>
						</a>
					</div>
				</div>
				<div className="container">
					<hr />
					<div className="rec-txt">
						<h1 id="rec-hdr">References</h1>
						<ul>
							<li id="rec">
								<a
									id="rec-link"
									href="https://docs.google.com/document/d/1v849o2yQdo-E8Q849kCILKjjCAfrSOxwH20yZu38Gmo/edit"
								>
									Christina Gibson
								</a>
								-BA Analyst, Saberpoint christain@saberpoint.com
							</li>
							<li id="rec">
								<a
									id="rec-link"
									href="https://docs.google.com/document/d/1ZzZfSfCzTWu2M3InkMdIsllcudNgB-klw_lJXvvuMKg/edit"
								>
									Marc Relford
								</a>
								-Sr BA Analyst, Docmation LLC
								mrelford@docmation.com
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkHistory;
