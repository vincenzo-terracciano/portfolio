import { motion } from "framer-motion";
import Typing from "./Typing"; // Componente typing da creare
import './Hero.css';

export default function Hero() {
    return (
        <section className="relative mt-16 text-center px-4 md:px-0 min-h-[80vh] flex flex-col justify-center">

            {/* Titolo */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-extrabold leading-tight relative z-10"
            >
                <Typing
                    text="Ciao, sono "
                    speed={50}
                    delay={0}
                />
                <span className="animated-gradient">
                    <Typing
                        text="Vincenzo"
                        speed={50}
                        delay={600}
                    />
                </span>
            </motion.h2>

            {/* Sottotitolo */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg md:text-xl relative z-10"
            >
                <p className="font-semibold">
                    <Typing
                        text="Junior Full Stack Web Developer."
                        speed={40}
                        delay={1500}
                    />
                </p>
                <Typing
                    text="Trasformo idee in esperienze digitali moderne."
                    speed={40}
                    delay={2800}
                />
            </motion.div>

            {/* Pulsanti */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4, duration: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row justify-center gap-4 relative z-10"
            >
                <a
                    href="#projects"
                    className="px-8 py-3 rounded-full bg-brand-blue text-white font-medium shadow-xl hover:scale-105 transition-transform duration-300"
                >
                    Scopri i miei progetti
                </a>
                <a
                    href="#contact"
                    className="px-8 py-3 rounded-full border border-brand-blue text-brand-blue font-medium shadow-xl hover:scale-105 hover:bg-brand-blue hover:text-white transition-all duration-300"
                >
                    Contattami
                </a>
            </motion.div>
        </section>
    );
}
