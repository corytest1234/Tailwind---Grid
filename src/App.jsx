import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>




      <div className="grid grid-cols-2 gap-4 hover:grid-cols-4 sm:grid-cols-4  md:grid-cols-6">
        <div className='bg-amber-400 rounded'>01</div>
        <div className='bg-amber-400 rounded'>02</div>
        <div className='bg-amber-400 rounded'>03</div>
        <div className='bg-amber-400 rounded'>04</div>
        <div className='bg-amber-400 rounded'>05</div>
        <div className='bg-amber-400 rounded'>06</div>
        <div className='bg-amber-400 rounded'>07</div>
        <div className='bg-amber-400 rounded'>08</div>
        <div className='bg-amber-400 rounded'>09</div>
        {/* <div className="grid grid-cols-subgrid gap-4 col-span-3">
          <div className="col-start-2 bg-amber-400 rounded">10</div>
        </div> */}
      </div>

        <br></br>
        
      <div className="grid grid-cols-6 gap-4 ">
        <div className="col-start-3 col-span-2 bg-emerald-400 rounded">01</div>
        <div className="col-start-1 col-end-3 bg-emerald-400 rounded">02</div>
        <div className="col-start-5 col-end-7 ... bg-emerald-400 rounded">03</div>
        <div className="col-start-1 col-end-7 ... bg-emerald-400 rounded">04</div>
      </div>

        <br></br>

      <div className="grid grid-rows-5 grid-flow-col gap-4">
        <div className="bg-indigo-500">01</div>
        <div className="bg-indigo-500">02</div>
        <div className="bg-indigo-500">03</div>
        <div className="bg-indigo-500">04</div>
        <div className="bg-indigo-500">05</div>
        <div className="bg-indigo-500">06</div>
      </div>

      <br />
      <div className='grid grid-rows-4 grid-flow-col gap-2 '>
        <div className='row-start-2 row-end-3 bg-fuchsia-600 rounded'>01</div>
        <div className='row-start-2 row-end-4 row-span-2 bg-fuchsia-600 rounded'>02</div>
        <div className='row-span-4 bg-fuchsia-600 rounded'>03</div>
      </div>

      <br></br>
      <div className='grid gird-rows-12 grid-flow-col gap-2'>
        <div className='bg-sky-400'>01</div>
        <div className='row-start-3 row-end-5 col-span-2 bg-sky-400'>02</div>
        <div className='row-start-7 row-end-12 col-span-3 bg-sky-400'>03</div>
      </div>
    </>
  )
}

export default App
