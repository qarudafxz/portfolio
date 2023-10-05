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
import { Testimony } from "./pages/Testimony";

//smooth scrolling component
import SmoothScroll from "./components/SmoothScroll";
import { Certificates } from "./pages/Certificates";
import { Contact } from "./pages/Contact";
import { Quote } from "./pages/Quote";

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
			<SmoothScroll>
				<Landing />
				<SkillsMarquee />
				<About />
				<Achievements />
				<Quote />
				<Projects />
				<Testimony />
				<Certificates />
				<Contact />
			</SmoothScroll>
		</>
	);
}

function asyncFun() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, 3200);
	});
}

export default App;
