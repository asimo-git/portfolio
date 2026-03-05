import Image from "next/image";
import Link from "next/link";
import { projectsContent } from "../content/data";
import { Subtitle } from "./Subtitle";

export function Projects() {
    return (
        <section id="projects" className="relative z-10 px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <Subtitle text={projectsContent.subtitle} />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsContent.projects.map((project) => (
                        <div
                            key={project.title}
                            className="project-card glass-card rounded-2xl overflow-hidden group flex flex-col"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-green-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                                    >
                                        🔗
                                    </Link>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-green-300/70 text-sm mb-4 shrink-0">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
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
