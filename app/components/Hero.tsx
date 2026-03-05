import { heroContent } from "../content/data";
import { FaReact, FaMobileAlt, FaApple } from "react-icons/fa";

export function Hero() {
    return (
        <section className="relative z-10 px-4 sm:px-6 py-12 md:py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left column*/}
                    <div className="space-y-5 md:space-y-6">
                        <div className="animate-slide-up opacity-0">
                            <span className="inline-block px-4 py-2 rounded-full glass-card text-green-400 font-mono text-xl">
                                {heroContent.greeting}
                            </span>
                        </div>

                        <h1
                            id="hero-title"
                            className="text-4xl sm:text-5xl md:text-7xl font-bold animate-slide-up opacity-0 delay-100"
                        >
                            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent animate-gradient">
                                {heroContent.name}
                            </span>
                        </h1>

                        <h2
                            id="hero-subtitle"
                            className="text-xl sm:text-2xl md:text-3xl text-green-300 font-medium animate-slide-up opacity-0 delay-200"
                        >
                            {heroContent.subtitle}
                        </h2>

                        <p
                            id="hero-description"
                            className="text-base sm:text-lg text-green-200/80 max-w-md leading-relaxed animate-slide-up opacity-0 delay-300"
                        >
                            {heroContent.description}
                        </p>

                        <div className="flex flex-wrap gap-3 sm:gap-4 animate-slide-up opacity-0 delay-400">
                            <a
                                href="#projects"
                                className="neon-border px-6 sm:px-8 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-green-950 font-semibold transition-all duration-300 hover:scale-105"
                            >
                                {heroContent.buttons.projects}
                            </a>
                            <a
                                href="#contact"
                                className="px-6 sm:px-8 py-3 rounded-xl glass-card text-green-400 font-semibold hover:bg-green-500/20 transition-all duration-300"
                            >
                                {heroContent.buttons.contact}
                            </a>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="animate-slide-up opacity-0 delay-500">
                        <div className="relative w-full max-w-md mx-auto aspect-square">
                            <div className="absolute inset-0">
                                <div className="absolute inset-4 rounded-2xl glass-card overflow-hidden animate-pulse-glow">
                                    {/* Window chrome */}
                                    <div className="flex items-center gap-2 px-4 py-3 bg-green-950/50 border-b border-green-500/20">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                        <span className="ml-4 font-mono text-xs text-green-400">
                                            portfolio.tsx
                                        </span>
                                    </div>

                                    {/* Code body */}
                                    <div className="p-4 font-mono text-xs sm:text-sm space-y-2">
                                        <div>
                                            <span className="text-purple-400">
                                                const
                                            </span>{" "}
                                            <span className="text-green-300">
                                                developer
                                            </span>{" "}
                                            = {"{"}
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-emerald-400">
                                                name:
                                            </span>{" "}
                                            <span className="text-amber-300">
                                                {
                                                    heroContent.codeWindow
                                                        .developer
                                                }
                                            </span>
                                            ,
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-emerald-400">
                                                skills:
                                            </span>{" "}
                                            [
                                        </div>
                                        {heroContent.codeWindow.skills.map(
                                            (skill, idx) => (
                                                <div className="pl-8" key={idx}>
                                                    <span className="text-amber-300">
                                                        {skill}
                                                    </span>
                                                    ,
                                                </div>
                                            ),
                                        )}
                                        <div className="pl-4">],</div>
                                        <div className="pl-4">
                                            <span className="text-emerald-400">
                                                passion:
                                            </span>{" "}
                                            <span className="text-amber-300">
                                                ∞
                                            </span>
                                        </div>
                                        <div>{"};"}</div>
                                    </div>
                                </div>

                                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xl sm:text-2xl animate-float shadow-lg shadow-cyan-500/30">
                                    <FaReact className="text-3xl sm:text-2xl text-white" />
                                </div>

                                <div className="absolute bottom-0 left-0 w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-lg sm:text-xl animate-float-delay shadow-lg shadow-blue-500/30">
                                    <FaMobileAlt className="text-lg sm:text-xl text-white" />
                                </div>

                                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-400 flex items-center justify-center text-base sm:text-lg animate-float shadow-lg shadow-amber-500/30">
                                    <FaApple className="text-lg sm:text-xl text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
