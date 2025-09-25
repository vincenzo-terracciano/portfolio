import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {

  return (
    <>
      <div className="min-h-screen bg-brand-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <Header />

          <main>
            <Hero />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
