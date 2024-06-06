import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MainPage from './components/MainPage'
import RouterIndex from './routes/RouterIndex'
import {BrowserRouter} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <RouterIndex />
      </BrowserRouter>
    </>
  )
}

export default App
