import { skillContent } from "../content/data";
import { Subtitle } from "./Subtitle";

export function Skills() {
    return (
        <section id="skills" className="relative z-10 px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <Subtitle text={skillContent.subtitle} />

                {/* Tools */}
                <div className="space-y-6">
                    <div className="grid grid-cols-6 gap-4">
                        {skillContent.skills.map((tool) => (
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
        </section>
    );
}
