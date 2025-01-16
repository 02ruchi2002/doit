import Navbar from './components/navbar'
import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router'
import Login from './pages/login'
import Signup from './pages/signup'


function App() {
  // Simulated authentication function
  const isAuthenticated = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    if (!users) return false;

    const currenUser = JSON.parse(localStorage.getItem('currentUser'))
    if (!currenUser) return false
    // Check if current time is less than expiry time
    const currentTime = new Date().getTime();
    return currentTime < parseInt(currenUser?.expiryTime, 10)
  };

  // ProtectedRoute component
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Navbar />
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
