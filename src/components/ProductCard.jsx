import { MessageCircle } from 'lucide-react';

export default function ProductCard({ product, onOrder }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group">
      {/* Image Container */}
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.alt}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback if image not found
            e.target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=500&fit=crop';
          }}
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="font-heading text-xl font-semibold text-brand-dark">{product.name}</h3>
        <p className="text-brand-gold font-bold text-2xl mt-2">R{product.price}</p>
        <p className="text-gray-600 text-sm mt-3 line-clamp-3">{product.description}</p>
        
        <button 
          disabled={!product.inStock}
          onClick={() => onOrder(product)}
          className="w-full mt-5 bg-brand-dark text-white py-3 rounded-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed font-medium">
          <MessageCircle size={18} /> 
          Order on WhatsApp
        </button>
      </div>
    </div>
  );
}