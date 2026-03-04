import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { Skills } from "./components/Skills";

export default function Home() {
    return (
        <div className="page">
            <div>
                <Header />
                <Hero />
            </div>
            <About />
            <Skills />
            <Projects />
            <div>
                <Contacts />
                <Footer />
            </div>

            <ScrollToTopButton />
        </div>
    );
}
