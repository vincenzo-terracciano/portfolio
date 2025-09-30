import { motion } from "framer-motion";
import Typing from "./Typing";
import './Hero.css';

export default function Hero() {
    return (
        <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-0">

            {/* Titolo con glow pulsante */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-extrabold text-black dark:text-white"
            >
                Ciao, sono <span className="glow-text">Vincenzo</span>
            </motion.h1>

            {/* Sottotitolo con typing */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl"
            >
                <Typing text={`Junior Full Stack Web Developer.\nTrasformo idee in esperienze digitali moderne.`} speed={50} />
            </motion.div>

            {/* Pulsanti */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            >
                <a
                    href="#projects"
                    className="px-8 py-3 rounded-full bg-brand-blue text-white font-medium shadow-lg hover:scale-105 transition-all duration-300"
                >
                    Scopri i miei progetti
                </a>
                <a
                    href="#contact"
                    className="px-8 py-3 rounded-full border border-brand-blue text-brand-blue font-medium shadow-lg hover:bg-brand-blue hover:text-white transition-all duration-300"
                >
                    Contattami
                </a>
            </motion.div>
        </section>
    );
}
