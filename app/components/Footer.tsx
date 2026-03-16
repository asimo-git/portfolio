import { useTranslations } from "next-intl";

export function Footer() {
    const t = useTranslations("footer");
    return (
        <footer className="relative z-10 px-6 py-8 border-t border-green-500/20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-sm">
                        {"</>"}
                    </div>
                    <span className="font-mono text-green-400 text-sm">
                        dev.portfolio
                    </span>
                </div>

                <p className="text-green-300/50 text-sm">
                    © {new Date().getFullYear()} {t("text")}
                </p>
            </div>
        </footer>
    );
}
