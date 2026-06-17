import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MessageCircle, GraduationCap, DollarSign } from 'lucide-react'
import Lightbox from "../components/LightBox";

const PHONE_NUMBER = '27823670490'

const universityData = {
  univen: { name: 'University of Venda', shortName: 'UNIVEN', fullSetPrice: 'R900', gownPrice: 'R550', capPrice: 'R250', beltPrices: { undergrad: 'R200', hons: 'R250', master: 'R300' }, colors: 'Orange & Blue', images: ['/images/universities/univen-1.jpg', '/images/universities/univen-2.jpg'] },
  ump: { name: 'University of Mpumalanga', shortName: 'UMP', fullSetPrice: 'R950', gownPrice: 'R550', capPrice: 'R250', beltPrices: { undergrad: 'R250', hons: 'R300', master: 'R400' }, colors: 'Yellow & Blue', images: ['/images/universities/ump-1.jpg', '/images/universities/ump-2.jpg'] },
  ufs: { name: 'University of the Free State', shortName: 'UFS', fullSetPrice: 'R950', gownPrice: 'R550', capPrice: 'R250', beltPrices: { undergrad: 'R250', hons: 'R300', master: 'R400' }, colors: 'Grey, Red & White', images: ['/images/universities/ufs-1.jpg', '/images/universities/ufs-2.jpg'] },
  nwu: { name: 'North-West University', shortName: 'NWU', fullSetPrice: 'R950', gownPrice: 'R550', capPrice: 'R250', beltPrices: { undergrad: 'R250', hons: 'R300', master: 'R400' }, colors: 'Purple', images: ['/images/universities/nwu-1.jpg', '/images/universities/nwu-2.jpg'] },
  tut: { name: 'Tshwane University of Technology', shortName: 'TUT', fullSetPrice: 'R1000', gownPrice: 'R550', capPrice: 'R250', beltPrices: { undergrad: 'R300', hons: 'R350', master: 'R400' }, colors: 'Blue & Orange', images: ['/images/universities/tut-1.jpg', '/images/universities/tut-2.jpg'] },
  dut: { name: 'Durban University of Technology', shortName: 'DUT', fullSetPrice: 'R1000', gownPrice: 'R550', capPrice: 'R250', beltPrices: { undergrad: 'R300', hons: 'R350', master: 'R400' }, colors: 'Teal & Blue', images: ['/images/universities/dut-1.jpg', '/images/universities/dut-2.jpg'] },
  unisa: { name: 'University of South Africa', shortName: 'UNISA', fullSetPrice: 'R1000', gownPrice: 'R550', capPrice: 'R250', beltPrices: { undergrad: 'R300', hons: 'R350', master: 'R400' }, colors: 'Green & Blue', images: ['/images/universities/unisa-1.jpg', '/images/universities/unisa-2.jpg'] },
  uj: { name: 'University of Johannesburg', shortName: 'UJ', fullSetPrice: 'R1000', gownPrice: 'R550', capPrice: 'R250', beltPrices: { undergrad: 'R300', hons: 'R350', master: 'R400' }, colors: 'Orange & Blue', images: ['/images/universities/uj-1.jpg', '/images/universities/uj-2.jpg'] },
  other: { name: 'Other Universities & Colleges', shortName: 'OTHER', fullSetPrice: 'R1000', gownPrice: 'R550', capPrice: 'R250', beltPrices: { undergrad: 'R300', hons: 'R350', master: 'R400' }, colors: 'Various', images: ['/images/universities/other-1.jpg', '/images/universities/other-2.jpg'] }
}

