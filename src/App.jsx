import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import NoteState from './context/notes/NoteState'
import Alert from './components/Alert'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <NoteState>
          <Navbar/>
          <Alert message={"This is Yash Kumar Bandhiye"}/>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/signup' element={<Signup />}/>
            </Routes>
          </div>
        </NoteState>
      </BrowserRouter>
    </>
  )
}

export default App
