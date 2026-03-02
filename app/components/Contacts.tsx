"use client";
import { useState } from "react";
import { contactsContent } from "../content/data";
import { Subtitle } from "./Subtitle";

export function Contacts() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [buttonText, setButtonText] = useState(contactsContent.buttonText);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setButtonText(contactsContent.buttonText);
    };

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();

        const res = await fetch("/api/telegram", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            setButtonText(contactsContent.successMessage);
            setForm({ name: "", email: "", message: "" });
        } else {
            setButtonText(contactsContent.errorMessage);
        }
    };

    return (
        <section id="contact" className="relative z-10 px-6 py-20">
            <div className="max-w-4xl mx-auto">
                <Subtitle text={contactsContent.subtitle} />
                <div className="text-center mb-12 text-green-300/70 text-xl">
                    {contactsContent.text}
                </div>

                <div className="glass-card rounded-2xl p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-green-400 font-medium mb-2">
                                    {contactsContent.name.label}
                                </label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder={
                                        contactsContent.name.placeholder
                                    }
                                    className="w-full px-4 py-3 rounded-xl bg-green-950/50 border border-green-500/30 text-white placeholder-green-500/50 focus:border-green-400 focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-green-400 font-medium mb-2">
                                    {contactsContent.email.label}
                                </label>
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder={
                                        contactsContent.email.placeholder
                                    }
                                    className="w-full px-4 py-3 rounded-xl bg-green-950/50 border border-green-500/30 text-white placeholder-green-500/50 focus:border-green-400 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-green-400 font-medium mb-2">
                                {contactsContent.message.label}
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder={
                                    contactsContent.message.placeholder
                                }
                                className="w-full px-4 py-3 rounded-xl bg-green-950/50 border border-green-500/30 text-white placeholder-green-500/50 focus:border-green-400 focus:outline-none transition-colors resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full neon-border px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 text-green-900 font-bold text-lg transition-all duration-300 hover:scale-[1.02]"
                        >
                            {buttonText}
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-green-500/20">
                        <div className="flex flex-wrap justify-center gap-6">
                            <a
                                href="mailto:rvolenc@gmail.com"
                                className="flex items-center gap-2 text-green-300 hover:text-white transition-colors"
                            >
                                <span className="w-10 h-10 rounded-lg glass-card flex items-center justify-center">
                                    📧
                                </span>
                                <span className="font-mono text-sm">
                                    rvolenc@gmail.com
                                </span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/ekaterina-kovaleva-93a466335"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-green-300 hover:text-white transition-colors"
                            >
                                <span className="w-10 h-10 rounded-lg glass-card flex items-center justify-center">
                                    💼
                                </span>
                                <span className="font-mono text-sm">
                                    LinkedIn
                                </span>
                            </a>

                            <a
                                href="https://github.com/asimo-git"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-green-300 hover:text-white transition-colors"
                            >
                                <span className="w-10 h-10 rounded-lg glass-card flex items-center justify-center">
                                    🐙
                                </span>
                                <span className="font-mono text-sm">
                                    GitHub
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
