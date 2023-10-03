import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

//pages
import { Landing } from "./pages/Landing";
import { About } from "./pages/About";
import { SkillsMarquee } from "./components/SkillsMarquee";
import { Links } from "./components/Links";
import { ScrollToTop } from "./components/ScrollToTop";
import { Achievements } from "./pages/Achievements";
import { Projects } from "./pages/Projects";
import { Preloader } from "./pages/Preloader";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		asyncFun().then(() => setLoading(false));
	}, []);

	if (loading) {
		return <Preloader />;
	}

	return (
		<>
			<Links />
			<ScrollToTop />
			<Landing />
			<SkillsMarquee />
			<About />
			<Achievements />
			<Projects />
		</>
	);
}

function asyncFun() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, 2000);
	});
}

export default App;
