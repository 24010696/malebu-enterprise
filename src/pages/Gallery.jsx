import { Helmet } from 'react-helmet-async'

export default function Gallery() {
  const images = Array.from({ length: 8 }, (_, i) => `/images/gallery/${i + 1}.jpg`)

  return (
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto min-h-screen bg-brand-light">
      <Helmet>
        <title>Gallery | Malebu Enterprise - Graduation Regalia</title>
        <meta name="description" content="Browse our graduation regalia collection. Real photos of gowns, caps, belts, and complete sets." />
      </Helmet>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading text-brand-dark mb-4">Our Gallery</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">See the quality and craftsmanship of our graduation regalia. Real photos from our collection and happy graduates.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <div key={i} className="aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group">
            <img
              src={src}
              alt={`Graduation regalia showcase ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.onerror = null
                e.target.style.display = 'none'
                e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-50')
                e.target.parentElement.innerHTML = `<div class="text-center text-gray-400"><span class="text-3xl block mb-2"></span><span class="text-sm">Photo ${i + 1}</span></div>`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}