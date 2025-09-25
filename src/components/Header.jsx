export default function Header() {
    return (
        <header className="flex items-center justify-between py-5">
            <h1 className="text-2xl font-bold text-brand-blue">Vincenzo Terracciano</h1>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
                <a href="#projects" className="hover:text-brand-blue transition">Progetti</a>
                <a href="#about" className="hover:text-brand-blue transition">Chi sono</a>
                <a href="#contact" className="hover:text-brand-blue transition">Contatti</a>
            </nav>
        </header>
    )
}