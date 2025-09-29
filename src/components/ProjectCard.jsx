import { motion } from "framer-motion"

export default function ProjectCard({ project }) {

    return (
        <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="rounded-xl overflow-hidden bg-white dark:bg-brand-dark border border-gray-200 dark:border-gray-700 shadow hover:shadow-lg transition">
            <img src={project.image} alt={project.title} className="w-full h-44 object-cover" />
            <div className="p-5">
                <h3 className="text-lg font-semibold text-brand-blue">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                            {t}
                        </span>
                    ))}
                </div>
                <div className="mt-4 flex justify-end gap-3 text-sm">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="underline text-brand-blue">GitHub</a>
                    )}
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="underline text-brand-blue">Demo</a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}