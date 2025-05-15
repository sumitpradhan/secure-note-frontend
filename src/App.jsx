import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './components/page/LandingPage'
import AboutPage from './components/page/AboutPage'
import ContactPage from './components/page/ContactPage'
import Footer from './components/Footer/Footer'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import AllNotes from './components/Notes/AllNotes'
import NoteDetails from './components/Notes/NoteDetails'
import CreateNote from './components/Notes/CreateNote'
import AccessDenied from './components/auth/AccessDenied'
import Admin from './components/AuditLogs/Admin'
import OAuth2RedirectHandler from './components/auth/OAuth2RedirectHandler'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route
            path="/notes"
            element={
              <ProtectedRoute>
                <AllNotes />
              </ProtectedRoute>
            }
          />

<Route
          path="/notes/:id"
          element={
            <ProtectedRoute>
              < NoteDetails/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <AllNotes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-note"
          element={
            <ProtectedRoute>
              <CreateNote />
            </ProtectedRoute>
          }
        />

       <Route path="/access-denied" element={<AccessDenied />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute adminPage={true}>
              <Admin />
            </ProtectedRoute>
          }
        />
         <Route path="/oauth2/redirect" 
        element={<OAuth2RedirectHandler />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
