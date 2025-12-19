import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ArtistProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Mock data - in real app, this would come from API
  const artist = {
    id: 1,
    name: 'Priya Sharma',
    category: 'Acting',
    gender: 'Female',
    age: 28,
    ageRange: '25-35',
    location: 'Mumbai, Maharashtra',
    experience: 'Professional',
    languages: ['Hindi', 'English', 'Marathi'],
    skills: ['Method Acting', 'Classical Dance', 'Singing', 'Horse Riding', 'Martial Arts'],
    profileImage: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20actress%20headshot%2C%20confident%20expression%2C%20studio%20lighting%2C%20contemporary%20portrait%20photography%20with%20clean%20background%20and%20elegant%20styling&width=300&height=400&seq=art001&orientation=portrait',
    coverImage: 'https://readdy.ai/api/search-image?query=Bollywood%20film%20set%20with%20professional%20actress%2C%20cinematic%20lighting%2C%20movie%20production%20environment%20with%20elegant%20atmosphere%20and%20contemporary%20styling&width=1200&height=400&seq=art001c&orientation=landscape',
    bio: 'Versatile actress with 8 years of experience in Bollywood and regional cinema. Known for her powerful performances in drama and thriller genres. Priya has worked with renowned directors and has been recognized for her dedication to method acting.',
    height: '5\'6"',
    weight: '55 kg',
    eyeColor: 'Brown',
    hairColor: 'Black',
    recentProjects: [
      {
        title: 'Zindagi Na Milegi Dobara 2',
        role: 'Lead Actress',
        year: '2024',
        director: 'Zoya Akhtar',
        description: 'Romantic drama sequel where she played the role of an independent travel blogger.'
      },
      {
        title: 'Mumbai Diaries',
        role: 'Supporting Actress',
        year: '2023',
        director: 'Nikkhil Advani',
        description: 'Medical drama series showcasing her versatility in emotional scenes.'
      },
      {
        title: 'Arya',
        role: 'Lead Actress',
        year: '2023',
        director: 'Sukumar',
        description: 'Action thriller that established her as a bankable star in South Indian cinema.'
      }
    ],
    awards: [
      'Best Actress - Mumbai Film Festival 2023',
      'Rising Star Award - Filmfare 2022',
      'Critics Choice Award - Indian Film Festival 2022',
      'Best Debut - Screen Awards 2020'
    ],
    education: 'National School of Drama, New Delhi',
    specialization: 'Drama, Romance, Thriller',
    contactEmail: 'priya.sharma@talent.com',
    contactPhone: '+91 9876543210',
    socialMedia: {
      instagram: '@priyasharma_official',
      twitter: '@priyasharma',
      facebook: 'Priya Sharma Official'
    },
    portfolio: [
      {
        type: 'image',
        url: 'https://readdy.ai/api/search-image?query=Professional%20actress%20portfolio%20photo%2C%20dramatic%20lighting%2C%20contemporary%20fashion%20photography%20with%20elegant%20styling%20and%20cinematic%20atmosphere&width=400&height=500&seq=port001&orientation=portrait',
        title: 'Fashion Portfolio'
      },
      {
        type: 'image',
        url: 'https://readdy.ai/api/search-image?query=Bollywood%20actress%20in%20traditional%20Indian%20attire%2C%20cultural%20photography%2C%20elegant%20saree%20styling%20with%20professional%20lighting&width=400&height=500&seq=port002&orientation=portrait',
        title: 'Traditional Look'
      },
      {
        type: 'image',
        url: 'https://readdy.ai/api/search-image?query=Professional%20actress%20headshot%2C%20commercial%20photography%2C%20modern%20styling%20with%20clean%20background%20and%20contemporary%20lighting&width=400&height=500&seq=port003&orientation=portrait',
        title: 'Commercial Headshot'
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        title: 'Acting Reel 2024'
      }
    ],
    testimonials: [
      {
        name: 'Zoya Akhtar',
        role: 'Director',
        text: 'Priya brings incredible depth to every character she portrays. Her dedication to the craft is truly inspiring.',
        project: 'Zindagi Na Milegi Dobara 2'
      },
      {
        name: 'Nikkhil Advani',
        role: 'Director',
        text: 'Working with Priya was a fantastic experience. She has the rare ability to make every scene authentic and memorable.',
        project: 'Mumbai Diaries'
      }
    ],
    availability: 'Available for projects starting March 2024',
    rateRange: '₹5,00,000 - ₹15,00,000 per project'
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={() => navigate('/')}
                className="text-2xl font-bold text-gray-900 cursor-pointer"
              >
                <img 
                  src="https://static.readdy.ai/image/f9554bb0a127440936ab2d922523a178/fc2d4d4044f45bd51bc816181006ac61.png"
                  alt="Media Audition"
                  className="h-10"
                />
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => navigate('/auditions')}
                className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Find Audition
              </button>
              <button 
                onClick={() => navigate('/artists')}
                className="text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Find Artist
              </button>
              <a href="#" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer">Shots</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden text-gray-600 hover:text-teal-600 p-2 cursor-pointer"
            >
              <i className={`${showMobileMenu ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => {
                    navigate('/');
                    setShowMobileMenu(false);
                  }}
                  className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    navigate('/auditions');
                    setShowMobileMenu(false);
                  }}
                  className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer text-left"
                >
                  Find Audition
                </button>
                <button 
                  onClick={() => {
                    navigate('/artists');
                    setShowMobileMenu(false);
                  }}
                  className="text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer text-left"
                >
                  Find Artist
                </button>
                <button 
                  onClick={() => {
                    navigate('/shots');
                    setShowMobileMenu(false);
                  }}
                  className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer text-left"
                >
                  Shots
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <button onClick={() => navigate('/')} className="hover:text-teal-600 cursor-pointer">Home</button>
            <i className="ri-arrow-right-s-line"></i>
            <button onClick={() => navigate('/artists')} className="hover:text-teal-600 cursor-pointer">Artists</button>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-gray-900">{artist.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${artist.coverImage})` }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-8">
          <div className="flex items-end space-x-6">
            <div className="w-32 h-32 rounded-xl overflow-hidden border-4 border-white shadow-lg">
              <img src={artist.profileImage} alt={artist.name} className="w-full h-full object-cover object-top" />
            </div>
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-2">{artist.name}</h1>
              <div className="flex items-center space-x-4 text-lg">
                <span className="bg-teal-600 px-3 py-1 rounded-full text-sm font-medium">{artist.category}</span>
                <span>{artist.location}</span>
                <span>{artist.experience}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm cursor-pointer ${
                    activeTab === 'overview'
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('portfolio')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm cursor-pointer ${
                    activeTab === 'portfolio'
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Portfolio
                </button>
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm cursor-pointer ${
                    activeTab === 'projects'
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => setActiveTab('testimonials')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm cursor-pointer ${
                    activeTab === 'testimonials'
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Testimonials
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Bio */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">About {artist.name}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{artist.bio}</p>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-3">
                    {artist.skills.map((skill, index) => (
                      <span key={index} className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Languages</h3>
                  <div className="flex flex-wrap gap-3">
                    {artist.languages.map((language, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Awards */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Awards & Recognition</h3>
                  <ul className="space-y-2">
                    {artist.awards.map((award, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <i className="ri-award-line text-teal-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'portfolio' && (
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Portfolio</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {artist.portfolio.map((item, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                      {item.type === 'image' ? (
                        <div className="h-64 bg-cover bg-center bg-top" style={{ backgroundImage: `url(${item.url})` }}></div>
                      ) : (
                        <div className="h-64 bg-gray-100 flex items-center justify-center">
                          <div className="text-center">
                            <i className="ri-play-circle-line text-6xl text-teal-600 mb-4"></i>
                            <p className="text-gray-600">Video Content</p>
                          </div>
                        </div>
                      )}
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        {item.type === 'video' && (
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 text-sm cursor-pointer">
                            Watch Video
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Recent Projects</h3>
                <div className="space-y-6">
                  {artist.recentProjects.map((project, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900">{project.title}</h4>
                          <p className="text-teal-600 font-medium">{project.role}</p>
                        </div>
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">{project.year}</span>
                      </div>
                      <p className="text-gray-600 mb-2">
                        <strong>Director:</strong> {project.director}
                      </p>
                      <p className="text-gray-700 leading-relaxed">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'testimonials' && (
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Testimonials</h3>
                <div className="space-y-6">
                  {artist.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                          <i className="ri-user-line text-white text-xl"></i>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                          <div>
                            <p className="font-semibold text-gray-900">{testimonial.name}</p>
                            <p className="text-gray-600 text-sm">{testimonial.role} • {testimonial.project}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Info</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Age</span>
                  <span className="font-medium">{artist.age} years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gender</span>
                  <span className="font-medium">{artist.gender}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Height</span>
                  <span className="font-medium">{artist.height}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Weight</span>
                  <span className="font-medium">{artist.weight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Eye Color</span>
                  <span className="font-medium">{artist.eyeColor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hair Color</span>
                  <span className="font-medium">{artist.hairColor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Education</span>
                  <span className="font-medium text-right">{artist.education}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Specialization</span>
                  <span className="font-medium text-right">{artist.specialization}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-6 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Availability</h4>
                <p className="text-gray-700 text-sm mb-4">{artist.availability}</p>
                <p className="text-teal-600 font-semibold">{artist.rateRange}</p>
              </div>

              <div className="border-t border-gray-200 mt-6 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
                <div className="space-y-3">
                  <a href={`mailto:${artist.contactEmail}`} className="flex items-center text-gray-600 hover:text-teal-600 cursor-pointer">
                    <i className="ri-mail-line mr-3 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm">{artist.contactEmail}</span>
                  </a>
                  <a href={`tel:${artist.contactPhone}`} className="flex items-center text-gray-600 hover:text-teal-600 cursor-pointer">
                    <i className="ri-phone-line mr-3 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-sm">{artist.contactPhone}</span>
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-6 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Social Media</h4>
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors cursor-pointer">
                    <i className="ri-instagram-line"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors cursor-pointer">
                    <i className="ri-twitter-line"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors cursor-pointer">
                    <i className="ri-facebook-line"></i>
                  </a>
                </div>
              </div>

              <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors mt-6 cursor-pointer">
                Contact Artist
              </button>
            </div>
          </div>
        </div>
      </div>

   {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img 
                src="https://static.readdy.ai/image/f9554bb0a127440936ab2d922523a178/298fbdfef9c03fe40ef57ca9c08a88b2.png" 
                alt="Media Audition" 
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your premier destination for media auditions and casting opportunities. Connecting talent with industry professionals since 2009.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-lg"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-lg"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                  <i className="ri-instagram-fill text-lg"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill text-lg"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Acting Auditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Modeling Casting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Voice Acting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Music Auditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</a></li>
                <li><a href="#auditions" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Current Auditions</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a></li>
                <li><button onClick={() => navigate('/privacy-policy')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy Policy</button></li>
                <li><button onClick={() => navigate('/terms-of-service')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Terms of Service</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Media Audition. All rights reserved.
            </p>
            <a 
              href="https://readdy.ai/?origin=logo" 
              className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer mt-4 md:mt-0"
            >
              powered by Nasaa Digital Media
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
