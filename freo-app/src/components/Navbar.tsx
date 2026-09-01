import { Link } from 'react-router-dom'
import wordmark from '../assets/images/freo-word-v2.svg'

// Top bar with the FREO wordmark from the website.
function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={wordmark} alt="FREO" className="navbar-logo" />
      </Link>
    </header>
  )
}

export default Navbar
