import { KaibanProvider } from 'kaibanjs'
import './App.css'

function App() {
  return (
    <KaibanProvider>
      <div className="container">
        <h1>KaibanJS Demo</h1>
        <div id="kaiban-root"></div>
      </div>
    </KaibanProvider>
  )
}

export default App
