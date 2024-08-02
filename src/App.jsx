import { useState } from 'react'
import './App.css'
import search from './assets/icons/search.svg'
import { useStateContext } from './Context'
import {BackgroundLayout} from './components'


function App() {
  
  const[input,setInput] = useState('')
  const {weather} = useStateContext()
  console.log(weather)

  return (
    <>
      <div className='w-full h-screen text-white px-8'>
             <nav className='w-fu ll p-3 flex justify-between item-center'>
                 <h1 className='font-bold tracking-wide text-3xl'>Weather Application</h1>
                <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
                  <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]'/>
                  <input onKeyUp={(e) => {
                    if(e.key === 'Enter'){
                      //submit the form
                    }
                  }} type="text" className='focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={e => setInput(e.target.value)}/>
                </div>
             </nav>
             <BackgroundLayout></BackgroundLayout>
             <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center'>
 
             </main>
      </div>
    </>
  )
}

export default App
