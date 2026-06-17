import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'

const universities = [
  {
    id: 'univen',
    name: 'University of Venda',
    shortName: 'UNIVEN',
    price: 'R900',
    logo: '/logos/univen.png',
    description: 'Full Set: Gown, Cap with Tassel, and Belt'
  },
  {
    id: 'ump',
    name: 'University of Mpumalanga',
    shortName: 'UMP',
    price: 'R950',
    logo: '/logos/ump.png',
    description: 'Full Set: Gown, Cap with Tassel, and Belt'
  },
  {
    id: 'ufs',
    name: 'University of the Free State',
    shortName: 'UFS',
    price: 'R950',
    logo: '/logos/ufs.png',
    description: 'Full Set: Gown, Cap with Tassel, and Belt'
  },
  {
    id: 'nwu',
    name: 'North-West University',
    shortName: 'NWU',
    price: 'R950',
    logo: '/logos/nwu.png',
    description: 'Full Set: Gown, Cap with Tassel, and Belt'
  },
  {
    id: 'tut',
    name: 'Tshwane University of Technology',
    shortName: 'TUT',
    price: 'R1000',
    logo: '/logos/tut.png',
    description: 'Full Set: Gown, Cap with Tassel, and Belt'
  },
  {
    id: 'dut',
    name: 'Durban University of Technology',
    shortName: 'DUT',
    price: 'R1000',
    logo: '/logos/dut.png',
    description: 'Full Set: Gown, Cap with Tassel, and Belt'
  },
  {
    id: 'unisa',
    name: 'University of South Africa',
    shortName: 'UNISA',
    price: 'R1000',
    logo: '/logos/unisa.png',
    description: 'Full Set: Gown, Cap with Tassel, and Belt'
  },
  {
    id: 'uj',
    name: 'University of Johannesburg',
    shortName: 'UJ',
    price: 'R1000',
    logo: '/logos/uj.png',
    description: 'Full Set: Gown, Cap with Tassel'
  },
  {
    id: 'other',
    name: 'Other Universities & Colleges',
    shortName: 'OTHER',
    price: 'R1000',
    logo: '/logos/other.png',
    description: 'Full Set: Gown, Cap with Tassel, and Belt'
  }
]

export default function Universities() {
  return (
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto min-h-screen bg-brand-light">
      <Helmet>
        <title>Universities | Malebu Enterprise - Graduation Regalia</title>
        <meta name="description" content="Choose your university to view specific graduation regalia prices and requirements." />
      </Helmet>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading text-brand-dark mb-4">Select Your University</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose your institution below to view specific regalia prices, requirements, and place your order.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {universities.map((uni) => (
          <Link
            key={uni.id}
            to={`/universities/${uni.id}`}
            className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-brand-gold/30"
          >
            <div className="p-6">
              {/* Logo */}
              <div className="mb-4 flex justify-center">
                <div className="w-32 h-32 flex items-center justify-center p-4 bg-gray-50 rounded-lg group-hover:bg-brand-gold/10 transition">
                  <img
                    src={uni.logo}
                    alt={`${uni.name} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = '<GraduationCap size={64} class="text-brand-gold" />'
                    }}
                  />
                </div>
              </div>

              {/* University Info */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-heading font-bold text-brand-dark group-hover:text-brand-gold transition">
                  {uni.shortName}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{uni.name}</p>
              </div>
              
              {/* Price */}
              <div className="mb-4 text-center">
                <p className="text-3xl font-bold text-brand-dark">{uni.price}</p>
                <p className="text-sm text-gray-600 mt-1">{uni.description}</p>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-center gap-2 pt-4 border-t border-gray-100">
                <span className="text-brand-gold font-semibold group-hover:translate-x-1 transition-transform">
                  View Details →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}