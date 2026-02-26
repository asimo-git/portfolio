import { heroContent } from "../content/data";

export function Hero() {
    return (
        <section className="relative z-10 px-6 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="animate-slide-up opacity-0 m-0">
                            <span className="inline-block px-4 py-2 rounded-full glass-card text-green-400 font-mono text-sm mb-4">
                                {heroContent.greeting}
                            </span>
                        </div>

                        <h1
                            id="hero-title"
                            className="text-5xl md:text-7xl font-bold animate-slide-up opacity-0 delay-100"
                        >
                            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent animate-gradient">
                                {heroContent.name}
                            </span>
                        </h1>

                        <h2
                            id="hero-subtitle"
                            className="text-2xl md:text-3xl text-green-300 font-medium animate-slide-up opacity-0 delay-200"
                        >
                            {heroContent.subtitle}
                        </h2>

                        <p
                            id="hero-description"
                            className="text-lg text-green-200/80 max-w-md leading-relaxed animate-slide-up opacity-0 delay-300"
                        >
                            {heroContent.description}
                        </p>

                        <div className="flex gap-4 animate-slide-up opacity-0 delay-400">
                            <a
                                href="#projects"
                                className="neon-border px-8 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-green-950 font-semibold transition-all duration-300 hover:scale-105"
                            >
                                {heroContent.buttons.projects}
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 rounded-xl glass-card text-green-400 font-semibold hover:bg-green-500/20 transition-all duration-300"
                            >
                                {heroContent.buttons.contact}
                            </a>
                        </div>
                    </div>

                    <div className="relative animate-slide-up opacity-0 delay-500">
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            {/* Code Window */}
                            <div className="absolute inset-4 rounded-2xl glass-card overflow-hidden animate-pulse-glow">
                                <div className="flex items-center gap-2 px-4 py-3 bg-green-950/50 border-b border-green-500/20">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="ml-4 font-mono text-xs text-green-400">
                                        portfolio.tsx
                                    </span>
                                </div>

                                <div className="p-4 font-mono text-sm space-y-2">
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
                                            {heroContent.codeWindow.developer}
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

                            {/* Floating Icons */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-2xl animate-float shadow-lg shadow-cyan-500/30">
                                ⚛️
                            </div>

                            <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xl animate-float-delay shadow-lg shadow-blue-500/30">
                                📱
                            </div>

                            <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-lg animate-float shadow-lg shadow-amber-500/30">
                                ✨
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
