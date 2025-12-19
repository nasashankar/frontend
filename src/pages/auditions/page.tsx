import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Auditions() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedMediaType, setSelectedMediaType] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedAgeRange, setSelectedAgeRange] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedPrivacyType, setSelectedPrivacyType] = useState('all');
  const [likedAuditions, setLikedAuditions] = useState<Set<number>>(new Set());
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Mock notifications and messages
  const notifications = [
    { id: 1, message: 'New audition matching your profile', time: '5 min ago', unread: true },
    { id: 2, message: 'Application status updated', time: '1 hour ago', unread: true },
    { id: 3, message: 'Profile viewed by casting director', time: '2 hours ago', unread: false }
  ];

  const messages = [
    { id: 1, sender: 'Stellar Productions', message: 'We would like to schedule an interview', time: '10 min ago', unread: true },
    { id: 2, sender: 'Elite Fashion', message: 'Thank you for your application', time: '1 hour ago', unread: false }
  ];

  const featuredAuditions = [
    {
      id: 1,
      title: 'Kantara 3',
      company: 'Pix Rock Entertainment',
      type: 'Acting',
      location: 'Chennai, Tamil Nadu',
      deadline: '20-Mar-2025',
      compensation: '$5,000 - $15,000',
      image: 'https://readdy.ai/api/search-image?query=Professional%20film%20set%20with%20director%20and%20actors%2C%20cinematic%20lighting%2C%20movie%20production%20environment%2C%20cameras%20and%20equipment%2C%20dramatic%20scene%20setup%20with%20warm%20lighting%20and%20contemporary%20atmosphere&width=400&height=250&seq=aud001&orientation=landscape',
      description: 'Lead actor needed for upcoming movie sequel. Must have experience in action and emotional scenes.',
      mediaType: 'Movie',
      language: 'Tamil',
      gender: 'Male',
      ageRange: '18-30',
      experience: 'Intermediate',
      auditionDate: '20-Mar-2025',
      auditionLocation: 'No.12, Mount Road, Chennai',
      privacyType: 'public'
    },
    {
      id: 2,
      title: 'Fashion Week Model',
      company: 'Elite Fashion Agency',
      type: 'Modeling',
      location: 'New York, NY',
      deadline: '2024-02-20',
      compensation: '$2,000 - $8,000',
      image: 'https://readdy.ai/api/search-image?query=Fashion%20runway%20show%20with%20professional%20models%2C%20bright%20stage%20lighting%2C%20elegant%20fashion%20week%20atmosphere%2C%20contemporary%20fashion%20industry%20setting%20with%20clean%20minimalist%20design&width=400&height=250&seq=aud002&orientation=landscape',
      description: 'High-fashion runway models needed for upcoming Fashion Week shows.',
      mediaType: 'Fashion Show',
      language: 'English',
      gender: 'Female',
      ageRange: '18-28',
      experience: 'Professional',
      auditionDate: 'February 25, 2024',
      auditionLocation: 'Fashion District Studio, 789 7th Avenue, New York, NY',
      privacyType: 'live'
    },
    {
      id: 3,
      title: 'Tech Brand Commercial',
      company: 'VoiceCraft Productions',
      type: 'Voice Acting',
      location: 'Remote',
      deadline: '2024-02-10',
      compensation: '$3,000 - $10,000',
      image: 'https://readdy.ai/api/search-image?query=Professional%20voice%20recording%20studio%20with%20high-end%20microphone%2C%20soundproof%20booth%2C%20audio%20equipment%2C%20warm%20lighting%2C%20modern%20recording%20setup%20for%20voice%20acting%20and%20commercial%20work&width=400&height=250&seq=aud003&orientation=landscape',
      description: 'National commercial campaign seeking distinctive voice talent.',
      mediaType: 'Commercial',
      language: 'English',
      gender: 'Any',
      ageRange: '25-45',
      experience: 'Professional',
      auditionDate: 'February 12, 2024',
      auditionLocation: 'Remote audition via online platform',
      privacyType: 'private'
    },
    {
      id: 4,
      title: 'Midnight Dreams',
      company: 'Broadway Productions Inc.',
      type: 'Music',
      location: 'New York, NY',
      deadline: '2024-02-25',
      compensation: '$1,500 - $3,000/week',
      image: 'https://readdy.ai/api/search-image?query=Broadway%20theater%20stage%20with%20musical%20performers%2C%20dramatic%20stage%20lighting%2C%20theater%20auditorium%2C%20musical%20production%20environment%20with%20warm%20spotlights%20and%20elegant%20theater%20atmosphere&width=400&height=250&seq=aud004&orientation=landscape',
      description: 'Ensemble performers needed for new Broadway musical production.',
      mediaType: 'Musical Theater',
      language: 'English',
      gender: 'Any',
      ageRange: '20-35',
      experience: 'Professional',
      auditionDate: 'March 1, 2024',
      auditionLocation: 'Shubert Theatre, 225 W 44th St, New York, NY',
      privacyType: 'public'
    },
    {
      id: 5,
      title: 'Southern Secrets',
      company: 'Netflix Originals',
      type: 'Acting',
      location: 'Atlanta, GA',
      deadline: '2024-02-18',
      compensation: '$15,000 - $25,000 per episode',
      image: 'https://readdy.ai/api/search-image?query=Television%20production%20set%20with%20professional%20cameras%2C%20lighting%20equipment%2C%20TV%20series%20filming%20environment%2C%20modern%20studio%20setup%20with%20dramatic%20lighting%20and%20contemporary%20atmosphere&width=400&height=250&seq=aud005&orientation=landscape',
      description: 'Seeking actors for regular roles in new Netflix drama series.',
      mediaType: 'TV Series',
      language: 'English',
      gender: 'Any',
      ageRange: '20-40',
      experience: 'Professional',
      auditionDate: 'February 22, 2024',
      auditionLocation: 'Pinewood Studios, 461 Sandy Creek Rd, Fayetteville, GA',
      privacyType: 'private'
    },
    {
      id: 6,
      title: 'Lifestyle Brand Campaign',
      company: 'Lifestyle Media Group',
      type: 'Modeling',
      location: 'Chicago, IL',
      deadline: '2024-02-12',
      compensation: '$1,000 - $3,000',
      image: 'https://readdy.ai/api/search-image?query=Commercial%20photography%20studio%20with%20professional%20lighting%20setup%2C%20lifestyle%20brand%20photoshoot%20environment%2C%20clean%20modern%20studio%20with%20natural%20lighting%20and%20contemporary%20commercial%20atmosphere&width=400&height=250&seq=aud006&orientation=landscape',
      description: 'Print models needed for lifestyle brand commercial campaign.',
      mediaType: 'Commercial Photography',
      language: 'English',
      gender: 'Any',
      ageRange: 'All ages',
      experience: 'Beginner to Professional',
      auditionDate: 'February 15, 2024',
      auditionLocation: 'Studio Chicago, 1520 N Fremont St, Chicago, IL',
      privacyType: 'live'
    }
  ];

  // Initialize comment counts
  const initializeCommentCounts = () => {
    const counts: {[key: number]: number} = {};
    featuredAuditions.forEach(audition => {
      counts[audition.id] = Math.floor(Math.random() * 50) + 5; // Random comment count between 5-55
    });
    return counts;
  };

  const [commentCounts, setCommentCounts] = useState(initializeCommentCounts());

  const handleLike = (auditionId: number) => {
    setLikedAuditions(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(auditionId)) {
        newLiked.delete(auditionId);
      } else {
        newLiked.add(auditionId);
      }
      return newLiked;
    });
  };

  const handleShare = (audition: any) => {
    if (navigator.share) {
      navigator.share({
        title: audition.title,
        text: `Check out this ${audition.type} audition: ${audition.title}`,
        url: window.location.origin + `/audition/${audition.id}`
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.origin + `/audition/${audition.id}`);
      alert('Audition link copied to clipboard!');
    }
  };

  const handleComment = (auditionId: number) => {
    setCommentCounts(prev => ({
      ...prev,
      [auditionId]: prev[auditionId] + 1
    }));
    // In a real app, this would open a comment modal or navigate to comments section
    alert('Comment feature coming soon!');
  };

  const filteredAuditions = featuredAuditions.filter(audition => {
    return (
      (selectedCategory === 'all' || audition.type.toLowerCase().includes(selectedCategory)) &&
      (selectedMediaType === 'all' || audition.mediaType.toLowerCase().includes(selectedMediaType.toLowerCase())) &&
      (selectedLanguage === 'all' || audition.language === selectedLanguage) &&
      (selectedGender === 'all' || audition.gender === selectedGender || audition.gender === 'Any') &&
      (selectedAgeRange === 'all' || audition.ageRange === selectedAgeRange) &&
      (selectedLocation === 'all' || audition.location.includes(selectedLocation)) &&
      (selectedExperience === 'all' || audition.experience === selectedExperience) &&
      (selectedPrivacyType === 'all' || audition.privacyType === selectedPrivacyType)
    );
  });

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedMediaType('all');
    setSelectedLanguage('all');
    setSelectedGender('all');
    setSelectedAgeRange('all');
    setSelectedLocation('all');
    setSelectedExperience('all');
    setSelectedPrivacyType('all');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => navigate('/dashboard-selection')}
                className="cursor-pointer"
              >
               <img 
                  src="https://static.readdy.ai/image/f9554bb0a127440936ab2d922523a178/fc2d4d4044f45bd51bc816181006ac61.png"
                  alt="Media Audition"
                  className="h-10"
                />
              </button>
            </div>

           

            {/* Desktop Right Side Icons */}
            <div className="hidden md:flex items-center space-x-4">
               <button 
                onClick={() => navigate('/dashboard-selection')}
                className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Home
              </button>
                 <button 
                onClick={() => navigate('/artists')}
                className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Find Artists
              </button>
               <button 
                onClick={() => navigate('/shots')}
                className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
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
            <div className="md:hidden">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="text-gray-600 hover:text-teal-600 p-2 cursor-pointer"
              >
                <i className={`${showMobileMenu ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="space-y-2">
                <button 
                  onClick={() => {
                    navigate('/artists');
                    setShowMobileMenu(false);
                  }}
                  className="w-full text-left px-4 py-3 text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-lg cursor-pointer"
                >
                  Find Artists
                </button>
                <button 
                  onClick={() => {
                    navigate('/shots');
                    setShowMobileMenu(false);
                  }}
                  className="w-full text-left px-4 py-3 text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-lg cursor-pointer"
                >
                  Shots
                </button>
                
                {/* Mobile Profile Section */}
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="flex items-center px-4 py-3 mb-2">
                    <img 
                      src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20young%20artist%20with%20warm%20smile%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20makeup%20and%20styling%2C%20contemporary%20portrait%20photography%20style&width=40&height=40&seq=profile001&orientation=squarish"
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">Sarah Mitchell</p>
                      <p className="text-xs text-gray-500">sarah.mitchell@email.com</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => {
                      navigate('/artist/1');
                      setShowMobileMenu(false);
                    }}
                    className="w-full text-left px-4 py-3 text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center"
                  >
                    <i className="ri-user-line mr-3 w-5 h-5 flex items-center justify-center"></i>
                    View Profile
                  </button>
                  
                  <button 
                    onClick={() => {
                      setShowMobileMenu(false);
                      setShowNotifications(!showNotifications);
                    }}
                    className="w-full text-left px-4 py-3 text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <i className="ri-notification-3-line mr-3 w-5 h-5 flex items-center justify-center"></i>
                      Notifications
                    </div>
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                  
                  <button 
                    onClick={() => {
                      setShowMobileMenu(false);
                      setShowMessages(!showMessages);
                    }}
                    className="w-full text-left px-4 py-3 text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-lg cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <i className="ri-message-3-line mr-3 w-5 h-5 flex items-center justify-center"></i>
                      Messages
                    </div>
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                  
                  <button 
                    onClick={() => {
                      setShowMobileMenu(false);
                      navigate('/');
                    }}
                    className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg cursor-pointer flex items-center"
                  >
                    <i className="ri-logout-box-line mr-3 w-5 h-5 flex items-center justify-center"></i>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Next Audition</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exciting opportunities in acting, modeling, voice acting, and music
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Toggle Button */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Filter Auditions</h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors cursor-pointer"
            >
              <i className={`ri-filter-line mr-2 w-4 h-4 flex items-center justify-center`}></i>
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {/* Filter Grid */}
          {showFilters && (
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="all">All</option>
                    <option value="acting">Acting</option>
                    <option value="modeling">Modeling</option>
                    <option value="voice">Voice Acting</option>
                    <option value="music">Music</option>
                  </select>
                </div>

                {/* Media Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Media Type</label>
                  <select
                    value={selectedMediaType}
                    onChange={(e) => setSelectedMediaType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="all">All</option>
                    <option value="movie">Movie</option>
                    <option value="tv series">TV Series</option>
                    <option value="commercial">Commercial</option>
                    <option value="fashion show">Fashion Show</option>
                    <option value="musical theater">Musical Theater</option>
                    <option value="commercial photography">Commercial Photography</option>
                  </select>
                </div>

                {/* Language Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="all">All</option>
                    <option value="English">English</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Malayalam">Malayalam</option>
                    <option value="Kannada">Kannada</option>
                  </select>
                </div>

                {/* Gender Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    value={selectedGender}
                    onChange={(e) => setSelectedGender(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="all">Any</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                {/* Age Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age Range</label>
                  <select
                    value={selectedAgeRange}
                    onChange={(e) => setSelectedAgeRange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="all">All</option>
                    <option value="18-25">18-25</option>
                    <option value="18-28">18-28</option>
                    <option value="18-30">18-30</option>
                    <option value="20-30">20-30</option>
                    <option value="20-35">20-35</option>
                    <option value="20-40">20-40</option>
                    <option value="25-35">25-35</option>
                    <option value="25-45">25-45</option>
                    <option value="30-40">30-40</option>
                  </select>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="all">All</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="New York">New York</option>
                    <option value="Atlanta">Atlanta</option>
                    <option value="Chicago">Chicago</option>
                  </select>
                </div>

                {/* Experience Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                  <select
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="all">All</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Professional">Professional</option>
                  </select>
                </div>

                {/* Privacy Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Audition Privacy</label>
                  <select
                    value={selectedPrivacyType}
                    onChange={(e) => setSelectedPrivacyType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="all">All Types</option>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                    <option value="live">Live Stream</option>
                  </select>
                </div>
              </div>

              {/* Filter Actions */}
              <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  Showing {filteredAuditions.length} of {featuredAuditions.length} auditions
                </div>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all' 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Auditions
            </button>
            <button
              onClick={() => setSelectedCategory('acting')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'acting' 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Acting
            </button>
            <button
              onClick={() => setSelectedCategory('modeling')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'modeling' 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Modeling
            </button>
            <button
              onClick={() => setSelectedCategory('voice')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'voice' 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Voice Acting
            </button>
            <button
              onClick={() => setSelectedCategory('music')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'music' 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Music
            </button>
          </div>
        </div>
      </section>

      {/* Auditions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAuditions.length === 0 ? (
            <div className="text-center py-16">
              <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No auditions found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters to see more results</p>
              <button
                onClick={resetFilters}
                className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAuditions.map((audition) => (
                <div key={audition.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 bg-cover bg-center bg-top" style={{ backgroundImage: `url(${audition.image})` }}>
                    {/* Privacy Type Badge */}
                    <div className="absolute top-3 left-3">
                      {audition.privacyType === 'private' && (
                        <span className="inline-flex items-center bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded-full">
                          <i className="ri-lock-line mr-1 w-3 h-3 flex items-center justify-center"></i>
                          Private
                        </span>
                      )}
                      {audition.privacyType === 'public' && (
                        <span className="inline-flex items-center bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                          <i className="ri-global-line mr-1 w-3 h-3 flex items-center justify-center"></i>
                          Public
                        </span>
                      )}
                      {audition.privacyType === 'live' && (
                        <span className="inline-flex items-center bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-full animate-pulse">
                          <i className="ri-live-line mr-1 w-3 h-3 flex items-center justify-center"></i>
                          Live
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
                        {audition.type}
                      </span>
                      <span className="inline-block bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded-full">
                        Due: {audition.deadline}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{audition.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{audition.company}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <i className="ri-map-pin-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                        {audition.location}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <i className="ri-calendar-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                        Audition: {audition.auditionDate}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <i className="ri-money-dollar-circle-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                        {audition.compensation}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed line-clamp-2">{audition.description}</p>
                    
                    {/* Social Interaction Buttons */}
                    <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => handleLike(audition.id)}
                          className={`flex items-center space-x-1 text-sm transition-colors cursor-pointer ${
                            likedAuditions.has(audition.id) 
                              ? 'text-red-600' 
                              : 'text-gray-500 hover:text-red-600'
                          }`}
                        >
                          <i className={`${likedAuditions.has(audition.id) ? 'ri-heart-fill' : 'ri-heart-line'} w-4 h-4 flex items-center justify-center`}></i>
                          <span>{likedAuditions.has(audition.id) ? 'Liked' : 'Like'}</span>
                        </button>
                        
                        <button
                          onClick={() => handleComment(audition.id)}
                          className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-600 transition-colors cursor-pointer"
                        >
                          <i className="ri-chat-3-line w-4 h-4 flex items-center justify-center"></i>
                          <span>{commentCounts[audition.id] || 0}</span>
                        </button>
                        
                        <button
                          onClick={() => handleShare(audition)}
                          className="flex items-center space-x-1 text-sm text-gray-500 hover:text-green-600 transition-colors cursor-pointer"
                        >
                          <i className="ri-share-line w-4 h-4 flex items-center justify-center"></i>
                          <span>Share</span>
                        </button>
                      </div>
                      
                      <button
                        onClick={() => navigate(`/audition/${audition.id}`)}
                        className="text-teal-600 hover:text-teal-700 text-sm font-medium cursor-pointer"
                      >
                        View Details →
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => navigate(`/audition/${audition.id}`)}
                      className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

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

      {/* Register Form Modal */}
      {showRegisterForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Join Media Audition</h3>
                <button 
                  onClick={() => setShowRegisterForm(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer w-6 h-6 flex items-center justify-center"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              
              {/* Google Register Button */}
              <button 
                onClick={() => {
                  alert('Google registration functionality will be implemented with authentication system.');
                }}
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors mb-6 cursor-pointer"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign up with Google
              </button>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or create account with email</span>
                </div>
              </div>
              
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                alert('Registration functionality will be implemented with authentication system.');
                setShowRegisterForm(false);
              }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input 
                    type="password" 
                    name="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    placeholder="Create a password"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <input 
                    type="password" 
                    name="confirmPassword"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Type</label>
                  <select 
                    name="accountType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm pr-8"
                    required
                  >
                    <option value="">Select account type</option>
                    <option value="performer">Performer/Talent</option>
                    <option value="casting-director">Casting Director</option>
                    <option value="agent">Agent/Manager</option>
                    <option value="producer">Producer</option>
                  </select>
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    name="terms"
                    className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 mt-1" 
                    required
                  />
                  <label className="ml-2 text-sm text-gray-600">
                    I agree to the <a href="#" className="text-teal-600 hover:text-teal-700 cursor-pointer">Terms of Service</a> and <a href="#" className="text-teal-600 hover:text-teal-700 cursor-pointer">Privacy Policy</a>
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    name="newsletter"
                    className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 mt-1" 
                  />
                  <label className="ml-2 text-sm text-gray-600">
                    Send me updates about new audition opportunities and industry news
                  </label>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Create Account
                </button>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account? 
                    <button
                      type="button"
                      onClick={() => {
                        setShowRegisterForm(false);
                        setShowLoginForm(true);
                      }}
                      className="text-teal-600 hover:text-teal-700 ml-1 cursor-pointer"
                    >
                      Sign in here
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Login Form Modal */}
      {showLoginForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Login to Media Audition</h3>
                <button 
                  onClick={() => setShowLoginForm(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer w-6 h-6 flex items-center justify-center"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              
              {/* Google Login Button */}
              <button 
                onClick={() => {
                  alert('Google login functionality will be implemented with authentication system.');
                }}
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors mb-6 cursor-pointer"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                </div>
              </div>
              
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                setShowLoginForm(false);
                navigate('/dashboard-selection');
              }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input 
                    type="password" 
                    name="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-teal-600 hover:text-teal-700 cursor-pointer"
                  >
                    Forgot password?
                  </button>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Sign In
                </button>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account? 
                    <button
                      type="button"
                      onClick={() => {
                        setShowLoginForm(false);
                        setShowRegisterForm(true);
                      }}
                      className="text-teal-600 hover:text-teal-700 ml-1 cursor-pointer"
                    >
                      Sign up here
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

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
    </div>
  );
}
