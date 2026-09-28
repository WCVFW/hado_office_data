import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { services } from '../data/content'
import MagneticButton from './MagneticButton'

const navLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/for-banks-nbfcs', label: 'For Banks & NBFCs' },
  { to: '/who-we-serve', label: 'Who We Serve' },
  { to: '/why-veritaz', label: 'Why Veritaz' },
  { to: '/faq', label: 'FAQs' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 12)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-950/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="group flex items-center gap-2.5 shrink-0" data-cursor-hover>
            <motion.span
              whileHover={{ rotate: -8, scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="grid place-items-center h-9 w-9 rounded-md bg-gradient-to-br from-gold-400 to-gold-500 text-navy-950 font-heading font-extrabold text-sm"
            >
              V
            </motion.span>
            <span className="font-heading font-bold text-lg text-white tracking-tight">
              Veritaz <span className="text-gold-400 font-medium">Consultancy</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-gold-300 transition-colors flex items-center gap-1" data-cursor-hover>
                Services
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[420px]"
                  >
                    <div className="rounded-xl border border-navy-600/60 bg-navy-900 shadow-2xl shadow-black/40 p-2 grid grid-cols-1">
                      {services.map((s, i) => (
                        <motion.div
                          key={s.slug}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.18, delay: i * 0.025 }}
                        >
                          <Link
                            to={`/services/${s.slug}`}
                            className="block rounded-lg px-3.5 py-2.5 text-sm text-slate-200 hover:bg-navy-800 hover:text-gold-300 transition-colors"
                          >
                            {s.navTitle}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((l) => {
              const isActive = location.pathname === l.to
              return (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-gold-300' : 'text-slate-200 hover:text-gold-300'
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-gold-500 to-gold-300"
                    />
                  )}
                </NavLink>
              )
            })}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton strength={0.25}>
              <Link
                to="/contact"
                data-cursor-hover
                className="btn-shimmer inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-gold-500 to-gold-400 px-5 py-2.5 text-sm font-semibold text-navy-950 hover:brightness-110 transition-all shadow-md shadow-gold-500/20"
              >
                Contact Us
              </Link>
            </MagneticButton>
          </div>

          <button
            className="lg:hidden relative text-white p-2 h-9 w-9 grid place-items-center"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 5 : 0 }}
              className="absolute h-[1.5px] w-5 bg-white rounded-full"
              style={{ top: '38%' }}
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              className="absolute h-[1.5px] w-5 bg-white rounded-full"
              style={{ top: '50%', marginTop: '-0.75px' }}
            />
            <motion.span
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -5 : 0 }}
              className="absolute h-[1.5px] w-5 bg-white rounded-full"
              style={{ bottom: '38%' }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-navy-950/98 backdrop-blur-md border-t border-navy-700/60 overflow-hidden"
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.035 } } }}
              className="px-5 py-4 flex flex-col gap-1 max-h-[75vh] overflow-y-auto"
            >
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-2 mb-1 px-1">Services</p>
              {services.map((s) => (
                <motion.div key={s.slug} variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}>
                  <Link to={`/services/${s.slug}`} className="block px-2 py-2.5 text-sm text-slate-200 hover:text-gold-300 rounded-md">
                    {s.navTitle}
                  </Link>
                </motion.div>
              ))}
              <div className="h-px bg-navy-700/60 my-2" />
              {navLinks.map((l) => (
                <motion.div key={l.to} variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}>
                  <NavLink to={l.to} className="block px-2 py-2.5 text-sm text-slate-200 hover:text-gold-300 rounded-md">
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}>
                <Link
                  to="/contact"
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-gold-500 to-gold-400 px-5 py-3 text-sm font-semibold text-navy-950 w-full"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
