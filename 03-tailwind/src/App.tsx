import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-100">
      <div className="flex justify-around items-center mb-10">
        <a href="https://vitejs.dev" target="_blank" className="mx-4">
          <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="mx-4">
          <img src={reactLogo} className="w-16 h-16 animate-[spin_3s_linear_infinite]" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-4">Vite + React</h1>
      <div className="p-4 bg-gray-900 rounded-lg shadow-md text-center">
        <button
          className="inline-block px-8 py-2 font-semibold text-white bg-gray-800 rounded-md transition duration-300 ease-in-out hover:bg-purple-700"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="text-gray-200 mt-6">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-200 mt-6">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;