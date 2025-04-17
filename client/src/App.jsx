import { useRoutes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { routes } from './routes'
import './App.css'

function App() {
  const element = useRoutes(routes)
  return (
    <>
      <Navbar />
      {element}
    </>
  )
}

export default App
