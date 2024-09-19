import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import NoteState from './context/notes/NoteState'
import Alert from './components/Alert'

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
            </Routes>
          </div>
        </NoteState>
      </BrowserRouter>
    </>
  )
}

export default App
