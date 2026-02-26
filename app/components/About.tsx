import { aboutContent } from "../content/data";

export function About() {
    return (
        <section id="about" className="relative z-10 px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 rounded-full glass-card text-green-400 font-mono text-sm mb-4">
                        {aboutContent.greeting}
                    </span>
                    <h2 className="text-4xl font-bold text-white">
                        {aboutContent.subtitle}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left */}
                    <div className="glass-card rounded-2xl p-8 space-y-6">
                        <p
                            id="about-text"
                            className="text-green-200/90 leading-relaxed text-lg"
                        >
                            {aboutContent.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {aboutContent.plaques.map((item, idx) => (
                                <div
                                    className="text-center p-4 rounded-xl bg-green-500/10"
                                    key={idx}
                                >
                                    <div className="text-3xl font-bold text-green-400">
                                        {item.title}
                                    </div>
                                    <div className="text-sm text-green-300/70">
                                        {item.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right */}
                    <div className="space-y-4">
                        {aboutContent.items.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass-card rounded-xl p-4 flex items-center gap-4 hover:bg-green-500/10 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-xl">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">
                                        {item.subtitle}
                                    </h3>
                                    <p className="text-sm text-green-300/70">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
