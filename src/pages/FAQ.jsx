import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react'
const faqs = [
  { q: "How long does delivery take?", a: "Local pickup in Thohoyandou is ready in 1-2 days. Delivery for other places takes 2-4 business days through Pexi." },
  { q: "Do you offer pickup?", a: "Yes! Convenient pickup in Thohoyandou. We'll share location and time slots after confirmation." },
  { q: "Are gowns university compliant?", a: "Absolutely. Meets standard South African university requirements. Let us know specific colors." },
  { q: "Payment methods?", a: "Bank transfer (EFT), cash on pickup, or mobile payments. Proof of payment required." },
  { q: "Bulk discounts?", a: "Yes! 5-10% off for group orders. Contact us for a custom quote." }
]
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <div className="pt-24 pb-16 px-4 max-w-4xl mx-auto min-h-screen bg-brand-light">
      <Helmet>
        <title>FAQ | Malebu Enterprise - Graduation Regalia Questions</title>
        <meta name="description" content="Frequently asked questions about orders, delivery, sizing, and payment." />
      </Helmet>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading text-brand-dark mb-4">Frequently Asked Questions</h1>
      </div>
      <div className="space-y-4 mb-12">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm">
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition">
              <span className="font-semibold text-brand-dark pr-4">{faq.q}</span>
              {openIndex === i ? <ChevronUp size={20} className="text-brand-gold shrink-0" /> : <ChevronDown size={20} className="text-gray-400 shrink-0" />}
            </button>
            {openIndex === i && <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>}
          </div>
        ))}
      </div>
      <div className="bg-brand-dark text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-heading mb-3">Still have questions?</h3>
        <a href="https://wa.me/27823670490?text=Hi%2C%20I%20have%20a%20question%20about%20your%20graduation%20regalia." target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition mt-4">
          <MessageCircle size={18} /> Chat on WhatsApp
        </a>
      </div>
    </div>
  )
}