export function Hero() {
    return (
        <header className="relative z-10 px-6 py-16 md:py-24">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <span className="inline-block px-4 py-2 rounded-full glass-card text-green-400 font-mono text-sm">
                        👋 Привет, я
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold">
                        <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent animate-gradient">
                            Алексей Петров
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-green-300">
                        Frontend-разработчик
                    </h2>

                    <p className="text-lg text-green-200/80 max-w-md">
                        Создаю современные веб-приложения с красивым UI и
                        плавными анимациями.
                    </p>
                </div>
            </div>
        </header>
    );
}
