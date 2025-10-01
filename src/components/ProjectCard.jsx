import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

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

export default function ProjectCard({ project, index }) {
    const ref = useRef(null);

    const scale = useMotionValue(0.85);
    const opacity = useMotionValue(0.5);
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const offsetY = index * -50;

    const springScale = useSpring(scale, { stiffness: 220, damping: 25 });
    const springOpacity = useSpring(opacity, { stiffness: 220, damping: 25 });
    const springRotateX = useSpring(rotateX, { stiffness: 220, damping: 25 });
    const springRotateY = useSpring(rotateY, { stiffness: 220, damping: 25 });

    const updateEffect = () => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const screenCenter = window.innerHeight / 2;

        const distance = screenCenter - cardCenter;
        scale.set(Math.max(0.85, 1 - Math.abs(distance) / 900));
        opacity.set(Math.max(0.5, 1 - Math.abs(distance) / 700));
        rotateX.set(Math.min(12, Math.max(-12, -distance / 25)));
    };

    useEffect(() => {
        window.addEventListener("scroll", updateEffect, { passive: true });
        updateEffect();
        return () => window.removeEventListener("scroll", updateEffect);
    }, []);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotateMax = 10;
        rotateY.set((x - 0.5) * rotateMax * 2);
        rotateX.set(-(y - 0.5) * rotateMax * 2);
    };

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            ref={ref}
            style={{
                scale: springScale,
                opacity: springOpacity,
                rotateX: springRotateX,
                rotateY: springRotateY,
                translateY: offsetY,
                transformPerspective: 1000,
            }}
            className="relative w-full max-w-2xl h-[500px] rounded-2xl overflow-hidden bg-white dark:bg-brand-black border border-gray-200 dark:border-gray-700 shadow-2xl cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.07 }}
        >
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
            />

            {/* Overlay hover */}
            <div className="absolute inset-0 bg-black/50 dark:bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-300">
                {project.github && (
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded bg-white text-black font-medium"
                        whileHover={{ scale: 1.1, backgroundColor: "#f3f3f3", boxShadow: "0px 5px 15px rgba(0,0,0,0.3)" }}
                    >
                        GitHub
                    </motion.a>
                )}
                {project.demo && (
                    <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded bg-brand-blue text-white font-medium"
                        whileHover={{ scale: 1.1, backgroundColor: "#2563eb", boxShadow: "0px 5px 15px rgba(0,0,0,0.3)" }}
                    >
                        Demo
                    </motion.a>
                )}
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-blue">{project.title}</h3>
                <p className="mt-3 text-base text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className={`text-sm px-2 py-1 rounded ${techColors[t] || "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"}`}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
