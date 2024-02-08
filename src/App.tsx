
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Shared/Footer/Footer'
import Header from './Components/Shared/Header/Header'
import Home from './Pages/Home/Home'
import Courses from './Pages/Courses/Courses'

function App() {

  return (
    <>
      <Header />

      <div className="pt-16">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
