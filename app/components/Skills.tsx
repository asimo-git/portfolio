import { skillContent } from "../content/data";
import { Subtitle } from "./Subtitle";

export function Skills() {
    return (
        <section
            id="skills"
            className="relative z-10 px-4 sm:px-6 py-12 md:py-20"
            style={{ paddingTop: "7rem" }}
        >
            <div className="max-w-6xl mx-auto">
                <Subtitle text={skillContent.subtitle} />

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
                    {skillContent.skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={skill.name}
                                className="glass-card rounded-xl p-3 sm:p-4 text-center hover:bg-green-500/20 transition-all duration-300 hover:scale-105 cursor-pointer group"
                            >
                                <div className="flex items-center justify-center text-2xl sm:text-3xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <span className="text-xs sm:text-sm text-green-300 leading-tight block">
                                    {skill.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
