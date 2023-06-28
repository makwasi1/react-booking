import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import { Container } from 'react-bootstrap'
import HomeScreen from './components/screens/HomeScreen'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Container className='my-2' >
      <Outlet />
    </Container>
    </>
  )
}

export default App
