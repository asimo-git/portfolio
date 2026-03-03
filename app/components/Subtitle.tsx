export function Subtitle({ text }: { text: string }) {
    return (
        <div className="text-center mb-6 sm:mb-12">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-green-400 font-mono text-xl mb-4">
                {text}
            </span>
            {/* <h2 className="text-4xl font-bold text-white">Мой стек</h2> */}
        </div>
    );
}
