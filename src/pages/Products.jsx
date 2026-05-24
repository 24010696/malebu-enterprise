import { Helmet } from 'react-helmet-async'
import { MessageCircle } from 'lucide-react'

const products = [
  { id: 'full-set', name: 'Full Graduation Set', price: 900, desc: 'Complete regalia package: gown, cap, belt, and stole.', image: '/images/products/full-set.jpg' },
  { id: 'gown', name: 'Graduation Gown', price: 700, desc: 'High-quality satin-finish gown with reinforced stitching.', image: '/images/products/gown.jpg' },
  { id: 'belt', name: 'Graduation Belt', price: 250, desc: 'Adjustable woven belt with metallic clasp.', image: '/images/products/belt.jpg' },
  { id: 'cap', name: 'Graduation Cap', price: 200, desc: 'Structured mortarboard with elastic strap and gold tassel.', image: '/images/products/cap.jpg' }
]

export default function Products() {
  const phone = '27823670490'
  const orderProduct = (p) => {
    const msg = `Hello Malebu Enterprise,\n\nI want to order:\n• Product: ${p.name}\n• Price: R${p.price}\n\nMy Details:\n• Name: \n• Phone: \n• Pickup/Delivery: \n\nThank you!`
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank')
  }
  return (
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto min-h-screen bg-brand-light">
      <Helmet>
        <title>Graduation Gowns & Regalia | Thohoyandou | Malebu Enterprise</title>
        <meta name="description" content="Shop graduation gowns, caps, belts & full sets in South Africa. R200-R900. Order via WhatsApp." />
      </Helmet>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading text-brand-dark mb-4">Our Regalia</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Quality graduation gear at affordable prices. Perfect for your ceremony.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(p => (
          <div key={p.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition group">
            <div className="h-48 bg-gray-100 overflow-hidden">
              <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop" }} />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-semibold text-brand-dark">{p.name}</h3>
              <p className="text-brand-gold font-bold text-xl mt-1">R{p.price}</p>
              <p className="text-gray-600 text-sm mt-2">{p.desc}</p>
              <button onClick={() => orderProduct(p)} className="w-full mt-4 bg-brand-dark text-white py-2 rounded hover:bg-gray-800 transition flex items-center justify-center gap-2">
                <MessageCircle size={16} /> Order via WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}