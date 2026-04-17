import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Our Work', to: '/work' },
  { label: "The Drag Queen's Guide", to: '/drag-queens-guide' },
  { label: 'Studio Notes', to: '/studio-notes' },
  { label: 'Hire Us', to: '/hire-us' },
  { label: 'The Wiki', to: '/wiki' },
  { label: 'Support Us', to: '/support' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>Haus Xataros</span>
      <nav className={styles.nav}>
        {navLinks.map(({ label, to }) => (
          <NavLink
            className={({ isActive }) => [styles.link, isActive ? styles.active : ''].filter(Boolean).join(' ')}
            key={to}
            to={to}
            end={to === '/'}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
