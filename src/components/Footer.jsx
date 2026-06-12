import { Link } from 'react-router-dom'
import { GraduationCap, Phone, Mail, MapPin, Globe, Share2 } from 'lucide-react'

export default function Footer() {
  const PHONE_NUMBER = '27823670490'
  const EMAIL = 'info@malebuentreprise.co.za'
  const INSTAGRAM = 'https://instagram.com/malebuentreprise'
  const FACEBOOK = 'https://www.facebook.com/groups/1242337173812892'

  return (
    <footer className="bg-brand-dark text-white pt-12 pb-6 px-4 border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto">
        {/* Quick Contact Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <a href={`tel:+${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-brand-gold text-brand-dark py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
            <Phone size={18} /> Call Now
          </a>
          <a href={`mailto:${EMAIL}`} className="flex items-center justify-center gap-2 bg-white text-brand-dark py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            <Mail size={18} /> Email Us
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
            <Share2 size={18} /> Instagram
          </a>
          <a href={FACEBOOK} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            <Globe size={18} /> Facebook
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Slogan */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-3">
              <GraduationCap size={24} className="text-brand-gold" />
              <span className="text-xl font-heading font-bold text-brand-gold">MALEBU</span>
            </Link>
            <p className="text-gray-400 text-sm mb-2">Premium graduation regalia for South African students.</p>
            <p className="text-brand-gold italic text-sm">"We Got You Fellow Graduate"</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand-gold font-heading font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-brand-gold font-heading font-semibold mb-3">Products</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Full Set — R900</li>
              <li>Gown — R700</li>
              <li>Belt — R250</li>
              <li>Cap — R200</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-brand-gold font-heading font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-brand-gold" />
                <a href={`tel:+${PHONE_NUMBER}`} className="hover:text-white">+27 82 367 0490</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand-gold" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-gold" />
                <span>Thohoyandou, Limpopo</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Malebu Enterprise. All rights reserved.</p>
          <a href="#" className="text-gray-400 hover:text-brand-gold transition"><Globe size={18} /></a>
        </div>
      </div>
    </footer>
  )
}