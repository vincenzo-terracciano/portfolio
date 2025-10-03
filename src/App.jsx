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
                  className="text-center mb-16"
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

              <section id="about" className="mt-32 max-w-5xl mx-auto px-4">
                {/* Intro */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-center mb-20"
                >
                  <h3 className="text-4xl font-extrabold text-brand-blue mb-4">
                    Chi Sono
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                    Ho sempre cercato un lavoro che non fosse solo un mestiere, ma una sfida
                    capace di stimolare la mia curiosità e la mia creatività. Nel mondo dello
                    sviluppo web ho trovato esattamente questo: l’occasione di trasformare idee
                    in progetti concreti, utili e vivi.
                  </p>
                </motion.div>

                {/* 3 card: Passato, Presente, Futuro */}
                <div className="grid md:grid-cols-3 gap-10">
                  {/* Passato */}
                  <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
                  >
                    <h4 className="font-semibold text-xl mb-4 text-brand-blue">🕰️ Passato</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                      Per anni ho lavorato nel settore della logistica, un ambiente frenetico e
                      pieno di responsabilità. È lì che ho imparato l’importanza
                      dell’organizzazione, del lavoro di squadra e del mantenere la calma anche
                      sotto pressione. Nonostante le soddisfazioni, sentivo che mancava
                      qualcosa: desideravo un percorso che mi appassionasse davvero, che non
                      fosse mai monotono. La programmazione mi ha sempre incuriosito e pian piano
                      ho iniziato a esplorare il mondo del web, affascinato dall’idea di poter
                      costruire qualcosa di mio, capace di evolversi e di avere un impatto reale.
                    </p>
                  </motion.div>

                  {/* Presente */}
                  <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
                  >
                    <h4 className="font-semibold text-xl mb-4 text-brand-blue">⏳ Presente</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                      Da quella curiosità è nata la decisione di investire su me stesso e
                      intraprendere un percorso di formazione intensiva in Full Stack Web
                      Development con Boolean, dove ho acquisito solide basi di programmazione
                      studiando tecnologie moderne sia frontend che backend. Ho lavorato su
                      progetti individuali e di gruppo, imparando non solo a scrivere codice, ma
                      a pensare come uno sviluppatore. In questo percorso ho scoperto quanto mi
                      appassioni vedere un’idea trasformarsi in un’applicazione funzionante.
                      Quello che amo di più dello sviluppo è che non si smette mai di imparare:
                      ogni progetto porta nuove sfide e nuove competenze, ed è proprio questo che
                      lo rende stimolante.
                    </p>
                  </motion.div>

                  {/* Futuro */}
                  <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
                  >
                    <h4 className="font-semibold text-xl mb-4 text-brand-blue">🚀 Futuro</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                      Guardando avanti, il mio obiettivo è crescere come sviluppatore in un
                      contesto dinamico, dove poter imparare da professionisti più esperti e
                      contribuire con entusiasmo e dedizione. Mi piacerebbe lavorare su progetti
                      che abbiano un impatto reale, spaziare tra web app, mobile app, e-commerce,
                      soluzioni personalizzate, e col tempo diventare un professionista completo,
                      capace di unire logica, creatività e attenzione ai dettagli. In poche
                      parole, voglio costruire il mio futuro nello sviluppo, un riga di codice
                      alla volta.
                    </p>
                  </motion.div>
                </div>
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
