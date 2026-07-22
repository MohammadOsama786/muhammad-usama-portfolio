import { useEffect, useState } from 'react'
import { site } from '../data/site'

const navItems = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'contact']

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.08, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a className="brand" href="#home" onClick={closeMenu} aria-label={`${site.name} home`}>
          <span className="brand__mark">{site.shortName}</span>
          <span className="brand__text">
            <strong>Muhammad</strong>
            <small>Usama</small>
          </span>
        </a>

        <nav className={`nav-menu ${menuOpen ? 'nav-menu--open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={activeSection === item ? 'is-active' : ''}
              onClick={closeMenu}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            className="icon-button"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
          </button>
          <a className="button button--small navbar__cta" href="#contact">Let’s talk</a>
          <button
            className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
