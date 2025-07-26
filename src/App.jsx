import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1>Welcome to the React Project</h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

   
      <div className="card">
        <h2>My Portfolio</h2>
        <p>
          Visit my portfolio at{' '}
          <a
            href="https://skks.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            KEERTI KRISHNA SREENIVAS S
          </a>
        </p>
      </div>
    </>
  )
}

export default App
