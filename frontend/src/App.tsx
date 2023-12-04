import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/login'
import Dashboard from './pages/dashboard/dashboard'
import Clients from './pages/clients/clients'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path='/home' element={<Dashboard/>}></Route>
        <Route path='/clients' element={<Clients/>}/>
        <Route path='/provider' element></Route>
        <Route path='/products' element></Route>
        <Route path='/users' element></Route>
      </Routes>
    </>
  )
}

export default App
