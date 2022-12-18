import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './components/NavBar'
import Footer from './components/Footer'
import Landing from './components/Landing'
import About from './components/About'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import pb from './pocketBase'

function App() {
  const [loggedIn, setLoggedIn] = useState(pb.authStore.isValid)

  return (
    <Router>
      <div className='bg-mint-900'>
        {/* Navbar */}
        <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

        {/* Everything in routes handles page navigation */}
        <Routes>
          {/* landing page */}
          <Route
            path='/'
            exact
            element={
              <>
                <Landing />
              </>
            }
          />

          {/* Home page */}
          <Route path='/home' element={<Home />} />

          {/* About page */}
          <Route path='/about' element={<About />} />

          {/* login page */}
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn} />} />

          {/* signup page */}
          <Route path='/signup' element={<Signup setLoggedIn={setLoggedIn} />} />
        </Routes>

        {/* Footer */}
        <Footer loggedIn={loggedIn} />
      </div>
    </Router>
  )
}

export default App
