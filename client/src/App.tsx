import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import Profile from './pages/Profile'
import Navigation from './components/navigation'
import ProtectedRoutes from './components/ProtectedRoutes'
import { useAuthStore } from './store/auth'

const App = () => {
  const isAuth = useAuthStore(state => state.isAuth)
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<RegisterPage />} />

        <Route path='/profile' element={
          <ProtectedRoutes isAllowed={isAuth}>
            <Profile />
          </ProtectedRoutes>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App