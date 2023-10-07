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
import Stack from "./pages/Stack";
import Jobs from "./pages/Jobs";

import { Navbar } from "./components/Navbar";

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
			<Navbar />
			<SmoothScroll>
				<div id='home'>
					<Landing />
				</div>
				<div id='about'>
					<SkillsMarquee />
					<About />
					<Jobs />
					<Achievements />
					<Quote />
				</div>
				<div id='projects'>
					<Stack />
					<Projects />
				</div>
				<div id='testimonials'>
					<Testimony />
				</div>
				<div id='contact'>
					<Certificates />
					<Contact />
				</div>
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
