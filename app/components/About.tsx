import { aboutContent } from "../content/data";
import { Subtitle } from "./Subtitle";

export function About() {
    return (
        <section
            id="about"
            className="relative z-10 px-4 sm:px-6 py-12 md:py-20"
        >
            <div className="max-w-6xl mx-auto">
                <Subtitle text={aboutContent.subtitle} />

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left */}
                    <div className="glass-card rounded-2xl p-5 sm:p-8 space-y-6">
                        <p
                            id="about-text"
                            className="text-green-200/90 leading-relaxed text-base sm:text-lg"
                        >
                            {aboutContent.description}
                        </p>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4">
                            {aboutContent.plaques.map((item, idx) => (
                                <div
                                    className="text-center p-3 sm:p-4 rounded-xl bg-green-500/10"
                                    key={idx}
                                >
                                    <div className="text-2xl sm:text-3xl font-bold text-green-400">
                                        {item.title}
                                    </div>
                                    <div className="text-xs sm:text-sm text-green-300/70">
                                        {item.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right */}
                    <div className="space-y-3 sm:space-y-4">
                        {aboutContent.items.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="glass-card rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 hover:bg-green-500/10 transition-colors"
                                >
                                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-lg sm:text-xl">
                                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h3 className="font-semibold text-white text-sm sm:text-base truncate">
                                            {item.subtitle}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-green-300/70 leading-snug">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
