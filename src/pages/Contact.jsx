import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
export default function Contact() {
  const waLink = 'https://wa.me/27823670490?text=Hello%20Malebu%20Enterprise%2C%20I%20would%20like%20to%20place%20an%20order.'
  return (
    <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto min-h-screen bg-brand-light">
      <Helmet>
        <title>Contact Us | Malebu Enterprise</title>
        <meta name="description" content="Contact Malebu Enterprise for graduation regalia orders, bulk quotes, and pickup info." />
      </Helmet>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading text-brand-dark mb-4">Get In Touch</h1>
        <p className="text-gray-600">We respond quickly on WhatsApp.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-heading text-brand-dark mb-6">Contact Info</h2>
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center gap-3"><MessageCircle size={20} className="text-brand-gold" /> <a href={waLink} target="_blank" rel="noopener" className="hover:text-brand-gold">WhatsApp: +27 82 367 0490</a></div>
            <div className="flex items-center gap-3"><Phone size={20} className="text-brand-gold" /> <span>Phone: +27 82 367 0490</span></div>
            <div className="flex items-center gap-3"><Mail size={20} className="text-brand-gold" /> <span>Email: info@malebuentreprise.co.za</span></div>
            <div className="flex items-center gap-3"><MapPin size={20} className="text-brand-gold" /> <span>Thohoyandou, Limpopo</span></div>
            <div className="flex items-center gap-3"><Clock size={20} className="text-brand-gold" /> <span>Mon-Sat: 9AM - 5PM</span></div>
          </div>
        </div>
        <div className="bg-brand-dark text-white p-8 rounded-xl shadow-sm flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-heading text-brand-gold mb-4">Quick Order</h2>
          <p className="text-gray-300 mb-6">Skip the wait. Message us directly with your order details.</p>
          <a href={waLink} target="_blank" rel="noopener" className="w-full bg-brand-gold text-brand-dark py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">Start WhatsApp Chat</a>
        </div>
      </div>
    </div>
  )
}