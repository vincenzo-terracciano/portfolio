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


              <section id="about" className="max-w-5xl mx-auto px-4 relative">

                {/* Titolo + sottotitolo animati */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ staggerChildren: 0.2 }}
                  className="text-center mb-24"
                >
                  <motion.h3
                    variants={{
                      hidden: { opacity: 0, y: 80, scale: 0.95, filter: "blur(4px)" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                        transition: { duration: 0.8, ease: "easeOut" },
                      },
                    }}
                    className="text-6xl font-extrabold text-brand-blue mb-4 tracking-tight drop-shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                  >
                    Chi Sono
                  </motion.h3>

                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 60, filter: "blur(6px)" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 1, ease: "easeOut", delay: 0.1 },
                      },
                    }}
                    className="text-lg md:text-xl text-gray-400 dark:text-gray-300 max-w-2xl mx-auto"
                  >
                    La mia storia, il percorso e le ambizioni nel mondo dello sviluppo
                  </motion.p>
                </motion.div>

                {/* Intro con effetto dolce allo scroll */}
                <motion.div
                  initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="text-center mb-32 max-w-3xl mx-auto"
                >
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic">
                    Ho sempre cercato un lavoro che non fosse solo un mestiere, ma una sfida capace di stimolare la mia curiosità e la mia creatività. Nel mondo dello sviluppo web ho trovato esattamente questo: l’occasione di trasformare idee in progetti concreti, utili e vivi.
                  </p>
                </motion.div>

                {/* Cards alternate */}
                <div className="relative flex flex-col gap-32">
                  {/* Linea verticale animata */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="absolute left-1/2 top-[calc(0px+0rem)] w-[2px] bg-gradient-to-b from-brand-blue via-brand-blue/50 to-transparent -translate-x-1/2"
                  />

                  {[
                    {
                      title: "Passato",
                      side: "left",
                      text: `Per anni ho lavorato nel settore della logistica, un ambiente frenetico e pieno di responsabilità. È lì che ho imparato l’importanza dell’organizzazione, del lavoro di squadra e del mantenere la calma anche sotto pressione. Nonostante le soddisfazioni, sentivo che mancava qualcosa: desideravo un percorso che mi appassionasse davvero, che non fosse mai monotono. La programmazione mi ha sempre incuriosito e pian piano ho iniziato a esplorare il mondo del web, affascinato dall’idea di poter costruire qualcosa di mio, capace di evolversi e di avere un impatto reale.`,
                    },
                    {
                      title: "Presente",
                      side: "right",
                      text: `Da quella curiosità è nata la decisione di investire su me stesso e intraprendere un percorso di formazione intensiva in Full Stack Web Development con Boolean, dove ho acquisito solide basi di programmazione, studiando tecnologie moderne sia frontend che backend. Ho lavorato su progetti individuali e di gruppo, imparando non solo a scrivere codice, ma a pensare come uno sviluppatore. In questo percorso ho scoperto quanto mi appassioni vedere un’idea trasformarsi in un’applicazione funzionante. Quello che amo di più dello sviluppo è che non si smette mai di imparare: ogni progetto porta nuove sfide e nuove competenze, ed è proprio questo che lo rende stimolante.`,
                    },
                    {
                      title: "Futuro",
                      side: "left",
                      text: `Guardando avanti, il mio obiettivo è crescere come sviluppatore in un contesto dinamico, in cui poter imparare da professionisti esperti e contribuire con entusiasmo e dedizione. Mi piacerebbe lavorare su progetti che abbiano un impatto reale, spaziare tra web app, mobile app, e-commerce, soluzioni personalizzate, e col tempo diventare un professionista completo, capace di unire logica, creatività e attenzione ai dettagli. In poche parole, voglio costruire il mio futuro nello sviluppo, una riga di codice alla volta.`,
                    },
                  ].map((card, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 80 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: "easeOut", delay: i * 0.3 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className={`relative flex flex-col md:flex-row items-center gap-10 ${card.side === "right" ? "md:flex-row-reverse" : ""
                        }`}
                    >
                      <div
                        className="relative bg-[#0B0F19] border border-brand-blue/40 rounded-3xl p-10 md:w-2/3
          shadow-[0_0_30px_rgba(37,99,235,0.15)]
          hover:shadow-[0_0_50px_rgba(37,99,235,0.4)]
          hover:border-brand-blue/70 
          transition-all duration-700"
                      >
                        <h4 className="font-semibold text-3xl mb-4 text-brand-blue">{card.title}</h4>
                        <p className="text-gray-300 leading-relaxed text-base md:text-lg">{card.text}</p>
                      </div>
                    </motion.div>
                  ))}
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
