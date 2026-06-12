import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat({ number }) {
  const url = `https://wa.me/${number}?text=${encodeURIComponent('Hello Malebu Enterprise! I need help with graduation regalia.')}`
  return (
    <a href={url} target="_blank" rel="noopener" aria-label="Chat on WhatsApp"
       className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all">
      <MessageCircle size={28} />
    </a>
  )
}