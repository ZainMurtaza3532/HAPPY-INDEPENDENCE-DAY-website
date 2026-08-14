import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, Flag } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      const sections = ['home', 'national-pride', 'history', 'quaid', 'pakistan', 'landmarks', 'gallery', 'celebrate']
      const scrollPos = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Spirit', href: '#national-pride', id: 'national-pride' },
    { name: 'History', href: '#history', id: 'history' },
    { name: 'Quaid-e-Azam', href: '#quaid', id: 'quaid' },
    { name: 'Pakistan', href: '#pakistan', id: 'pakistan' },
    { name: 'Landmarks', href: '#landmarks', id: 'landmarks' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Celebrate', href: '#celebrate', id: 'celebrate' }
  ]




  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#020B06]/85 backdrop-blur-xl border-b border-emerald-500/20 py-3 shadow-2xl shadow-emerald-950/40'
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-[#01411C] flex items-center justify-center p-0.5 shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#020B06] rounded-full flex items-center justify-center">
              <span className="text-xl leading-none">🇵🇰</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-wider font-cinzel text-white flex items-center gap-1.5">
              PAKISTAN
             
            </span>
            <span className="text-[10px] tracking-widest text-emerald-400 font-medium uppercase -mt-1">
              Independence Day
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full shadow-md shadow-emerald-500/30 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            )
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#celebrate"
            onClick={(e) => handleNavClick(e, '#celebrate')}
            className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-200 animate-pulse" />
              Celebrate Now
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-emerald-500/20 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} className="text-emerald-400" /> : <Menu size={24} className="text-white" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-x-0 top-[70px] p-4 z-50"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="glass-card rounded-2xl p-6 border border-emerald-500/30 bg-[#020B06]/95 backdrop-blur-2xl shadow-2xl shadow-emerald-950/80">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-white/90 hover:text-white hover:bg-emerald-500/20 transition-colors border border-transparent hover:border-emerald-500/30"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-emerald-400 font-mono">0{index + 1}</span>
                  </motion.a>
                ))}
                <div className="pt-4 mt-2 border-t border-white/10">
                  <a
                    href="#celebrate"
                    onClick={(e) => handleNavClick(e, '#celebrate')}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30"
                  >
                    <Flag className="w-5 h-5 text-white" />
                    PAKISTAN ZINDABAD 🇵🇰
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export { Navbar }
export default Navbar