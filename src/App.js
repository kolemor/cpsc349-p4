import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from './components/NavBar'
import Footer from './components/Footer'
import Landing from './components/Landing'
import About from './components/About'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import PocketBase from 'pocketbase'

const USERNAME = 'admin@test.com'
const PASSWORD = 'password123'

const pb = new PocketBase('http://127.0.0.1:8090')

function App() {
  
  /*Testing PocketBase, seems to work despite recieving an error */
  const temp = async () => {
    const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
    /* Correctly get what I expect to recieve */
    console.log(authData.admin.email)
  }
  temp()

  return (
    <Router>
      <div className="bg-mint-900">
        {/* Navbar */}
        <Nav />

        {/* Everything in routes handles page navigation */}
        <Routes>
          {/* landing page */}
          <Route path='/' exact element={
            <>
              <Landing />
            </>
          } />

          {/* Home page, the way to get to home currently is clicking GYST in the footer */}
          <Route path='/home' element={<Home />} />
          
          {/* About page */}
          <Route path='/about' element={<About />} />

          {/* login page */}
          <Route path='/login' element={<Login />} />

          {/* signup page */}
          <Route path='/signup' element={<Signup />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
