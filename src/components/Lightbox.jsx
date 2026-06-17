import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowRight') onNext()
    if (e.key === 'ArrowLeft') onPrev()
  }

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      autoFocus
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-brand-gold transition z-50">
        <X size={32} />
      </button>

      {images.length > 1 && (
        <button onClick={onPrev} className="absolute left-4 text-white hover:text-brand-gold transition z-50 bg-black/50 p-2 rounded-full">
          <ChevronLeft size={32} />
        </button>
      )}

      <img 
        src={images[currentIndex]} 
        alt="Gallery preview" 
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
      />

      {images.length > 1 && (
        <button onClick={onNext} className="absolute right-4 text-white hover:text-brand-gold transition z-50 bg-black/50 p-2 rounded-full">
          <ChevronRight size={32} />
        </button>
      )}
    </div>
  )
}
