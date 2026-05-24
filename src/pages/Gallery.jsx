import { Helmet } from 'react-helmet-async'
export default function Gallery() {
  const images = Array.from({ length: 11 }, (_, i) => `/images/gallery/${i + 1}.jpg`)
  return (
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto min-h-screen bg-brand-light">
      <Helmet>
        <title>Gallery | Malebu Enterprise - Graduation Photos</title>
        <meta name="description" content="See our graduation regalia in action. Real photos from graduates." />
      </Helmet>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading text-brand-dark mb-4">Gallery</h1>
        <p className="text-gray-600">Photos coming soon. Check back to see our happy graduates!</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center text-gray-400">
            <img src={src} alt={`Gallery ${i+1}`} loading="lazy" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.textContent = `Photo ${i+1}` }} />
          </div>
        ))}
      </div>
    </div>
  )
}