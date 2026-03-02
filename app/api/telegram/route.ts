import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const text = `
Сообщение с сайта портфолио

👤 Имя: ${name}
📧 Контакты: ${email}
💬 Сообщение:
${message}
        `;

        const response = await fetch(
            `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: process.env.TELEGRAM_CHAT_ID,
                    text,
                    parse_mode: "HTML",
                }),
            },
        );

        if (!response.ok) {
            throw new Error("Telegram API error");
        }

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
