export default function Hero() {

    return (
        <section className="mt-10 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                Ciao, sono <span className="text-brand-blue">Vincenzo</span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                Junior Full Stack Web Developer con esperienza in React, PHP, Laravel e tanto altro.
            </p>
            <div className="mt-6 flex justify-center gap-4">
                <a
                    href="#projects"
                    className="px-6 py-3 rounded-lg bg-brand-blue text-white font-medium shadow hover:opacity-90 transition">
                    Vedi progetti
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 rounded-lg border border-brand-blue text-brand-blue font-medium hover:bg-brand-blue hover:text-white transition">
                    Contattami
                </a>
            </div>
        </section>
    )
}