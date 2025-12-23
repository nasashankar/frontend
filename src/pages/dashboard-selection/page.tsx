import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashboardSelection() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [userRole, setUserRole] = useState<'artist' | 'director'>('artist'); // Track user role

  const backgroundImages = [
    'https://readdy.ai/api/search-image?query=Professional%20entertainment%20industry%20studio%20with%20modern%20lighting%20equipment%2C%20cameras%2C%20and%20casting%20setup%2C%20elegant%20minimalist%20interior%20design%2C%20warm%20ambient%20lighting%2C%20contemporary%20workspace%20atmosphere&width=1920&height=1080&seq=dash001&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Modern%20film%20production%20studio%20with%20professional%20equipment%2C%20director%20chairs%2C%20movie%20cameras%2C%20elegant%20lighting%20setup%2C%20entertainment%20industry%20workspace%2C%20contemporary%20design&width=1920&height=1080&seq=dash002&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Professional%20recording%20studio%20with%20soundproof%20booth%2C%20mixing%20console%2C%20entertainment%20industry%20equipment%2C%20modern%20minimalist%20design%2C%20warm%20professional%20lighting&width=1920&height=1080&seq=dash003&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Fashion%20photography%20studio%20with%20professional%20lighting%2C%20runway%20setup%2C%20modern%20equipment%2C%20entertainment%20industry%20workspace%2C%20clean%20contemporary%20design&width=1920&height=1080&seq=dash004&orientation=landscape'
  ];

  const notifications = [
    { id: 1, message: 'New audition matching your profile', time: '5 min ago', unread: true },
    { id: 2, message: 'Application status updated', time: '1 hour ago', unread: true },
    { id: 3, message: 'Profile viewed by casting director', time: '2 hours ago', unread: false }
  ];

  const messages = [
    { id: 1, sender: 'Stellar Productions', message: 'We would like to schedule an interview', time: '10 min ago', unread: true },
    { id: 2, sender: 'Elite Fashion', message: 'Thank you for your application', time: '1 hour ago', unread: false }
  ];

  // Auto-scroll background images
  useState(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${image}')`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="bg-black/30 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => navigate('/')}
              className="cursor-pointer flex items-center"
            >
              <img 
                src="https://static.readdy.ai/image/f9554bb0a127440936ab2d922523a178/298fbdfef9c03fe40ef57ca9c08a88b2.png" 
                alt="Media Audition" 
                className="h-10 w-auto"
              />
            </button>
            
             {/* Desktop Right Side */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => navigate('/dashboard-selection')}
                className="text-white hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => navigate('/auditions')}
                className="text-white hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Find Auditions
              </button>
              <button 
                onClick={() => navigate('/artists')}
                className="text-white hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Find Artist
              </button>
              <button 
                onClick={() => navigate('/shots')}
                className="text-white hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Shots
              </button>
              {/* Notifications */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setShowNotifications(!showNotifications);
                    setShowMessages(false);
                    setShowProfileMenu(false);
                  }}
                  className="relative text-gray-600 hover:text-teal-600 p-2 cursor-pointer w-10 h-10 flex items-center justify-center"
                >
                  <i className="ri-notification-3-line text-xl"></i>
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                    <div className="p-4 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-900">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div key={notif.id} className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${notif.unread ? 'bg-teal-50' : ''}`}>
                          <p className="text-sm text-gray-900">{notif.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 text-center border-t border-gray-100">
                      <button className="text-sm text-teal-600 hover:text-teal-700 cursor-pointer">View All</button>
                    </div>
                  </div>
                )}
              </div>

              {/* Messages */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setShowMessages(!showMessages);
                    setShowNotifications(false);
                    setShowProfileMenu(false);
                  }}
                  className="relative text-gray-600 hover:text-teal-600 p-2 cursor-pointer w-10 h-10 flex items-center justify-center"
                >
                  <i className="ri-message-3-line text-xl"></i>
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                
                {showMessages && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                    <div className="p-4 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-900">Messages</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {messages.map((msg) => (
                        <div key={msg.id} className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${msg.unread ? 'bg-teal-50' : ''}`}>
                          <p className="text-sm font-medium text-gray-900">{msg.sender}</p>
                          <p className="text-sm text-gray-600 mt-1">{msg.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 text-center border-t border-gray-100">
                      <button className="text-sm text-teal-600 hover:text-teal-700 cursor-pointer">View All Messages</button>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Menu */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setShowProfileMenu(!showProfileMenu);
                    setShowNotifications(false);
                    setShowMessages(false);
                  }}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <img 
                    src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20young%20artist%20with%20warm%20smile%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20makeup%20and%20styling%2C%20contemporary%20portrait%20photography%20style&width=40&height=40&seq=profile001&orientation=squarish"
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 hover:border-teal-600 transition-colors"
                  />
                </button>
                
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <img 
                          src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20young%20artist%20with%20warm%20smile%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20makeup%20and%20styling%2C%20contemporary%20portrait%20photography%20style&width=50&height=50&seq=profile001&orientation=squarish"
                          alt="Profile"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">Sarah Mitchell</p>
                          <p className="text-xs text-gray-500">sarah.mitchell@email.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="py-2">
                     
                      <button 
                        onClick={() => {
                          setShowProfileMenu(false);
                          navigate('/');
                        }}
                        className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer flex items-center"
                      >
                        <i className="ri-logout-box-line mr-3 text-red-600 w-5 h-5 flex items-center justify-center"></i>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

           
          </div>
        </div>
      </nav>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Create Audition</h3>
                <button 
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer w-6 h-6 flex items-center justify-center"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              
              <form className="space-y-4" data-readdy-form action="https://readdy.ai/api/form/d482v8l34biqimnfonrg" method="POST" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const data = new URLSearchParams();
                for (const [key, value] of formData.entries()) {
                  data.append(key, value as string);
                }
                
                fetch('https://readdy.ai/api/form/d482v8l34biqimnfonrg', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: data
                }).then(() => {
                  alert('Message sent successfully!');
                  setShowContactForm(false);
                }).catch(() => {
                  alert('Error sending message. Please try again.');
                });
              }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                  <select 
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm pr-8"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="acting">Acting Auditions</option>
                    <option value="modeling">Modeling Casting</option>
                    <option value="voice">Voice Acting</option>
                    <option value="music">Music Auditions</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
                    placeholder="Tell us about your experience and goals..."
                    required
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">Maximum 500 characters</p>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center flex-1 py-16">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to Your
              <span className="block text-teal-400">Dashboard</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose your role to access your personalized dashboard and start managing your entertainment career
            </p>
          </div>

          {/* Dashboard Selection Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Artist Dashboard Button */}
            <div 
              onClick={() => {
                setUserRole('artist');
                navigate('/artist-dashboard');
              }}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500/30 transition-colors">
                  <i className="ri-user-star-line text-4xl text-teal-400"></i>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Artist Dashboard</h3>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  Manage your profile, view audition opportunities, track applications, and showcase your portfolio
                </p>
                <div className="space-y-3 text-white/70 text-sm">
                  <div className="flex items-center justify-center">
                    <i className="ri-check-line text-teal-400 mr-2"></i>
                    <span>Browse & Apply for Auditions</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="ri-check-line text-teal-400 mr-2"></i>
                    <span>Manage Portfolio & Media</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="ri-check-line text-teal-400 mr-2"></i>
                    <span>Track Application Status</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="ri-check-line text-teal-400 mr-2"></i>
                    <span>Update Profile & Skills</span>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold group-hover:bg-teal-700 transition-colors inline-block">
                    Enter Artist Dashboard
                    <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Director Dashboard Button */}
            <div 
              onClick={() => {
                setUserRole('director');
                navigate('/director-dashboard');
              }}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/30 transition-colors">
                  <i className="ri-movie-2-line text-4xl text-purple-400"></i>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Director Dashboard</h3>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  Create auditions, manage casting calls, review applications, and discover talented performers
                </p>
                <div className="space-y-3 text-white/70 text-sm">
                  <div className="flex items-center justify-center">
                    <i className="ri-check-line text-purple-400 mr-2"></i>
                    <span>Create & Manage Auditions</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="ri-check-line text-purple-400 mr-2"></i>
                    <span>Review Artist Applications</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="ri-check-line text-purple-400 mr-2"></i>
                    <span>Search Artist Database</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="ri-check-line text-purple-400 mr-2"></i>
                    <span>Manage Project Details</span>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold group-hover:bg-purple-700 transition-colors inline-block">
                    Enter Director Dashboard
                    <i className="ri-arrow-right-line ml-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-white/60 text-sm">
              Need help choosing? Contact our support team for assistance
            </p>
          </div>
        </div>
      </div>

      {/* Background Animation Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === currentImageIndex 
                  ? 'bg-white' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
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