import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TechnologyGrid from './components/TechnologyGrid.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState([])

  useEffect(() => {
    let isMounted = true

    async function loadTechnologies() {
      try {
        const response = await fetch('/technologies.json')
        const data = await response.json()
        if (isMounted) setTechnologies(data)
      } catch (error) {
        if (isMounted) toast.error('Could not load the technology list. Please refresh.')
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    loadTechnologies()
    return () => {
      isMounted = false
    }
  }, [])

  function handleAdd(tech) {
    const alreadyAdded = stack.some((item) => item.id === tech.id)
    if (alreadyAdded) {
      toast.warn(`${tech.name} is already in your stack.`)
      return
    }
    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack.`)
  }

  function handleRemove(id) {
    const removed = stack.find((item) => item.id === id)
    setStack((prev) => prev.filter((item) => item.id !== id))
    if (removed) toast.info(`${removed.name} removed from your stack.`)
  }

  function handleRemoveAll() {
    if (stack.length === 0) return
    setStack([])
    toast.info('Your stack has been cleared.')
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TechnologyGrid
          technologies={technologies}
          loading={loading}
          stack={stack}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2500} newestOnTop />
    </div>
  )
}
