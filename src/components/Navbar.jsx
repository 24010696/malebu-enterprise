import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { to: '/', label: 'Home' }, { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' }, { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' }, { to: '/faq', label: 'FAQ' }
  ]
  const waLink = 'https://wa.me/27823670490?text=Hello%20Malebu%20Enterprise%2C%20I%20need%20help%20with%20graduation%20regalia.'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-brand-gold/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition">
          <img src="/logo/malebu-logo.png" alt="Malebu Enterprise" className="h-10 md:h-12 w-auto" />
          <div className="hidden sm:block">
            <span className="block text-lg font-heading font-bold text-brand-gold tracking-wider leading-none">MALEBU</span>
            <span className="block text-xs text-gray-400 tracking-widest uppercase">Enterprise</span>
          </div>
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300 items-center">
          {links.map(l => <Link key={l.to} to={l.to} className="hover:text-brand-gold transition">{l.label}</Link>)}
          <a href={waLink} target="_blank" rel="noopener" className="bg-brand-gold text-brand-dark px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">Order Now</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-brand-gold p-2">{open ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {open && (
        <div className="md:hidden bg-brand-dark border-t border-gray-800">
          {links.map(l => <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block px-6 py-4 text-gray-300 hover:text-brand-gold border-b border-gray-800/50">{l.label}</Link>)}
          <a href={waLink} target="_blank" rel="noopener" className="block px-6 py-4 bg-brand-gold text-brand-dark font-semibold text-center">Order on WhatsApp</a>
        </div>
      )}
    </nav>
  )
}