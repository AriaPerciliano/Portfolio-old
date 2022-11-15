import AboutMe from "../src/components/AboutMe";
import { CSSReset } from "../src/components/CSSReset";
import Home from "../src/components/Home";
import Menu from "../src/components/Menu";
import Skills from "../src/components/Skills";

export default function HelloThere() {
    return (
        <>
            <div style={{display: "flex", flexDirection: "column", flex: 1,}}>
                <CSSReset />
                <Menu />
                <Home />
                <AboutMe />
            </div>
        </>
    )
}