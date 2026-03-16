"use client";
import { useState } from "react";
import { contactsContent } from "../content/data";
import { Subtitle } from "./Subtitle";
import { useTranslations } from "next-intl";

export function Contacts() {
    const t = useTranslations("contacts");

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [buttonText, setButtonText] = useState(t("button"));

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setButtonText(t("button"));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/telegram", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            setButtonText(t("success"));
            setForm({ name: "", email: "", message: "" });
        } else {
            setButtonText(t("error"));
        }
    };

    return (
        <section
            id="contact"
            className="relative z-10 px-4 sm:px-6 py-12 md:py-20"
        >
            <div className="max-w-4xl mx-auto">
                <Subtitle text={t("subtitle")} />

                <div className="text-center mb-8 md:mb-12 text-green-300/70 text-base sm:text-xl px-2">
                    {t("text")}
                </div>

                <div className="glass-card rounded-2xl p-5 sm:p-8 md:p-12">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5 sm:space-y-6"
                    >
                        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                            <div>
                                <label className="block text-green-400 font-medium mb-2 text-sm sm:text-base">
                                    {t("name.label")}
                                </label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder={t("name.placeholder")}
                                    className="w-full px-3 sm:px-4 py-3 rounded-xl bg-green-950/50 border border-green-500/30 text-white placeholder-green-500/50 focus:border-green-400 focus:outline-none transition-colors text-sm sm:text-base"
                                />
                            </div>

                            <div>
                                <label className="block text-green-400 font-medium mb-2 text-sm sm:text-base">
                                    {t("email.label")}
                                </label>
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder={t("email.placeholder")}
                                    className="w-full px-3 sm:px-4 py-3 rounded-xl bg-green-950/50 border border-green-500/30 text-white placeholder-green-500/50 focus:border-green-400 focus:outline-none transition-colors text-sm sm:text-base"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-green-400 font-medium mb-2 text-sm sm:text-base">
                                {t("message.label")}
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder={t("message.placeholder")}
                                className="w-full px-3 sm:px-4 py-3 rounded-xl bg-green-950/50 border border-green-500/30 text-white placeholder-green-500/50 focus:border-green-400 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full neon-border px-8 py-3 sm:py-4 rounded-xl bg-green-500 hover:bg-green-400 text-green-900 font-bold text-base sm:text-lg transition-all duration-300 hover:scale-[1.02]"
                        >
                            {buttonText}
                        </button>
                    </form>

                    <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-green-500/20">
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                            {contactsContent.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-green-300 hover:text-white transition-colors"
                                    >
                                        <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg glass-card flex items-center justify-center shrink-0 text-lg sm:text-xl">
                                            <Icon />
                                        </span>
                                        <span className="font-mono text-xs sm:text-sm">
                                            {item.text}
                                        </span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
