
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Shared/Footer/Footer'
import Header from './Components/Shared/Header/Header'
import Courses from './Pages/Courses/Courses'
import SingleCourseDetails from './Components/Pages/Courses/SingleCourse/SingleCourseDetails'
import LetsTalk from './Pages/LetsTalk/LetsTalk'
import NotFound from './Pages/NotFound/NotFound'
import Signin from './Pages/Auth/Signin/Signin'
import Signup from './Pages/Auth/Signup/Signup'
import Profile from './Pages/Dashboard/Profile/Profile'
import RequireAuth from './Components/Others/RequireAuth/RequireAuth'
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard'
import DashboardCards from './Pages/Dashboard/Dashboard/DashboardCards'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import RunningCourse from './Pages/Dashboard/Dashboard/RunningCourse/RunningCourse'

function App() {

  return (
    <>
      <Header />

      <div className="pt-16">
        <Routes>
          <Route path='/' element={<Courses />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:id' element={<SingleCourseDetails />} />
          <Route path='/lets-talk' element={<LetsTalk />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
          {/* nasted routes */}
          <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
            <Route index element={<RequireAuth><DashboardCards /></RequireAuth>} />
            <Route path='/dashboard/overview' element={<RequireAuth><DashboardCards /></RequireAuth>} />
            <Route path='/dashboard/running-course' element={<RequireAuth><RunningCourse /></RequireAuth>} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
      <ToastContainer/>
    </>
  )
}

export default App
