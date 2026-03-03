import Link from "next/link";
import { navLinks } from "../content/data";

export function Header() {
    return (
        <header className="relative z-50 px-6 py-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center animate-pulse-glow">
                        <span className="text-xl font-bold">&lt;/&gt;</span>
                    </div>

                    <span className="font-mono text-green-400 text-sm">
                        dev.portfolio
                    </span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-green-300 hover:text-white transition-colors duration-300 relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
