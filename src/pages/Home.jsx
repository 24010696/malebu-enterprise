import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, ShieldCheck, Truck, MessageSquare } from 'lucide-react'

export default function Home() {
  const waLink = 'https://wa.me/27823670490?text=Hello%20Malebu%20Enterprise%2C%20I%20want%20to%20order%20graduation%20regalia.'
  return (
    <main className="pt-16">
      <Helmet>
        <title>Malebu Enterprise | Premium Graduation Regalia in Thohoyandou</title>
        <meta name="description" content="Quality graduation gowns, caps, belts & full sets in Thohoyandou, Limpopo. Affordable prices from R200. WhatsApp orders & local pickup available." />
      </Helmet>
      <section className="relative bg-brand-dark text-white py-28 md:py-36 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-brand-gold/30 via-transparent to-brand-gold/10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <img src="/logo/malebu-logo.png" alt="Malebu Enterprise" className="w-24 h-24 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-gold mb-4 tracking-wide">Malebu Enterprise</h1>
          <p className="text-xl md:text-2xl text-white mb-8 italic font-light">"Wear Your Achievement with Malebu"</p>
          <p className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">Premium graduation regalia for South African students. Quality gowns, caps, and accessories at affordable prices. Serving Thohoyandou and surrounding areas.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/products" className="w-full sm:w-auto bg-brand-gold text-brand-dark px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all flex items-center justify-center gap-2 text-lg shadow-lg">View Products <ArrowRight size={20} /></Link>
            <a href={waLink} target="_blank" rel="noopener" className="w-full sm:w-auto border-2 border-brand-gold text-brand-gold px-8 py-4 rounded-lg hover:bg-brand-gold hover:text-brand-dark transition-all flex items-center justify-center gap-2 text-lg font-semibold shadow-lg"><MessageSquare size={20} /> Order on WhatsApp</a>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-heading text-center text-brand-dark mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <ShieldCheck size={32} className="text-brand-gold"/>, title: "Quality Guaranteed", text: "Premium fabrics, reinforced stitching, and university-compliant colors." },
            { icon: <Truck size={32} className="text-brand-gold"/>, title: "Fast Local Service", text: "Based in Thohoyandou with quick pickup options and delivery everywhere through Pexi." },
            { icon: <MessageSquare size={32} className="text-brand-gold"/>, title: "Easy WhatsApp Orders", text: "No complicated checkout. Just message us, we'll handle the rest." }
          ].map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-heading text-lg font-semibold text-brand-dark mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}