import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ProjectCard from "./components/ProjectCard";

function App() {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

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

              <section id="projects" className="mt-16">
                <h2 className="text-3xl font-bold text-center text-black dark:text-white">Progetti</h2>
                {loading ? (
                  <p className="text-center text-gray-500 mt-8">
                    Caricamento progetti...
                  </p>
                ) : (
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p) => (
                      <ProjectCard key={p.id} project={p} />
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
