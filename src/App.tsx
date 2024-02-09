
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Shared/Footer/Footer'
import Header from './Components/Shared/Header/Header'
import Home from './Pages/Home/Home'
import Courses from './Pages/Courses/Courses'
import SingleCourseDetails from './Components/Pages/Courses/SingleCourse/SingleCourseDetails'
import LetsTalk from './Pages/LetsTalk/LetsTalk'

function App() {

  return (
    <>
      <Header />

      <div className="pt-16">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:id' element={<SingleCourseDetails />} />
          <Route path='/lets-talk' element={<LetsTalk />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
