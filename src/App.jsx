import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import SignUp from './components/pages/SignUp'
import Account from './components/pages/Account'
import { AuthContextProvider } from "./context/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute"


function App() {

  return (
    <>
      <AuthContextProvider >
        {/* Navbar to show on every page */}
        <Navbar />

        {/* Routes for our different pages */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route
            path='/account'
            element={
              // Redirect to protected route '/' if user is not logged in
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            } />
        </Routes>
      </AuthContextProvider>


    </>
  )
}

export default App
