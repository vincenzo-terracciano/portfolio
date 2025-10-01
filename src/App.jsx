import { useEffect, useRef, useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ProjectCard from "./components/ProjectCard";
import { motion, useScroll, useTransform } from "framer-motion";

function App() {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const titleRef = useRef(null);

  // Scroll collegato al titolo
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["center end", "start center"],
  });

  // Animazioni collegate allo scroll
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      });
  }, [])


  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-white dark:bg-brand-black text-black dark:text-white scroll-smooth">
          <div className="max-w-6xl mx-auto px-4">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />

            <main>
              <Hero />

              <section id="projects" className="mt-16 relative">
                <motion.div
                  ref={titleRef}
                  style={{
                    opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),   // comparsa graduale
                    scale: useTransform(scrollYProgress, [0, 1], [0.5, 1]),  // parte molto piccola, arriva a 1
                    y: useTransform(scrollYProgress, [0, 1], [50, 0]),       // leggero movimento verticale
                  }}
                  className="text-center mb-24"
                >
                  <h2 className="text-6xl font-extrabold text-brand-blue">
                    Progetti
                  </h2>
                  <p className="mt-4 text-gray-500 dark:text-gray-300 text-lg">
                    Dai un'occhiata ai miei lavori più recenti
                  </p>
                </motion.div>

                {loading ? (
                  <p className="text-center text-gray-500 mt-8">
                    Caricamento progetti...
                  </p>
                ) : (
                  <div className="mt-12 flex flex-col items-center gap-12">
                    {projects.map((p, index) => (
                      <ProjectCard key={p.id} project={p} index={index} />
                    ))}
                  </div>
                )}
              </section>

              <section id="about" className="mt-16 text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-brand-blue">Chi sono</h3>
                <p className="mt-4">
                  Sono uno sviluppatore full stack in formazione, con esperienza in React, PHP e Laravel.
                  Amo costruire progetti moderni e imparare nuove tecnologie.
                </p>
              </section>

              <section id="contact" className="mt-16 text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-brand-blue">Contatti</h3>
                <p className="mt-4">
                  Vuoi lavorare insieme? Scrivimi a{" "}
                  <span className="font-medium">vincenzo.terracciano97@gmail.com</span> o visita i
                  miei profili GitHub e LinkedIn.
                </p>
              </section>
            </main>

            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
