import { Route, Routes, useLocation } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import Navbar from './components/Navbar'
import FlavorsPage from './pages/FlavorsPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import MemberPage from './pages/MemberPage'
import StoresPage from './pages/StoresPage'

// App shell: top bar, page routes, and bottom navigation.
function App() {
  const location = useLocation()
  const showBottomNav = location.pathname !== '/login'

  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flavors" element={<FlavorsPage />} />
          <Route path="/stores" element={<StoresPage />} />
          <Route path="/member" element={<MemberPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      {showBottomNav ? <BottomNav /> : null}
    </div>
  )
}

export default App
