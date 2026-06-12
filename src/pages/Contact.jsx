import { Helmet } from 'react-helmet-async'
import { MapPin, Clock, Phone, Mail, MessageCircle } from 'lucide-react'

export default function Contact() {
  const PHONE_NUMBER = '27823670490'
  const EMAIL = 'info@malebuentreprise.co.za'
  const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER}?text=Hello%20Malebu%20Enterprise%2C%20I%20would%20like%20to%20place%20an%20order.`

  return (
    <div className="pt-24 pb-16 px-4 max-w-4xl mx-auto min-h-screen bg-brand-light">
      <Helmet>
        <title>Contact Us | Malebu Enterprise</title>
        <meta name="description" content="Contact Malebu Enterprise for graduation regalia orders, bulk quotes, and pickup info." />
      </Helmet>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading text-brand-dark mb-4">Get In Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">We're here to help you look your best on graduation day. Reach out via WhatsApp, phone, or email.</p>
      </div>

      {/* Clean Info Section - No Top Buttons */}
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
        <div className="grid md:grid-cols-2 gap-10 text-gray-600">
          
          {/* Left Column */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin size={24} className="text-brand-gold mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-brand-dark text-lg">Location</h3>
                <p>Thohoyandou, Limpopo</p>
                <p className="text-sm text-gray-500">Pickup available by appointment</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock size={24} className="text-brand-gold mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-brand-dark text-lg">Operating Hours</h3>
                <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Phone size={24} className="text-brand-gold mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-brand-dark text-lg">Phone Support</h3>
                <p className="text-brand-gold font-bold text-xl">+27 82 367 0490</p>
                <p className="text-sm text-gray-500">Call or WhatsApp</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail size={24} className="text-brand-gold mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-brand-dark text-lg">Email Support</h3>
                <p className="text-brand-gold font-semibold">{EMAIL}</p>
                <p className="text-sm text-gray-500">We reply within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Single Clear CTA at Bottom */}
        <div className="mt-10 pt-8 border-t border-gray-100 text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-md">
            <MessageCircle size={20} /> Order via WhatsApp
          </a>
          <p className="text-xs text-gray-400 mt-3"></p>
        </div>
      </div>
    </div>
  )
}