import { About } from "./components/About";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function Home() {
    return (
        <div className="w-full min-h-full relative">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            {/* <Contact />
            <Footer /> */}
        </div>
    );
}
