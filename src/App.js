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

const USERNAME = 'admin@test.com'
const PASSWORD = 'password123'

function App() {
  const [loggedIn, setLoggedIn] = useState(pb.authStore.isValid)

  useEffect(() => {
    /*Testing PocketBase, seems to work despite recieving an error */
    const temp = async () => {
      // const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
      // /* Correctly get what I expect to recieve */
      // console.log(authData.admin.email)
    }
    temp()
  }, [])

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

          {/* Home page, the way to get to home currently is clicking GYST in the footer */}
          <Route path='/home' element={<Home />} />

          {/* About page */}
          <Route path='/about' element={<About />} />

          {/* login page */}
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn} />} />

          {/* signup page */}
          <Route path='/signup' element={<Signup setLoggedIn={setLoggedIn} />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
