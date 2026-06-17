import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Lightbox from "../components/LightBox";

// Add all your gallery image paths here
const galleryImages = [
  '/images/gallery/1.jpg',
  '/images/gallery/2.jpg',
  '/images/gallery/3.jpg',
  '/images/gallery/4.jpg',
  '/images/gallery/5.jpg',
  '/images/gallery/6.jpg',
  '/images/gallery/7.jpg',
  '/images/gallery/8.jpg',
]

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)

  return (
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto min-h-screen bg-brand-light">
      <Helmet>
        <title>Gallery | Malebu Enterprise</title>
      </Helmet>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading text-brand-dark mb-4">Our Work</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See the quality and style of our graduation regalia. Click any photo to zoom in!
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((src, index) => (
          <div 
            key={index} 
            className="aspect-square bg-gray-100 rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all"
            onClick={() => openLightbox(index)}
          >
            <img 
              src={src} 
              alt={`Gallery ${index + 1}`} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox 
          images={galleryImages} 
          currentIndex={currentIndex} 
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  )
}
