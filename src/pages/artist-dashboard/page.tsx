import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ArtistDashboard() {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      type: 'image',
      title: 'Fashion Portfolio',
      url: 'https://readdy.ai/api/search-image?query=Professional%20actress%20portfolio%20photo%2C%20dramatic%20lighting%2C%20contemporary%20fashion%20photography%20with%20elegant%20styling%20and%20cinematic%20atmosphere&width=400&height=500&seq=port001&orientation=portrait',
      description: 'Professional fashion shoot for magazine cover'
    },
    {
      id: 2,
      type: 'video',
      title: 'Acting Reel 2024',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      description: 'Latest acting reel showcasing dramatic performances'
    },
    {
      id: 3,
      type: 'image',
      title: 'Traditional Look',
      url: 'https://readdy.ai/api/search-image?query=Bollywood%20actress%20in%20traditional%20Indian%20attire%2C%20cultural%20photography%2C%20elegant%20saree%20styling%20with%20professional%20lighting&width=400&height=500&seq=port002&orientation=portrait',
      description: 'Traditional Indian attire photoshoot'
    }
  ]);

  // Profile data state
  const [profileData, setProfileData] = useState({
    name: 'Sarah Mitchell',
    email: 'sarah.mitchell@email.com',
    phone: '+91 9876543210',
    location: 'Mumbai, Maharashtra',
    age: '28',
    gender: 'Female',
    height: '5\'6"',
    weight: '55 kg',
    eyeColor: 'Brown',
    hairColor: 'Black',
    category: 'Acting',
    experience: 'Professional',
    bio: 'Versatile actress with 8 years of experience in Bollywood and regional cinema. Known for powerful performances in drama and thriller genres.',
    education: 'National School of Drama, New Delhi',
    languages: 'Hindi, English, Marathi',
    skills: 'Method Acting, Classical Dance, Singing, Horse Riding, Martial Arts',
    specialization: 'Drama, Romance, Thriller',
    availability: 'Available for projects starting March 2024',
    rateRange: '₹5,00,000 - ₹15,00,000 per project',
    instagram: '@sarahmitchell_official',
    twitter: '@sarahmitchell',
    facebook: 'Sarah Mitchell Official'
  });

  const notifications = [
    { id: 1, message: 'New audition matching your profile', time: '5 min ago', unread: true },
    { id: 2, message: 'Application status updated', time: '1 hour ago', unread: true },
    { id: 3, message: 'Profile viewed by casting director', time: '2 hours ago', unread: false }
  ];

  const messages = [
    { id: 1, sender: 'Stellar Productions', message: 'We would like to schedule an interview', time: '10 min ago', unread: true },
    { id: 2, sender: 'Elite Fashion', message: 'Thank you for your application', time: '1 hour ago', unread: false }
  ];

  const recentAuditions = [
    {
      id: 1,
      title: 'Lead Role - Independent Film',
      company: 'Stellar Productions',
      status: 'Under Review',
      appliedDate: '2024-01-15',
      deadline: '2024-02-15',
      privacyType: 'public'
    },
    {
      id: 2,
      title: 'Commercial Voice Over',
      company: 'Brand Voice Studios',
      status: 'Shortlisted',
      appliedDate: '2024-01-10',
      deadline: '2024-02-10',
      privacyType: 'private'
    },
    {
      id: 3,
      title: 'Fashion Week Model',
      company: 'Elite Fashion',
      status: 'Rejected',
      appliedDate: '2024-01-05',
      deadline: '2024-01-20',
      privacyType: 'live'
    }
  ];

  const upcomingAuditions = [
    {
      id: 1,
      title: 'Broadway Musical Ensemble',
      company: 'Broadway Productions',
      deadline: '2024-02-25',
      location: 'New York, NY',
      type: 'Music'
    },
    {
      id: 2,
      title: 'TV Series Regular',
      company: 'Prime Entertainment',
      deadline: '2024-03-01',
      location: 'Los Angeles, CA',
      type: 'Acting'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Under Review': return 'bg-yellow-100 text-yellow-800';
      case 'Shortlisted': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      case 'Selected': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert('Profile updated successfully!');
    setShowProfileModal(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                  src="https://static.readdy.ai/image/f9554bb0a127440936ab2d922523a178/fc2d4d4044f45bd51bc816181006ac61.png"
                  alt="Media Audition"
                  className="h-10"
                />
              <span className="ml-4 text-sm text-gray-500 hidden md:block">Artist Dashboard</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => navigate('/shots')}
                className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Shots
              </button>
              <button 
                onClick={() => navigate('/dashboard-selection')}
                className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Switch Dashboard
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
                          navigate('/artist/1');
                        }}
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer flex items-center"
                      >
                        <i className="ri-user-line mr-3 text-gray-500 w-5 h-5 flex items-center justify-center"></i>
                        View Profile
                      </button>
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

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden text-gray-600 hover:text-teal-600 p-2 cursor-pointer w-10 h-10 flex items-center justify-center"
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
                    navigate('/shots');
                    setShowMobileMenu(false);
                  }}
                  className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer text-left"
                >
                  Shots
                </button>
                <button 
                  onClick={() => {
                    navigate('/dashboard-selection');
                    setShowMobileMenu(false);
                  }}
                  className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer text-left"
                >
                  Switch Dashboard
                </button>
                
                <div className="border-t border-gray-100 pt-2 mt-2">
                  <div className="flex items-center space-x-3 px-3 py-2">
                    <img 
                      src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20young%20artist%20with%20warm%20smile%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20makeup%20and%20styling%2C%20contemporary%20portrait%20photography%20style&width=40&height=40&seq=profile001&orientation=squarish"
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Sarah Mitchell</p>
                      <p className="text-xs text-gray-500">sarah.mitchell@email.com</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => {
                      navigate('/artist/1');
                      setShowMobileMenu(false);
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer flex items-center"
                  >
                    <i className="ri-user-line mr-3 text-gray-500 w-5 h-5 flex items-center justify-center"></i>
                    View Profile
                  </button>
                  
                  <button 
                    onClick={() => {
                      setShowNotifications(!showNotifications);
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer flex items-center"
                  >
                    <i className="ri-notification-3-line mr-3 text-gray-500 w-5 h-5 flex items-center justify-center"></i>
                    Notifications
                    <span className="ml-auto w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                  
                  <button 
                    onClick={() => {
                      setShowMessages(!showMessages);
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer flex items-center"
                  >
                    <i className="ri-message-3-line mr-3 text-gray-500 w-5 h-5 flex items-center justify-center"></i>
                    Messages
                    <span className="ml-auto w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                  
                  <button 
                    onClick={() => {
                      navigate('/');
                      setShowMobileMenu(false);
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer flex items-center"
                  >
                    <i className="ri-logout-box-line mr-3 text-red-600 w-5 h-5 flex items-center justify-center"></i>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Sarah!</h2>
          <p className="text-gray-600">Manage your auditions, profile, and career opportunities</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <i className="ri-file-list-3-line text-xl text-teal-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Applications</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <i className="ri-check-line text-xl text-green-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Shortlisted</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="ri-star-line text-xl text-blue-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Profile Views</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="ri-calendar-line text-xl text-purple-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Applications */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">Recent Applications</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentAuditions.map((audition) => (
                    <div key={audition.id} className="flex flex-col md:flex-row md:items-center md:justify-between p-4 border border-gray-200 rounded-lg space-y-3 md:space-y-0">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{audition.title}</h4>
                        <p className="text-sm text-gray-600">{audition.company}</p>
                        <p className="text-xs text-gray-500">Applied: {audition.appliedDate}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                        <div className="w-full sm:w-auto">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(audition.status)}`}>
                            {audition.status}
                          </span>
                          <p className="text-xs text-gray-500 mt-1">Deadline: {audition.deadline}</p>
                        </div>
                        
                        {/* Open Audition Button for Public and Live Auditions */}
                        {(audition.privacyType === 'public' || audition.privacyType === 'live') && (
                          <button
                            onClick={() => {
                              if (audition.privacyType === 'live') {
                                navigate(`/live/${audition.id}`);
                              } else if (audition.privacyType === 'public') {
                                navigate(`/public-audition/${audition.id}`);
                              }
                            }}
                            className="w-full sm:w-auto bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center"
                          >
                            {audition.privacyType === 'live' ? (
                              <>
                                <i className="ri-live-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                                Open Live
                              </>
                            ) : (
                              <>
                                <i className="ri-global-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                                Open Audition
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <button className="text-teal-600 hover:text-teal-700 text-sm font-medium cursor-pointer">
                    View All Applications →
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">Quick Actions</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button 
                    onClick={() => navigate('/auditions')}
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                      <i className="ri-search-line text-teal-600"></i>
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">Find Auditions</p>
                      <p className="text-sm text-gray-600">Browse opportunities</p>
                    </div>
                  </button>
                  
                  <button 
                    onClick={() => setShowPortfolioModal(true)}
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <i className="ri-folder-image-line text-purple-600"></i>
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">Manage Portfolio</p>
                      <p className="text-sm text-gray-600">Upload media files</p>
                    </div>
                  </button>
                  
                  <button 
                    onClick={() => setShowProfileModal(true)}
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <i className="ri-user-settings-line text-blue-600"></i>
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">Update Profile</p>
                      <p className="text-sm text-gray-600">Edit your information</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Profile Completion */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Completion</h3>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium text-gray-900">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-teal-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-green-600">
                    <i className="ri-check-line mr-2"></i>
                    <span>Basic Information</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <i className="ri-check-line mr-2"></i>
                    <span>Profile Photo</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <i className="ri-check-line mr-2"></i>
                    <span>Skills & Experience</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <i className="ri-close-line mr-2"></i>
                    <span>Demo Reel</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <i className="ri-close-line mr-2"></i>
                    <span>References</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-teal-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors cursor-pointer"
                  onClick={() => setShowProfileModal(true)}
                >
                  Complete Profile
                </button>
              </div>
            </div>

            {/* Upcoming Auditions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Recommended Auditions</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {upcomingAuditions.map((audition) => (
                    <div key={audition.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900 text-sm">{audition.title}</h4>
                        <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">
                          {audition.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{audition.company}</p>
                      <p className="text-xs text-gray-500 mb-2">{audition.location}</p>
                      <p className="text-xs text-red-600">Deadline: {audition.deadline}</p>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => navigate('/auditions')}
                  className="w-full mt-4 border border-teal-600 text-teal-600 py-2 rounded-lg text-sm font-medium hover:bg-teal-50 transition-colors cursor-pointer"
                >
                  View All Auditions
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-check-line text-green-600 text-sm"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-900">Shortlisted for Commercial Voice Over</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-eye-line text-blue-600 text-sm"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-900">Profile viewed by Elite Fashion</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-send-plane-line text-teal-600 text-sm"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-900">Applied for Lead Role - Independent Film</p>
                      <p className="text-xs text-gray-500">3 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Update Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Update Profile</h3>
                <button 
                  onClick={() => setShowProfileModal(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer w-6 h-6 flex items-center justify-center"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              <form onSubmit={handleProfileUpdate} className="space-y-6">
                {/* Basic Information */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        value={profileData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Physical Attributes */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Physical Attributes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                      <input
                        type="number"
                        value={profileData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                      <select
                        value={profileData.gender}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent pr-8"
                      >
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Non-binary">Non-binary</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Height</label>
                      <input
                        type="text"
                        value={profileData.height}
                        onChange={(e) => handleInputChange('height', e.target.value)}
                        placeholder="e.g., 5'6&quot;"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Weight</label>
                      <input
                        type="text"
                        value={profileData.weight}
                        onChange={(e) => handleInputChange('weight', e.target.value)}
                        placeholder="e.g., 55 kg"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Eye Color</label>
                      <input
                        type="text"
                        value={profileData.eyeColor}
                        onChange={(e) => handleInputChange('eyeColor', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Hair Color</label>
                      <input
                        type="text"
                        value={profileData.hairColor}
                        onChange={(e) => handleInputChange('hairColor', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Professional Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                      <select
                        value={profileData.category}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent pr-8"
                      >
                        <option value="Acting">Acting</option>
                        <option value="Modeling">Modeling</option>
                        <option value="Voice Acting">Voice Acting</option>
                        <option value="Music">Music</option>
                        <option value="Dance">Dance</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                      <select
                        value={profileData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent pr-8"
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Professional">Professional</option>
                        <option value="Expert">Expert</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
                      <input
                        type="text"
                        value={profileData.education}
                        onChange={(e) => handleInputChange('education', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
                      <input
                        type="text"
                        value={profileData.specialization}
                        onChange={(e) => handleInputChange('specialization', e.target.value)}
                        placeholder="e.g., Drama, Romance, Thriller"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                      placeholder="Tell us about yourself and your experience..."
                    />
                    <p className="text-xs text-gray-500 mt-1">{profileData.bio.length}/500 characters</p>
                  </div>
                </div>

                {/* Skills & Languages */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Skills & Languages</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Languages</label>
                      <input
                        type="text"
                        value={profileData.languages}
                        onChange={(e) => handleInputChange('languages', e.target.value)}
                        placeholder="e.g., Hindi, English, Marathi"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
                      <input
                        type="text"
                        value={profileData.skills}
                        onChange={(e) => handleInputChange('skills', e.target.value)}
                        placeholder="e.g., Method Acting, Classical Dance, Singing"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Availability & Rates */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Availability & Rates</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                      <input
                        type="text"
                        value={profileData.availability}
                        onChange={(e) => handleInputChange('availability', e.target.value)}
                        placeholder="e.g., Available for projects starting March 2024"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Rate Range</label>
                      <input
                        type="text"
                        value={profileData.rateRange}
                        onChange={(e) => handleInputChange('rateRange', e.target.value)}
                        placeholder="e.g., ₹5,00,000 - ₹15,00,000 per project"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Social Media</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
                      <input
                        type="text"
                        value={profileData.instagram}
                        onChange={(e) => handleInputChange('instagram', e.target.value)}
                        placeholder="@username"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Twitter</label>
                      <input
                        type="text"
                        value={profileData.twitter}
                        onChange={(e) => handleInputChange('twitter', e.target.value)}
                        placeholder="@username"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Facebook</label>
                      <input
                        type="text"
                        value={profileData.facebook}
                        onChange={(e) => handleInputChange('facebook', e.target.value)}
                        placeholder="Page Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => setShowProfileModal(false)}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Portfolio Management Modal */}
      {showPortfolioModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Manage Portfolio</h3>
                <button 
                  onClick={() => setShowPortfolioModal(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer w-6 h-6 flex items-center justify-center"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              {/* Add New Item Button */}
              <div className="mb-6">
                <button 
                  onClick={() => {
                    const newItem = {
                      id: portfolioItems.length + 1,
                      type: 'image',
                      title: 'New Portfolio Item',
                      url: 'https://readdy.ai/api/search-image?query=Professional%20portfolio%20placeholder%2C%20clean%20minimalist%20design%2C%20neutral%20background%20for%20adding%20new%20content&width=400&height=500&seq=new001&orientation=portrait',
                      description: 'Click to edit description'
                    };
                    setPortfolioItems([...portfolioItems, newItem]);
                  }}
                  className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors cursor-pointer"
                >
                  <i className="ri-add-line mr-2"></i>
                  Add New Item
                </button>
              </div>

              {/* Portfolio Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-xl overflow-hidden">
                    {item.type === 'image' ? (
                      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.url})` }}></div>
                    ) : (
                      <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <div className="text-center">
                          <i className="ri-play-circle-line text-4xl text-gray-500 mb-2"></i>
                          <p className="text-gray-600 text-sm">Video Content</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                        <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs mb-4">{item.description}</p>
                      
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => {
                            alert('Edit functionality will be implemented with file upload system.');
                          }}
                          className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-xs font-medium hover:bg-blue-700 transition-colors cursor-pointer"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => {
                            setPortfolioItems(portfolioItems.filter(p => p.id !== item.id));
                          }}
                          className="flex-1 bg-red-600 text-white py-2 px-3 rounded text-xs font-medium hover:bg-red-700 transition-colors cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Portfolio Stats */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Portfolio Statistics</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600 mb-1">{portfolioItems.length}</div>
                    <div className="text-gray-600 text-sm">Total Items</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {portfolioItems.filter(item => item.type === 'image').length}
                    </div>
                    <div className="text-gray-600 text-sm">Images</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {portfolioItems.filter(item => item.type === 'video').length}
                    </div>
                    <div className="text-gray-600 text-sm">Videos</div>
                  </div>
                </div>
              </div>

              {/* Tips Section */}
              <div className="mt-6 bg-blue-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Portfolio Tips</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                    Keep your portfolio updated with your latest and best work
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                    Include a variety of shots showing different looks and emotions
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                    Ensure all images are high-quality and professionally shot
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-2 mt-0.5"></i>
                    Add descriptive titles and tags to help casting directors find you
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

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
