import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion

export default function Header({ darkMode, setDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="relative py-5 px-4 md:px-0 max-w-6xl mx-auto">
            {/* Desktop */}
            <div className="hidden md:grid grid-cols-3 items-center">
                <div>
                    <h1 className="text-2xl font-bold text-brand-blue">Vincenzo Terracciano</h1>
                </div>
                <nav className="flex justify-center gap-8 text-sm font-medium">
                    <a href="#projects" className="hover:text-brand-blue transition">Progetti</a>
                    <a href="#about" className="hover:text-brand-blue transition">Chi sono</a>
                    <a href="#contact" className="hover:text-brand-blue transition">Contatti</a>
                </nav>
                <div className="flex justify-end">
                    <div
                        onClick={() => setDarkMode(!darkMode)}
                        className={`relative w-12 h-6 flex items-center rounded-full cursor-pointer transition-colors
              ${darkMode ? 'bg-brand-blue' : 'bg-gray-400'}`}
                    >
                        <span
                            className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform
                ${darkMode ? 'translate-x-6' : 'translate-x-1'} flex items-center justify-center text-xs`}
                        >
                            {darkMode ? '🌞' : '🌙'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="flex items-center justify-between md:hidden">
                <h1 className="text-2xl font-bold text-brand-blue">Vincenzo Terracciano</h1>

                <div className="flex items-center gap-3">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-brand-blue z-50">
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>

                    <div
                        onClick={() => setDarkMode(!darkMode)}
                        className={`relative w-10 h-5 flex items-center rounded-full cursor-pointer transition-colors
              ${darkMode ? 'bg-brand-blue' : 'bg-gray-400'} z-50`}
                    >
                        <span
                            className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform
                ${darkMode ? 'translate-x-5' : 'translate-x-1'} flex items-center justify-center text-xs`}
                        >
                            {darkMode ? '🌞' : '🌙'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Menu mobile overlay animato */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/80 dark:bg-black/90 flex flex-col items-center justify-center gap-8 z-40 text-white"
                    >
                        <a href="#projects" onClick={() => setMenuOpen(false)} className="text-2xl hover:text-brand-blue transition">Progetti</a>
                        <a href="#about" onClick={() => setMenuOpen(false)} className="text-2xl hover:text-brand-blue transition">Chi sono</a>
                        <a href="#contact" onClick={() => setMenuOpen(false)} className="text-2xl hover:text-brand-blue transition">Contatti</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
