export function Projects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description:
                "Современный интернет-магазин с корзиной, фильтрами и оплатой",
            icon: "🛒",
            gradient: "from-green-400 via-emerald-500 to-teal-600",
            tags: ["React", "Redux", "Stripe"],
        },
        {
            title: "Analytics Dashboard",
            description:
                "Интерактивная панель аналитики с графиками в реальном времени",
            icon: "📊",
            gradient: "from-purple-400 via-pink-500 to-red-500",
            tags: ["Next.js", "D3.js", "WebSocket"],
        },
        {
            title: "Chat Application",
            description: "Мессенджер с видеозвонками и групповыми чатами",
            icon: "💬",
            gradient: "from-cyan-400 via-blue-500 to-indigo-600",
            tags: ["React", "Socket.io", "WebRTC"],
        },
    ];

    return (
        <section id="projects" className="relative z-10 px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 rounded-full glass-card text-green-400 font-mono text-sm mb-4">
                        03. Проекты
                    </span>
                    <h2 className="text-4xl font-bold text-white">
                        Избранные работы
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="project-card glass-card rounded-2xl overflow-hidden group cursor-pointer"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div
                                    className={`project-image absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 flex items-center justify-center`}
                                >
                                    <span className="text-6xl">
                                        {project.icon}
                                    </span>
                                </div>

                                <div className="project-overlay absolute inset-0 bg-green-950/80 opacity-0 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <button className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-400 transition-colors">
                                        👁️
                                    </button>
                                    <button className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                                        🔗
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-green-300/70 text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-mono"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
