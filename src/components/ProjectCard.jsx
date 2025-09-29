import { motion } from "framer-motion";

// Mappa colori per tech
const techColors = {
    React: "bg-blue-500 text-white",
    Laravel: "bg-red-500 text-white",
    PHP: "bg-purple-600 text-white",
    JavaScript: "bg-yellow-400 text-black",
    HTML: "bg-orange-500 text-white",
    CSS: "bg-blue-300 text-black",
    Bootstrap: "bg-purple-700 text-white",
    NodeJS: "bg-green-600 text-white",
    Express: "bg-gray-800 text-white",
    MySQL: "bg-blue-800 text-white",
    Tailwind: "bg-teal-400 text-black",
};

export default function ProjectCard({ project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-xl overflow-hidden bg-white dark:bg-brand-black border border-gray-200 dark:border-gray-700 shadow hover:shadow-2xl transition cursor-pointer"
        >
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover"
            />

            {/* Overlay hover */}
            <div className="absolute inset-0 bg-black/50 dark:bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center gap-4 transition">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded bg-white text-black font-medium hover:bg-gray-200 transition"
                    >
                        GitHub
                    </a>
                )}
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded bg-brand-blue text-white font-medium hover:opacity-90 transition"
                    >
                        Demo
                    </a>
                )}
            </div>

            <div className="p-5">
                <h3 className="text-lg font-semibold text-brand-blue">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className={`text-xs px-2 py-1 rounded ${techColors[t] ||
                                "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                                }`}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