export default function UniversityDetail() {
  const { id } = useParams()
  const uni = universityData[id]
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index) => { setCurrentIndex(index); setLightboxOpen(true) }
  const closeLightbox = () => setLightboxOpen(false)
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % uni.images.length)
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + uni.images.length) % uni.images.length)

  if (!uni) {
    return (
      <div className="pt-24 pb-16 px-4 text-center">
        <h1 className="text-2xl font-heading text-brand-dark mb-4">University not found</h1>
        <Link to="/universities" className="text-brand-gold hover:underline">← Back to Universities</Link>
      </div>
    )
  }

  const whatsappMessage = `Hello Malebu Enterprise, I am interested in ordering ${uni.shortName} graduation regalia. Please provide more information.`
  const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto min-h-screen bg-brand-light">
      <Helmet>
        <title>{uni.shortName} Regalia | Malebu Enterprise</title>
        <meta name="description" content={`Order ${uni.name} graduation regalia. Full set ${uni.fullSetPrice}. Quality guaranteed.`} />
      </Helmet>

      <Link to="/universities" className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-gold mb-6 transition">
        <ArrowLeft size={20} /> Back to Universities
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-heading text-brand-dark mb-2">{uni.name}</h1>
        <p className="text-gray-600">Colors: {uni.colors}</p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-brand-gold to-yellow-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-2 mb-4"><GraduationCap size={24} /><h3 className="text-xl font-bold">Full Set</h3></div>
          <p className="text-4xl font-bold mb-2">{uni.fullSetPrice}</p>
          <p className="text-sm opacity-90">Gown + Cap + Belt</p>
          <p className="text-sm opacity-90 mt-2">Best Value!</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4"><DollarSign size={24} className="text-brand-gold" /><h3 className="text-xl font-bold text-brand-dark">Individual Items</h3></div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex justify-between"><span>Gown</span><span className="font-semibold">{uni.gownPrice}</span></li>
            <li className="flex justify-between"><span>Cap with Tassel</span><span className="font-semibold">{uni.capPrice}</span></li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-brand-dark mb-4">Belt Prices</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex justify-between"><span>Undergraduate</span><span className="font-semibold">{uni.beltPrices.undergrad}</span></li>
            <li className="flex justify-between"><span>Honours</span><span className="font-semibold">{uni.beltPrices.hons}</span></li>
            <li className="flex justify-between"><span>Masters</span><span className="font-semibold">{uni.beltPrices.master}</span></li>
          </ul>
        </div>
      </div>

      {/* Clickable Gallery */}
      <div className="mb-12">
        <h2 className="text-2xl font-heading text-brand-dark mb-6">Gallery</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {uni.images.map((src, i) => (
            <div key={i} className="aspect-video bg-gray-100 rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all" onClick={() => openLightbox(i)}>
              <img src={src} alt={`${uni.shortName} regalia ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Quick Order Buttons */}
      <div className="mb-12">
        <h2 className="text-2xl font-heading text-brand-dark mb-6 text-center">Quick Order via WhatsApp</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(`Hello Malebu, I want to order the ${uni.shortName} Full Set (${uni.fullSetPrice}).`)}`} target="_blank" rel="noopener" className="bg-brand-gold text-white p-4 rounded-xl text-center font-semibold hover:bg-yellow-600 transition shadow-md">Order Full Set<br/><span className="text-sm font-normal opacity-90">{uni.fullSetPrice}</span></a>
          <a href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(`Hello Malebu, I want to order the ${uni.shortName} Gown Only (${uni.gownPrice}).`)}`} target="_blank" rel="noopener" className="bg-brand-dark text-white p-4 rounded-xl text-center font-semibold hover:bg-gray-800 transition shadow-md">Order Gown Only<br/><span className="text-sm font-normal opacity-90">{uni.gownPrice}</span></a>
          <a href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(`Hello Malebu, I want to order the ${uni.shortName} Cap Only (${uni.capPrice}).`)}`} target="_blank" rel="noopener" className="bg-white border-2 border-brand-gold text-brand-dark p-4 rounded-xl text-center font-semibold hover:bg-brand-gold/10 transition shadow-md">Order Cap Only<br/><span className="text-sm font-normal opacity-90">{uni.capPrice}</span></a>
          <a href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(`Hello Malebu, I want to order the ${uni.shortName} Belt. My level is: [Undergrad/Hons/Masters]`)}`} target="_blank" rel="noopener" className="bg-white border-2 border-gray-300 text-gray-700 p-4 rounded-xl text-center font-semibold hover:border-brand-gold hover:text-brand-gold transition shadow-md">Order Belt Only<br/><span className="text-sm font-normal opacity-90">From {uni.beltPrices.undergrad}</span></a>
        </div>
      </div>

      {/* Main CTA */}
      <div className="text-center">
        <a href={whatsappLink} target="_blank" rel="noopener" className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition shadow-lg">
          <MessageCircle size={24} />
          Chat with us about {uni.shortName} Regalia
        </a>
        <p className="text-sm text-gray-500 mt-3">We respond within 30 minutes during business hours</p>
      </div>

      {lightboxOpen && (
        <Lightbox images={uni.images} currentIndex={currentIndex} onClose={closeLightbox} onNext={nextImage} onPrev={prevImage} />
      )}
    </div>
  )
}
