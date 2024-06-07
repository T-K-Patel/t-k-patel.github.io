import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import PortFolioMadeWith from "./components/PortFolioMadeWith";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills";
import SocialMedia from "./components/SocialMedia";

function App() {
    return (
        <>
            <NavBar />
            <Hero />
            <AboutMe />
            {/* <Education /> */}
            <Skills />
            <Projects />
            <SocialMedia />
            <ContactMe />
            <PortFolioMadeWith />
            <Footer />
        </>
    );
}

export default App;
