import { useState } from 'react';
import { Menu, X } from 'lucide-react'

export function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [open, setOpen] = useState(false);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [donationAmount, setDonationAmount] = useState(500);
  
  const researchAreas = [
    { id: 1, title: 'Tamizhar Flag', description: 'The Tamizhar Flag represents the cultural and historical identity of Tamil people.', image: './wtarf-logo-150x202.png', downloadLink: './tamil_flag.png', filetype: 'PNG' },
    { id: 2, title: 'Tamil National Thoughts', description: 'Advancing the understanding of Tamil national identity and cultural values', image: './wtarf-v2.jpg', downloadLink: 'https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf', filetype: 'PDF' },
    { id: 3, title: 'South Indian Tamils', description: 'Developing and preserving the cultural heritage of South Indian Tamils', image: './wtarf-v3.jpg', downloadLink: '', filetype: 'PDF' },
    { id: 4, title: 'Tamil Inscription', description: 'Harnessing the wisdom of ancient Tamil inscriptions', image: './wtarf-`v4.jpg', downloadLink: '', filetype: 'PDF' },
  ];

  const publications = [
    { id: 1, title: 'Advancements in Neural Network Architectures', authors: 'Smith, J., et al.', journal: 'Nature AI', date: '2023', abstract: 'This paper presents novel approaches to deep learning architectures...' },
    { id: 2, title: 'CRISPR Applications in Modern Medicine', authors: 'Johnson, A., et al.', journal: 'Cell Biology', date: '2023', abstract: 'Exploring the latest developments in gene editing technologies...' },
    { id: 3, title: 'Solar Panel Efficiency Improvements', authors: 'Williams, R., et al.', journal: 'Renewable Energy Review', date: '2022', abstract: 'New materials and designs for enhanced photovoltaic performance...' },
  ];

  const teamMembers = [
    { id: 1, name: 'Dr. Sarah Chen', role: 'Lead Researcher', specialty: 'Machine Learning', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop' },
    { id: 2, name: 'Prof. Michael Rodriguez', role: 'Principal Investigator', specialty: 'Biochemistry', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop' },
    { id: 3, name: 'Dr. Emily Johnson', role: 'Senior Scientist', specialty: 'Materials Science', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&auto=format&fit=crop' },
    { id: 4, name: 'Dr. James Wilson', role: 'Data Analyst', specialty: 'Computational Physics', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop' },
  ];

  const links = [
  { text: 'Research Areas', href: '#', className: 'font-semibold', name: 'research', shorttext: 'Research'},
  { text: 'Our Team', href: '#', name: 'team', shorttext: 'Team' },
  { text: 'Contact', href: '#', name: 'contact', shorttext: 'Contact' },
]

  const handleDonation = () => {
    alert(`Thanks! Your ${donationAmount} Amount received!`);
    setShowDonationModal(false);
    setDonationAmount(500);
  };


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}     
{/* bg-gradient-to-r from-blue-800 to-teal-700 text-white shadow-lg

bg-[linear-gradient(0deg,#f40f68_0%,#f86e3d_55%,#fbcd11_100%)]

flex flex-col md:flex-row justify-between items-center
container mx-auto px-4 py-6
*/}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
               <a href='/'> <img
                src="./wtarf-logo-150x202.png"
                alt="WTA Research Foundation Logo"
                className="h-32 w-32 ml-0 mt-0 mb-0 mr-0" />
                </a>
                {/* <span className="ml-2 text-xl font-bold text-gray-900">WTA Research Foundation</span> */}
            </div>

            <nav className="bg-white items-right">
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
            
                      {/* Mobile Button */}
                      <div className="md:hidden">
                        <button
                          onClick={() => setOpen(!open)}
                          className="text-gray-700 hover:text-indigo-600 transition"
                        >
                          {open ? <X size={24} /> : <Menu size={24} />}
                        </button>
                      </div>
                    </div>
                  </div>
            
                  {/* Mobile Menu */}
                  {open && (
                    <div className="md:hidden px-4 pb-4 space-y-2">
                      {links.map((link) => (
                        <button 
                              onClick={() => setActiveTab(link.name)} 
                              className={`block text-gray-700 hover:text-indigo-600 transition ${activeTab === link.name ? 'bg-white text-[#412507] font-medium' : 'hover:bg-[linear-gradient(90deg,#F5CDA2_0%,#E78318_55%,#945410_100%)]'}`}
                            >
                              {link.text}
                            </button>
                      ))}
                    </div>
                  )}
                </nav>
              
            <div className="flex items-center">              
              <button onClick={() => setShowDonationModal(true)} className="bg-[#BD6B14] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#6A3C0B] transition-colors">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        {activeTab === 'home' && (
          <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
            
            {/* ## Background Image */}
            <img src="./public/header-bg.jpg" alt="" className="w-full h-full" />
            {/* ## Background Image */}
            
            <div className="max-w-7xl mx-auto">           
              <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">                
                <div className="pt-10 px-4 sm:px-6 lg:px-8">
                  <div className="text-center sm:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block">World Tamizh Authority</span>
                      <span className="block text-blue-600">Research Foundation</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      We work for the development of the global Tamil community through research and innovation.
                    </p>
                    
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
                      <div className="rounded-md shadow">
                        <button 
                          onClick={() => setActiveTab('research')}
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                        >
                          Explore Research
                        </button>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button 
                          onClick={() => setActiveTab('publications')}
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                        >
                          View Publications
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Research Areas Section */}
        {activeTab === 'research' && (
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Research Areas
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Exploring frontiers of knowledge across multiple disciplines
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {researchAreas.map((area) => (
                  <div key={area.id} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gray-200">
                      <img className="w-full h-full object-cover" src={area.image} alt={area.title} />
                    </div>
                    <div className="px-4 py-5 sm:p-6">
                      <h3 className="text-lg font-medium text-gray-900">{area.title}</h3>
                      <p className="mt-2 text-sm text-gray-500">{area.description}</p>
                      <div className="mt-4">
                        <div className="flex justify-between items-center">
                      <a 
                        href={area.downloadLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Download
                      </a>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {area.filetype}
                      </span>
                    </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Publications Section */}
        {activeTab === 'publications' && (
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Recent Publications
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Our latest research findings published in leading journals
              </p>
            </div>

            <div className="mt-10 space-y-6">
              {publications.map((pub) => (
                <div key={pub.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{pub.title}</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">{pub.authors}</p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Journal</dt>
                        <dd className="mt-1 text-sm text-gray-900">{pub.journal}</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Published</dt>
                        <dd className="mt-1 text-sm text-gray-900">{pub.date}</dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">Abstract</dt>
                        <dd className="mt-1 text-sm text-gray-900">{pub.abstract}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Section */}
        {activeTab === 'team' && (
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Research Team
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Distinguished experts driving innovation in their fields
              </p>
            </div>

            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="h-48 bg-gray-200">
                      <img className="w-full h-full object-cover" src={member.image} alt={member.name} />
                    </div>
                    <div className="px-4 py-5 sm:p-6">
                      <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                      <p className="text-sm font-medium text-blue-600">{member.role}</p>
                      <p className="mt-2 text-sm text-gray-500">{member.specialty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeTab === 'contact' && (
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Get In Touch
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Interested in collaborating or learning more about our research?
              </p>
            </div>

            <div className="mt-12 bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Donation Modal */}
      {showDonationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">தானம் செய்யவும்</h3>
                <button 
                  onClick={() => setShowDonationModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">
                தமிழ் மொழியின் வளர்ச்சிக்கு உங்கள் உதவியை வழங்குங்கள். உங்கள் தானம் மூலம் எங்கள் ஆராய்ச்சி மேம்பாடு பெறும்.
              </p>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">தொகை (ரூபாய்)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                  <input 
                    type="number" 
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min="10"
                  />
                </div>
                
                <div className="flex space-x-2 mt-3">
                  {[100, 500, 1000, 2000].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setDonationAmount(amount)}
                      className={`flex-1 py-2 rounded-lg ${
                        donationAmount === amount 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">கட்டுமான முறை</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="border border-gray-300 rounded-lg p-3 flex flex-col items-center hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span>கடன் அட்டை</span>
                  </button>
                  <button className="border border-gray-300 rounded-lg p-3 flex flex-col items-center hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>UPI</span>
                  </button>
                  <button className="border border-gray-300 rounded-lg p-3 flex flex-col items-center hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                    <span>Net Banking</span>
                  </button>
                  <button className="border border-gray-300 rounded-lg p-3 flex flex-col items-center hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>PayPal</span>
                  </button>
                </div>
              </div>
              
              <button 
                onClick={handleDonation}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition"
              >
                தானம் செய்யவும் (₹{donationAmount})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">ResearchHub</h3>
              <p className="mt-4 text-base text-gray-300">
                Advancing knowledge through collaborative research and innovation.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Research Areas</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Artificial Intelligence</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Biotechnology</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Renewable Energy</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Quantum Computing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Publications</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Datasets</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Research Tools</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Collaboration</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
              <ul className="mt-4 space-y-4">
                <li className="text-base text-gray-300">123 Research Avenue</li>
                <li className="text-base text-gray-300">Innovation City, IC 10001</li>
                <li className="text-base text-gray-300">contact@researchhub.edu</li>
                <li className="text-base text-gray-300">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 text-center">&copy; {new Date().getFullYear()} ResearchHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
