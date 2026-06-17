import { Link } from 'react-router-dom'
import { GraduationCap, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Notice the commas at the end of every line!
  const links = [
    { name: 'Home', href: '/' },
    
    { name: 'Universities', href: '/universities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <GraduationCap size={32} className="text-brand-gold" />
          <span className="text-xl font-heading font-bold text-brand-dark">MALEBU</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-gray-600 hover:text-brand-gold font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block text-gray-600 hover:text-brand-gold font-medium transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}