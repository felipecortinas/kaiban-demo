import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const loadKaiban = async () => {
      try {
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/kaibanjs@0.13.0/dist/bundle.js'
        script.async = true
        script.onload = () => {
          if (window.Kaiban) {
            window.Kaiban.init({
              target: '#kaiban-root',
              apiKey: import.meta.env.VITE_OPENAI_API_KEY
            })
          }
        }
        document.body.appendChild(script)
      } catch (error) {
        console.error('Failed to load KaibanJS:', error)
      }
    }
    loadKaiban()
  }, [])

  return (
    <div className="container">
      <h1>KaibanJS Demo</h1>
      <div id="kaiban-root"></div>
    </div>
  )
}

export default App
