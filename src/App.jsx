import { useState } from 'react'
import Game from './components/Game'


import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
   <Game></Game>
        
    </div>
  )
}

export default App
