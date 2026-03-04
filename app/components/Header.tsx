"use client";
import Link from "next/link";
import { navLinks } from "../content/data";
import { useState } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

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
                <nav className="hidden sm:flex gap-8">
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

                {/* Burger Button */}
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    className="sm:hidden flex flex-col gap-1.5 z-50"
                >
                    <span
                        className={`h-0.5 w-6 bg-green-300 transition-all ${
                            isOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-green-300 transition-all ${
                            isOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-green-300 transition-all ${
                            isOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    />
                </button>

                {/* Mobile Menu Overlay (backdrop) */}
                <div
                    onClick={() => setIsOpen(false)}
                    className={`sm:hidden fixed inset-0 z-30 bg-green-950/40 backdrop-blur-sm transition-opacity duration-300 ${
                        isOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    }`}
                />

                {/* Mobile Menu Panel */}
                <div
                    className={`sm:hidden fixed top-4 right-4 z-40 w-56 transition-all duration-300 ease-out ${
                        isOpen
                            ? "opacity-100 translate-x-0 scale-100"
                            : "opacity-0 translate-x-8 scale-95 pointer-events-none"
                    }`}
                >
                    <div className="glass-card rounded-2xl overflow-hidden border border-green-500/30 shadow-xl shadow-green-950/50">
                        {/* Panel header */}
                        <div className="px-4 py-3 bg-green-950/60 border-b border-green-500/20 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="font-mono text-xs text-green-400">
                                navigation
                            </span>
                        </div>

                        {/* Links */}
                        <nav className="p-2">
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-green-300 hover:text-white hover:bg-green-500/15 transition-all duration-200 group"
                                    style={{
                                        transitionDelay: isOpen
                                            ? `${idx * 40}ms`
                                            : "0ms",
                                    }}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/50 group-hover:bg-green-400 transition-colors shrink-0" />
                                    <span className="font-medium text-sm">
                                        {link.label}
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
