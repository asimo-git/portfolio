export function Skills() {
    return (
        <section id="skills" className="relative z-10 px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 rounded-full glass-card text-green-400 font-mono text-sm mb-4">
                        02. Навыки
                    </span>
                    <h2 className="text-4xl font-bold text-white">
                        Мой стек технологий
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Frontend */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-green-400 mb-4">
                            Frontend
                        </h3>

                        <div className="space-y-4">
                            {/* React */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-white font-medium">
                                        React / Next.js
                                    </span>
                                    <span className="text-green-400 font-mono">
                                        95%
                                    </span>
                                </div>
                                <div className="h-3 bg-green-950 rounded-full overflow-hidden">
                                    <div
                                        className="skill-bar h-full rounded-full"
                                        style={{ width: "95%" }}
                                    />
                                </div>
                            </div>

                            {/* TypeScript */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-white font-medium">
                                        TypeScript
                                    </span>
                                    <span className="text-green-400 font-mono">
                                        90%
                                    </span>
                                </div>
                                <div className="h-3 bg-green-950 rounded-full overflow-hidden">
                                    <div
                                        className="skill-bar h-full rounded-full"
                                        style={{ width: "90%" }}
                                    />
                                </div>
                            </div>

                            {/* Tailwind */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-white font-medium">
                                        Tailwind CSS
                                    </span>
                                    <span className="text-green-400 font-mono">
                                        92%
                                    </span>
                                </div>
                                <div className="h-3 bg-green-950 rounded-full overflow-hidden">
                                    <div
                                        className="skill-bar h-full rounded-full"
                                        style={{ width: "92%" }}
                                    />
                                </div>
                            </div>

                            {/* JavaScript */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-white font-medium">
                                        JavaScript ES6+
                                    </span>
                                    <span className="text-green-400 font-mono">
                                        95%
                                    </span>
                                </div>
                                <div className="h-3 bg-green-950 rounded-full overflow-hidden">
                                    <div
                                        className="skill-bar h-full rounded-full"
                                        style={{ width: "95%" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-green-400 mb-4">
                            Инструменты
                        </h3>

                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { icon: "⚛️", name: "React" },
                                { icon: "🔷", name: "TypeScript" },
                                { icon: "🎨", name: "Tailwind" },
                                { icon: "📦", name: "Webpack" },
                                { icon: "🐙", name: "Git" },
                                { icon: "🎭", name: "Figma" },
                                { icon: "🧪", name: "Jest" },
                                { icon: "🚀", name: "Vite" },
                                { icon: "🔄", name: "Redux" },
                            ].map((tool) => (
                                <div
                                    key={tool.name}
                                    className="glass-card rounded-xl p-4 text-center hover:bg-green-500/20 transition-all duration-300 hover:scale-105 cursor-pointer group"
                                >
                                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                                        {tool.icon}
                                    </div>
                                    <span className="text-sm text-green-300">
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
