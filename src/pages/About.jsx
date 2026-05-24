import { Helmet } from 'react-helmet-async'
import { GraduationCap, Users, ShieldCheck, Truck, MessageCircle } from 'lucide-react'

export default function About() {
  return (
    <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto min-h-screen bg-brand-light">
      <Helmet>
        <title>About Us | Malebu Enterprise - Graduation Regalia Thohoyandou</title>
        <meta name="description" content="Learn about Malebu Enterprise, founded by Funanani Mabila & Nelwamondo Ndibue. Thohoyandou's trusted graduation regalia supplier." />
      </Helmet>

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-heading text-brand-dark mb-4">About Malebu Enterprise</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg italic">"We Got You Fellow Graduate"</p>
      </div>

      {/* Business Photo + Story */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md border border-gray-200">
          <img 
            src="/images/about-business.webp" 
            alt="Malebu Enterprise graduation regalia display" 
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-2xl font-heading text-brand-dark mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Malebu Enterprise was born from a simple observation: graduation day shouldn't come with stress or hidden costs. Based in Thohoyandou, we noticed students struggling to find quality, affordable regalia that meets university standards.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, we supply premium graduation gowns, caps, belts, and complete sets across Limpopo. Every piece is carefully sourced to ensure durability, proper fit, and that signature graduation-day pride.
          </p>
        </div>
      </div>

      {/* Founders Section */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Users size={28} className="text-brand-gold" />
          <h2 className="text-2xl font-heading text-brand-dark">Meet the Founders</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Funanani Mabila */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="w-20 h-20 rounded-full bg-brand-dark flex items-center justify-center text-brand-gold text-2xl font-bold flex-shrink-0">
              FM
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-brand-dark">Funanani Mabila</h3>
              <p className="text-brand-gold text-sm font-medium mb-2">Co-Founder & Director</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Passionate about student success and local entrepreneurship. Funanani drives our vision for accessible, high-quality regalia and ensures every customer feels supported from order to graduation day.
              </p>
            </div>
          </div>

          {/* Nelwamondo Ndibue */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="w-20 h-20 rounded-full bg-brand-dark flex items-center justify-center text-brand-gold text-2xl font-bold flex-shrink-0">
              NN
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-brand-dark">Nelwamondo Ndibue</h3>
              <p className="text-brand-gold text-sm font-medium mb-2">Co-Founder & Director</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Focused on quality control, logistics, and customer experience. Nelwamondo ensures our products meet strict university standards and that deliveries run smoothly across Thohoyandou and Limpopo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: <ShieldCheck size={32} className="text-brand-gold"/>, title: "University Compliant", text: "Regalia that meets official South African university standards for colors, fabric, and styling." },
          { icon: <Truck size={32} className="text-brand-gold"/>, title: "Local & Trusted", text: "Proudly based in Thohoyandou. We offer convenient pickup and reliable delivery across Limpopo." },
          { icon: <MessageCircle size={32} className="text-brand-gold"/>, title: "Personal Support", text: "Direct WhatsApp communication with the founders. No bots, no runaround, just real help." }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="mb-3">{item.icon}</div>
            <h3 className="font-heading text-lg font-semibold text-brand-dark mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.text}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-brand-dark text-white rounded-xl p-8 md:p-10 text-center">
        <GraduationCap size={40} className="mx-auto mb-4 text-brand-gold" />
        <h2 className="text-2xl md:text-3xl font-heading mb-4">Ready for Your Big Day?</h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Don't stress about regalia. Message us directly on WhatsApp and we'll get you sorted.
        </p>
        <a href="https://wa.me/27823670490?text=Hello%20Malebu%20Enterprise%2C%20I%20have%20a%20question%20about%20your%20regalia." target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
          <MessageCircle size={18} /> Chat with Funanani & Nelwamondo
        </a>
      </div>
    </div>
  )
}