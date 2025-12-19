import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Artists() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedAgeRange, setSelectedAgeRange] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [likedArtists, setLikedArtists] = useState<Set<number>>(new Set());
  const [followedArtists, setFollowedArtists] = useState<Set<number>>(new Set());
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

  const featuredArtists = [
    {
      id: 1,
      name: 'Priya Sharma',
      category: 'Acting',
      gender: 'Female',
      age: 28,
      ageRange: '25-35',
      location: 'Mumbai, Maharashtra',
      experience: 'Professional',
      languages: ['Hindi', 'English', 'Marathi'],
      skills: ['Method Acting', 'Classical Dance', 'Singing'],
      profileImage: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20actress%20headshot%2C%20confident%20expression%2C%20studio%20lighting%2C%20contemporary%20portrait%20photography%20with%20clean%20background%20and%20elegant%20styling&width=300&height=400&seq=art001&orientation=portrait',
      coverImage: 'https://readdy.ai/api/search-image?query=Bollywood%20film%20set%20with%20professional%20actress%2C%20cinematic%20lighting%2C%20movie%20production%20environment%20with%20elegant%20atmosphere%20and%20contemporary%20styling&width=800&height=400&seq=art001c&orientation=landscape',
      bio: 'Versatile actress with 8 years of experience in Bollywood and regional cinema.',
      height: '5\'6"',
      weight: '55 kg',
      eyeColor: 'Brown',
      hairColor: 'Black',
      recentProjects: ['Zindagi Na Milegi Dobara 2', 'Mumbai Diaries', 'Arya'],
      awards: ['Best Actress - Mumbai Film Festival 2023', 'Rising Star Award 2022'],
      education: 'National School of Drama, New Delhi',
      specialization: 'Drama, Romance, Thriller',
      contactEmail: 'priya.sharma@talent.com',
      contactPhone: '+91 9876543210',
      socialMedia: {
        instagram: '@priyasharma_official',
        twitter: '@priyasharma',
        facebook: 'Priya Sharma Official'
      }
    },
    {
      id: 2,
      name: 'Arjun Reddy',
      category: 'Acting',
      gender: 'Male',
      age: 32,
      ageRange: '30-40',
      location: 'Hyderabad, Telangana',
      experience: 'Professional',
      languages: ['Telugu', 'Tamil', 'Hindi', 'English'],
      skills: ['Action Sequences', 'Emotional Acting', 'Martial Arts'],
      profileImage: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20actor%20headshot%2C%20strong%20confident%20expression%2C%20studio%20lighting%2C%20contemporary%20portrait%20photography%20with%20clean%20background%20and%20masculine%20styling&width=300&height=400&seq=art002&orientation=portrait',
      coverImage: 'https://readdy.ai/api/search-image?query=Tollywood%20film%20set%20with%20professional%20male%20actor%2C%20dramatic%20lighting%2C%20action%20movie%20production%20environment%20with%20intense%20atmosphere&width=800&height=400&seq=art002c&orientation=landscape',
      bio: 'Dynamic actor known for intense performances in Telugu and Tamil cinema.',
      height: '6\'0"',
      weight: '75 kg',
      eyeColor: 'Dark Brown',
      hairColor: 'Black',
      recentProjects: ['Pushpa 3', 'RRR 2', 'Baahubali Chronicles'],
      awards: ['Best Actor - Filmfare South 2023', 'Critics Choice Award 2022'],
      education: 'Film and Television Institute of India',
      specialization: 'Action, Drama, Historical',
      contactEmail: 'arjun.reddy@talent.com',
      contactPhone: '+91 9876543211',
      socialMedia: {
        instagram: '@arjunreddy_official',
        twitter: '@arjunreddy',
        facebook: 'Arjun Reddy Official'
      }
    },
    {
      id: 3,
      name: 'Sophia Williams',
      category: 'Modeling',
      gender: 'Female',
      age: 24,
      ageRange: '20-30',
      location: 'Delhi, India',
      experience: 'Professional',
      languages: ['English', 'Hindi', 'French'],
      skills: ['Runway Modeling', 'Fashion Photography', 'Commercial Modeling'],
      profileImage: 'https://readdy.ai/api/search-image?query=Professional%20fashion%20model%20headshot%2C%20elegant%20expression%2C%20high-end%20studio%20lighting%2C%20contemporary%20portrait%20photography%20with%20clean%20background%20and%20sophisticated%20styling&width=300&height=400&seq=art003&orientation=portrait',
      coverImage: 'https://readdy.ai/api/search-image?query=High%20fashion%20runway%20show%20with%20professional%20model%2C%20bright%20stage%20lighting%2C%20elegant%20fashion%20week%20atmosphere%20with%20contemporary%20styling&width=800&height=400&seq=art003c&orientation=landscape',
      bio: 'International fashion model with experience in Paris, Milan, and New York Fashion Weeks.',
      height: '5\'9"',
      weight: '58 kg',
      eyeColor: 'Green',
      hairColor: 'Blonde',
      recentProjects: ['Lakme Fashion Week 2024', 'Vogue India Cover', 'Louis Vuitton Campaign'],
      awards: ['Model of the Year - Fashion Awards 2023', 'Rising Star - Elle Awards 2022'],
      education: 'London College of Fashion',
      specialization: 'High Fashion, Commercial, Editorial',
      contactEmail: 'sophia.williams@models.com',
      contactPhone: '+91 9876543212',
      socialMedia: {
        instagram: '@sophiawilliams_model',
        twitter: '@sophiawilliams',
        facebook: 'Sophia Williams Model'
      }
    },
    {
      id: 4,
      name: 'Rajesh Kumar',
      category: 'Voice Acting',
      gender: 'Male',
      age: 35,
      ageRange: '30-40',
      location: 'Chennai, Tamil Nadu',
      experience: 'Professional',
      languages: ['Tamil', 'Telugu', 'Malayalam', 'Hindi', 'English'],
      skills: ['Character Voices', 'Narration', 'Commercial Voice Over'],
      profileImage: 'https://readdy.ai/api/search-image?query=Professional%20voice%20actor%20headshot%2C%20warm%20confident%20expression%2C%20studio%20lighting%2C%20contemporary%20portrait%20photography%20with%20clean%20background%20and%20professional%20styling&width=300&height=400&seq=art004&orientation=portrait',
      coverImage: 'https://readdy.ai/api/search-image?query=Professional%20voice%20recording%20studio%20with%20high-end%20microphone%2C%20soundproof%20booth%2C%20audio%20equipment%2C%20warm%20lighting%20and%20modern%20recording%20setup&width=800&height=400&seq=art004c&orientation=landscape',
      bio: 'Versatile voice artist with 12 years of experience in dubbing, commercials, and audiobooks.',
      height: '5\'8"',
      weight: '70 kg',
      eyeColor: 'Brown',
      hairColor: 'Black',
      recentProjects: ['Marvel Tamil Dubbing', 'Hotstar Originals', 'Audible Audiobooks'],
      awards: ['Best Voice Artist - Tamil Nadu State Awards 2023', 'Excellence in Dubbing 2022'],
      education: 'A.R. Rahman Music Academy',
      specialization: 'Character Dubbing, Commercial VO, Narration',
      contactEmail: 'rajesh.kumar@voice.com',
      contactPhone: '+91 9876543213',
      socialMedia: {
        instagram: '@rajeshkumar_voice',
        twitter: '@rajeshkumar',
        facebook: 'Rajesh Kumar Voice Artist'
      }
    },
    {
      id: 5,
      name: 'Meera Nair',
      category: 'Music',
      gender: 'Female',
      age: 26,
      ageRange: '25-35',
      location: 'Kochi, Kerala',
      experience: 'Professional',
      languages: ['Malayalam', 'Tamil', 'Hindi', 'English'],
      skills: ['Classical Singing', 'Playback Singing', 'Music Composition'],
      profileImage: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20singer%20headshot%2C%20melodious%20expression%2C%20studio%20lighting%2C%20contemporary%20portrait%20photography%20with%20clean%20background%20and%20artistic%20styling&width=300&height=400&seq=art005&orientation=portrait',
      coverImage: 'https://readdy.ai/api/search-image?query=Professional%20music%20recording%20studio%20with%20female%20singer%2C%20warm%20lighting%2C%20musical%20instruments%2C%20contemporary%20recording%20environment%20with%20elegant%20atmosphere&width=800&height=400&seq=art005c&orientation=landscape',
      bio: 'Acclaimed playback singer and music composer with a melodious voice that touches hearts.',
      height: '5\'4"',
      weight: '52 kg',
      eyeColor: 'Dark Brown',
      hairColor: 'Black',
      recentProjects: ['Kumbakonam Gopals Soundtrack', 'Malayalam Film Songs', 'Independent Albums'],
      awards: ['Best Female Playback Singer - Kerala State Awards 2023', 'Emerging Artist Award 2022'],
      education: 'Kerala Kalamandalam',
      specialization: 'Classical, Playback, Folk Music',
      contactEmail: 'meera.nair@music.com',
      contactPhone: '+91 9876543214',
      socialMedia: {
        instagram: '@meeranair_music',
        twitter: '@meeranair',
        facebook: 'Meera Nair Music'
      }
    },
    {
      id: 6,
      name: 'David Thompson',
      category: 'Modeling',
      gender: 'Male',
      age: 29,
      ageRange: '25-35',
      location: 'Bangalore, Karnataka',
      experience: 'Professional',
      languages: ['English', 'Hindi', 'Kannada'],
      skills: ['Fashion Modeling', 'Fitness Modeling', 'Commercial Photography'],
      profileImage: 'https://readdy.ai/api/search-image?query=Professional%20male%20fashion%20model%20headshot%2C%20confident%20expression%2C%20studio%20lighting%2C%20contemporary%20portrait%20photography%20with%20clean%20background%20and%20stylish%20appearance&width=300&height=400&seq=art006&orientation=portrait',
      coverImage: 'https://readdy.ai/api/search-image?query=Fashion%20photoshoot%20with%20professional%20male%20model%2C%20contemporary%20lighting%2C%20commercial%20photography%20environment%20with%20modern%20styling&width=800&height=400&seq=art006c&orientation=landscape',
      bio: 'International male model specializing in fashion and fitness campaigns.',
      height: '6\'2"',
      weight: '80 kg',
      eyeColor: 'Blue',
      hairColor: 'Brown',
      recentProjects: ['GQ India Cover', 'Nike Campaign', 'Myntra Fashion Week'],
      awards: ['Male Model of the Year 2023', 'Fitness Icon Award 2022'],
      education: 'International Academy of Design',
      specialization: 'Fashion, Fitness, Commercial',
      contactEmail: 'david.thompson@models.com',
      contactPhone: '+91 9876543215',
      socialMedia: {
        instagram: '@davidthompson_model',
        twitter: '@davidthompson',
        facebook: 'David Thompson Model'
      }
    }
  ];

  // Initialize comment counts
  const initializeCommentCounts = () => {
    const counts: {[key: number]: number} = {};
    featuredArtists.forEach(artist => {
      counts[artist.id] = Math.floor(Math.random() * 100) + 10; // Random comment count between 10-110
    });
    return counts;
  };

  const [commentCounts, setCommentCounts] = useState(initializeCommentCounts());

  const handleLike = (artistId: number) => {
    setLikedArtists(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(artistId)) {
        newLiked.delete(artistId);
      } else {
        newLiked.add(artistId);
      }
      return newLiked;
    });
  };

  const handleFollow = (artistId: number) => {
    setFollowedArtists(prev => {
      const newFollowed = new Set(prev);
      if (newFollowed.has(artistId)) {
        newFollowed.delete(artistId);
      } else {
        newFollowed.add(artistId);
      }
      return newFollowed;
    });
  };

  const handleShare = (artist: any) => {
    if (navigator.share) {
      navigator.share({
        title: artist.name,
        text: `Check out ${artist.name}'s profile - ${artist.category} artist`,
        url: window.location.origin + `/artist/${artist.id}`
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.origin + `/artist/${artist.id}`);
      alert('Artist profile link copied to clipboard!');
    }
  };

  const handleComment = (artistId: number) => {
    setCommentCounts(prev => ({
      ...prev,
      [artistId]: (prev[artistId] || 0) + 1
    }));
    // In a real app, this would open a comment modal or navigate to comments section
    alert('Comment feature coming soon!');
  };

  const handleCheckboxChange = (value: string, selectedArray: string[], setFunction: (arr: string[]) => void) => {
    if (selectedArray.includes(value)) {
      setFunction(selectedArray.filter(item => item !== value));
    } else {
      setFunction([...selectedArray, value]);
    }
  };

  const filteredArtists = featuredArtists.filter(artist => {
    return (
      (selectedCategory === 'all' || artist.category.toLowerCase().includes(selectedCategory)) &&
      (selectedGender.length === 0 || selectedGender.includes(artist.gender)) &&
      (selectedAgeRange.length === 0 || selectedAgeRange.includes(artist.ageRange)) &&
      (selectedLocation.length === 0 || selectedLocation.some(loc => artist.location.includes(loc))) &&
      (selectedExperience.length === 0 || selectedExperience.includes(artist.experience)) &&
      (selectedLanguage.length === 0 || selectedLanguage.some(lang => artist.languages.includes(lang)))
    );
  });

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedGender([]);
    setSelectedAgeRange([]);
    setSelectedLocation([]);
    setSelectedExperience([]);
    setSelectedLanguage([]);
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
                onClick={() => navigate('/auditions')}
                className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Find Auditions
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
                    navigate('/auditions');
                    setShowMobileMenu(false);
                  }}
                  className="w-full text-left px-4 py-3 text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-lg cursor-pointer"
                >
                  Find Auditions
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Talented Artists</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exceptional talent across acting, modeling, voice acting, and music
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Toggle Button */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Filter Artists</h2>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

                {/* Gender Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Gender</label>
                  <div className="space-y-2">
                    {['Male', 'Female'].map((gender) => (
                      <label key={gender} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedGender.includes(gender)}
                          onChange={() => handleCheckboxChange(gender, selectedGender, setSelectedGender)}
                          className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer"
                        />
                        <span className="ml-2 text-sm text-gray-700">{gender}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Age Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Age Range</label>
                  <div className="space-y-2">
                    {['18-25', '20-30', '25-35', '30-40', '35-45'].map((range) => (
                      <label key={range} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedAgeRange.includes(range)}
                          onChange={() => handleCheckboxChange(range, selectedAgeRange, setSelectedAgeRange)}
                          className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer"
                        />
                        <span className="ml-2 text-sm text-gray-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Location</label>
                  <div className="space-y-2">
                    {['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kochi'].map((location) => (
                      <label key={location} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedLocation.includes(location)}
                          onChange={() => handleCheckboxChange(location, selectedLocation, setSelectedLocation)}
                          className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer"
                        />
                        <span className="ml-2 text-sm text-gray-700">{location}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Experience Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Experience</label>
                  <div className="space-y-2">
                    {['Beginner', 'Intermediate', 'Professional'].map((exp) => (
                      <label key={exp} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedExperience.includes(exp)}
                          onChange={() => handleCheckboxChange(exp, selectedExperience, setSelectedExperience)}
                          className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer"
                        />
                        <span className="ml-2 text-sm text-gray-700">{exp}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Language Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Language</label>
                  <div className="space-y-2">
                    {['English', 'Hindi', 'Tamil', 'Telugu', 'Malayalam', 'Kannada', 'Marathi'].map((lang) => (
                      <label key={lang} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedLanguage.includes(lang)}
                          onChange={() => handleCheckboxChange(lang, selectedLanguage, setSelectedLanguage)}
                          className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer"
                        />
                        <span className="ml-2 text-sm text-gray-700">{lang}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Filter Actions */}
              <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  Showing {filteredArtists.length} of {featuredArtists.length} artists
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
              All Artists
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

      {/* Artists Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArtists.length === 0 ? (
            <div className="text-center py-16">
              <i className="ri-user-search-line text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No artists found</h3>
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
              {filteredArtists.map((artist) => (
                <div key={artist.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="w-full h-96 bg-cover bg-center bg-top" style={{ backgroundImage: `url(${artist.profileImage})` }}></div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
                        {artist.category}
                      </span>
                      <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                        {artist.experience}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{artist.name}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <i className="ri-map-pin-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                        {artist.location}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <i className="ri-user-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                        {artist.gender} • {artist.age} years
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <i className="ri-translate-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                        {artist.languages.slice(0, 2).join(', ')}
                        {artist.languages.length > 2 && ` +${artist.languages.length - 2} more`}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed line-clamp-2">{artist.bio}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {artist.skills.slice(0, 3).map((skill, index) => (
                          <span key={index} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Social Interaction Buttons */}
                    <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => handleLike(artist.id)}
                          className={`flex items-center space-x-1 text-sm transition-colors cursor-pointer ${
                            likedArtists.has(artist.id) 
                              ? 'text-red-600' 
                              : 'text-gray-500 hover:text-red-600'
                          }`}
                        >
                          <i className={`${likedArtists.has(artist.id) ? 'ri-heart-fill' : 'ri-heart-line'} w-4 h-4 flex items-center justify-center`}></i>
                          <span>{likedArtists.has(artist.id) ? 'Liked' : 'Like'}</span>
                        </button>
                        
                        <button
                          onClick={() => handleComment(artist.id)}
                          className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-600 transition-colors cursor-pointer"
                        >
                          <i className="ri-chat-3-line w-4 h-4 flex items-center justify-center"></i>
                          <span>{commentCounts[artist.id] || Math.floor(Math.random() * 100) + 10}</span>
                        </button>
                        
                        <button
                          onClick={() => handleShare(artist)}
                          className="flex items-center space-x-1 text-sm text-gray-500 hover:text-green-600 transition-colors cursor-pointer"
                        >
                          <i className="ri-share-line w-4 h-4 flex items-center justify-center"></i>
                          <span>Share</span>
                        </button>
                      </div>
                      
                      <button
                        onClick={() => handleFollow(artist.id)}
                        className={`text-sm font-medium transition-colors cursor-pointer ${
                          followedArtists.has(artist.id)
                            ? 'text-teal-600 hover:text-teal-700'
                            : 'text-gray-500 hover:text-teal-600'
                        }`}
                      >
                        {followedArtists.has(artist.id) ? 'Following' : 'Follow'}
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => navigate(`/artist/${artist.id}`)}
                      className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      View Profile
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
