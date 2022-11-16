import AboutMe from "../src/components/AboutMe";
import Contact from "../src/components/ContactMe";
import { CSSReset } from "../src/components/CSSReset";
import Home from "../src/components/Home";
import Menu from "../src/components/Menu";
import Projects from "../src/components/Projects";
import Skills from "../src/components/Skills";

export default function HomePage() {
    return (
        <>
            <div style={{display: "flex", flexDirection: "column", flex: 1,}}>
                <CSSReset />
                <Menu />
                <Home />
                <AboutMe />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </>
    )
}