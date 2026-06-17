import { Link } from 'react-router-dom'
import { GraduationCap, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const PHONE_NUMBER = '27823670490'
  const EMAIL = 'info@malebuentreprise.co.za'
  const INSTAGRAM = 'https://instagram.com/malebuentreprise'
  const FACEBOOK = 'https://facebook.com/malebuentreprise'

  return (
    <footer className="bg-brand-dark text-white pt-12 pb-6 px-4 border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div>
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
             
              <li><Link to="/universities" className="hover:text-white transition">Universities</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-brand-gold font-heading font-semibold mb-3">Products</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Full Set — R900-R1000</li>
              <li>Gown — R550</li>
              <li>Cap — R250</li>
              <li>Belt — R200-R400</li>
            </ul>
          </div>

          {/* Contact - With Social Links */}
          <div>
            <h3 className="text-brand-gold font-heading font-semibold mb-3">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                  <Phone size={16} className="text-brand-gold" />
                  <span>+27 82 367 0490</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                  <Mail size={16} className="text-brand-gold" />
                  <span>info@malebuentreprise.co.za</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="text-brand-gold mt-0.5 shrink-0" />
                <span>Thohoyandou, Limpopo</span>
              </li>
            </ul>

            {/* Social Media - Using Inline SVGs for 100% reliability */}
            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-sm text-gray-400 mb-3">Follow Us</p>
              <div className="space-y-3">
                <a 
                  href={INSTAGRAM} 
                  target="_blank" 
                  rel="noopener" 
                  className="flex items-center gap-2 text-gray-400 hover:text-pink-500 transition"
                >
                  {/* Real Instagram Icon SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span>Instagram</span>
                </a>
                
                <a 
                  href={FACEBOOK} 
                  target="_blank" 
                  rel="noopener" 
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition"
                >
                  {/* Real Facebook Icon SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Malebu Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}