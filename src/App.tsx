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

function App() {
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

export default App;
