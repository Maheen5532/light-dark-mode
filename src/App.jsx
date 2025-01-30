import { useState } from 'react'
import './App.css'

function App() {
  const [Mode, setMode] = useState(false)

  return (
    <div className={`flex justify-center items-center h-screen ${Mode ? 'bg-black' : 'bg-White'}`}>
      <div className={`text-center ${Mode ? 'border-white' : 'border-black'}`}>
        <h1 className={`text-5xl ${Mode ? 'text-white' : 'text-black'}`}>Light/Dark Mode</h1>
        <button
          className="mt-4 p-2 rounded"
          style={{
            background: Mode ? "white" : "black",
            color: Mode ? "black" : "white",
          }}
          onClick={() => setMode(!Mode)}
        >
          {Mode ? "Dark Mode" : "Light Mode"} 
        </button>
      </div>
    </div>
  )
}

export default App
