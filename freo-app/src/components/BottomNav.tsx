import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/flavors', label: 'Flavours' },
  { to: '/stores', label: 'Stores' },
  { to: '/member', label: 'FREO Fam' },
]

// Mobile-first tab bar fixed at the bottom of the screen.
function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Main">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === '/'}
          className={({ isActive }) =>
            isActive ? 'bottom-nav-link is-active' : 'bottom-nav-link'
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default BottomNav
