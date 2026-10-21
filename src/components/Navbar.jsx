import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Icon from './Icon.jsx'
import Button from './Button.jsx'

const links = [
  { to: '/', label: 'Home' }, { to: '/about', label: 'About' }, { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' }, { to: '/how-it-works', label: 'How It Works' },
  { to: '/portfolio', label: 'Portfolio' }, { to: '/insights', label: 'Insights' }, { to: '/faq', label: 'FAQ' }, { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => { 
    const onScroll = () => setScrolled(window.scrollY > 12); 
    onScroll(); 
    window.addEventListener('scroll', onScroll); 
    return () => window.removeEventListener('scroll', onScroll) 
  }, [])

  // Check if admin is logged in whenever route changes
  useEffect(() => {
    setOpen(false)
    const token = localStorage.getItem('adminToken')
    setIsAdminLoggedIn(!!token)
  }, [location.pathname])

  const handleAdminClick = (e) => {
    e.preventDefault()
    if (isAdminLoggedIn) {
      navigate('/crm')
    } else {
      navigate('/admin-login')
    }
  }

  return <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="container navbar-inner">
      <NavLink to="/" className="brand"><span className="brand-mark">CEP</span><span className="brand-name">Construction Estimation Partner LLC</span></NavLink>
      
      <nav className="nav-links" aria-label="Primary">
        {links.map((link) => <NavLink key={link.to} to={link.to} end={link.to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{link.label}</NavLink>)}
      </nav>

      <div className="navbar-cta">
        <button onClick={handleAdminClick} className="admin-quick-btn" title="Admin Portal">
          <Icon name="lock" size={16} /> {isAdminLoggedIn ? 'CRM Dashboard' : 'Admin Login'}
        </button>
        <Button to="/quote" variant="primary">Get a Free Quote</Button>
      </div>

      <button className="nav-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)}><Icon name={open ? 'close' : 'menu'} size={24} /></button>
    </div>

    {open && <div className="nav-mobile">
      {links.map((link) => <NavLink key={link.to} to={link.to} end={link.to === '/'} className={({ isActive }) => `nav-mobile-link ${isActive ? 'active' : ''}`}>{link.label}</NavLink>)}
      <button onClick={handleAdminClick} className="nav-mobile-link admin-mobile-btn">
        {isAdminLoggedIn ? '🔒 CRM Dashboard' : '🔒 Admin Login'}
      </button>
      <Button to="/quote" variant="primary" block>Get a Free Quote</Button>
    </div>}

    <style>{`
      .navbar{position:fixed;top:0;left:0;right:0;z-index:100;background:transparent;border-bottom:1px solid transparent;transition:.25s}.navbar.is-scrolled{background:rgba(14,27,43,.96);border-color:var(--line-dark);box-shadow:0 4px 20px rgba(0,0,0,.15)}.navbar-inner{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:16px var(--gutter)}.brand{display:flex;align-items:center;gap:12px;flex-shrink:0}.brand-mark{font:800 1.15rem var(--font-display);color:var(--ink);background:var(--white);border:2px solid var(--safety);padding:6px 9px;line-height:1}.brand-name{font:600 .87rem var(--font-display);color:var(--white);max-width:185px;line-height:1.2}.nav-links{display:flex;align-items:center;gap:18px;flex:1;justify-content:center}.nav-link{font-size:.82rem;font-weight:600;color:var(--white-70);padding:6px 1px;border-bottom:2px solid transparent;white-space:nowrap}.nav-link:hover,.nav-link.active{color:var(--white);border-color:var(--safety)}.navbar-cta{display:flex;align-items:center;gap:12px}.admin-quick-btn{background:transparent;border:1px solid var(--line-dark);color:var(--white-70);padding:8px 12px;border-radius:4px;font-size:.8rem;font-weight:600;display:flex;align-items:center;gap:6px;cursor:pointer;transition:.2s}.admin-quick-btn:hover{border-color:var(--safety);color:var(--white)}.nav-toggle{display:none;background:transparent;border:none;color:var(--white);padding:4px}.nav-mobile{display:none}@media(max-width:1120px){.nav-links,.navbar-cta{display:none}.nav-toggle{display:block}.navbar{background:rgba(14,27,43,.97);border-bottom:1px solid var(--line-dark)}.nav-mobile{display:flex;flex-direction:column;gap:4px;padding:12px var(--gutter) 24px;background:var(--ink);border-top:1px solid var(--line-dark)}.nav-mobile-link{padding:12px 4px;color:var(--white-70);font-weight:600;border-bottom:1px solid var(--line-dark);background:transparent;border-top:none;border-left:none;border-right:none;text-align:left;width:100%;cursor:pointer}.nav-mobile-link.active{color:var(--safety)}.admin-mobile-btn{color:var(--safety)!important}.nav-mobile .btn{margin-top:12px}}@media(max-width:440px){.brand-name{font-size:.76rem;max-width:145px}}
    `}</style>
    
  </header>
}