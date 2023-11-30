import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/login'
import Header from './components/header/header'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Login /> } />
      </Routes>
    </>
  )
}

export default App
