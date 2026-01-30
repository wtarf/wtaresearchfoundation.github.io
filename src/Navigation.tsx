import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { text: 'Research Areas', href: '#', className: 'font-semibold', name: 'research' },
  { text: 'Our Team', href: '#', name: 'team' },
  { text: 'Contact', href: '#', name: 'contact' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('home');

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <button 
                  onClick={() => setActiveTab(link.name)} 
                  className={`px-4 py-2 rounded-lg transition ${activeTab === link.name ? 'bg-white text-[#412507] font-medium' : 'hover:bg-[linear-gradient(90deg,#F5CDA2_0%,#E78318_55%,#945410_100%)]'}`}
                >
                  {link.text}
                </button>
            ))}
          </div>          
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:text-indigo-600 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}