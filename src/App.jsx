import { BrowserRouter } from 'react-router-dom'
import RouterIndex from './routes/RouterIndex'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <RouterIndex />
      <Footer />
    </BrowserRouter>
  )
}

export default App