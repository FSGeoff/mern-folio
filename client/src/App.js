import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Bio from "./Containers/Bio/Bio";
import Education from "./Containers/Education/Education";
import Projects from "./Containers/Projects/Projects";
import WorkHistory from "./Containers/WorkHistory/WorkHistory";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Containers/Contact/Contact";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/workhistory" component={WorkHistory} />
					<Route path="/bio" component={Bio} />
					<Route path="/education" component={Education} />
					<Route path="/projects" component={Projects} />
					<Route path="/contact" component={Contact} />
					<Route path="/" component={Home} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
