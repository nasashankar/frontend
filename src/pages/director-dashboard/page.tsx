import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DirectorDashboard() {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCreateAuditionModal, setShowCreateAuditionModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [selectedArtistId, setSelectedArtistId] = useState<number | null>(null);
  const [artistNotes, setArtistNotes] = useState<Record<number, string>>({});
  const [showReviewApplications, setShowReviewApplications] = useState(false);
  const [showUpdateAudition, setShowUpdateAudition] = useState(false);
  const [selectedAudition, setSelectedAudition] = useState<any>(null);
  const [selectedApplications, setSelectedApplications] = useState<any[]>([]);

  const notifications = [
    { id: 1, message: 'New application received for Lead Role - Kantara 3', time: '5 minutes ago', unread: true },
    { id: 2, message: 'Audition deadline approaching for Supporting Actor', time: '1 hour ago', unread: true },
    { id: 3, message: 'Artist shortlisted for Voice Artist role', time: '2 hours ago', unread: false },
    { id: 4, message: 'New message from Priya Sharma', time: '3 hours ago', unread: false }
  ];

  const messages = [
    { id: 1, sender: 'Priya Sharma', message: 'Thank you for considering my application...', time: '10 minutes ago', unread: true },
    { id: 2, sender: 'Arjun Reddy', message: 'I would like to know more about the role...', time: '1 hour ago', unread: true },
    { id: 3, sender: 'Meera Nair', message: 'When will the audition results be announced?', time: '2 hours ago', unread: false }
  ];

  const myAuditions = [
    {
      id: 1,
      title: 'Lead Role - Kantara 3',
      project: 'Kantara 3',
      location: 'Bangalore, Karnataka',
      deadline: '2025-02-15',
      status: 'Active',
      applications: 45,
      auditionType: 'public',
      category: 'Acting',
      mediaType: 'Movie',
      roleName: 'Lead Actor',
      gender: 'Male',
      ageRange: '25-35',
      language: 'Kannada, English',
      skills: 'Action, Emotional Acting',
      experience: 'Professional',
      description: 'Looking for a talented actor for the lead role in Kantara 3',
      compensation: '$10,000 - $20,000'
    },
    {
      id: 2,
      title: 'Supporting Actor - Drama Series',
      project: 'Tamil Drama Series',
      location: 'Chennai, Tamil Nadu',
      deadline: '2025-02-20',
      status: 'Active',
      applications: 32,
      auditionType: 'private',
      category: 'Acting',
      mediaType: 'TV Series',
      roleName: 'Supporting Actor',
      gender: 'Any',
      ageRange: '30-45',
      language: 'Tamil, English',
      skills: 'Dramatic Acting',
      experience: 'Intermediate',
      description: 'Seeking experienced actor for supporting role',
      compensation: '$5,000 - $10,000'
    },
    {
      id: 3,
      title: 'Voice Artist - Animation',
      project: 'Animated Feature Film',
      location: 'Mumbai, Maharashtra',
      deadline: '2025-02-10',
      status: 'Review',
      applications: 28,
      auditionType: 'live',
      category: 'Voice Acting',
      mediaType: 'Movie',
      roleName: 'Voice Artist',
      gender: 'Female',
      ageRange: '25-40',
      language: 'Hindi, English',
      skills: 'Character Voices, Dubbing',
      experience: 'Professional',
      description: 'Looking for versatile voice artist for animated characters',
      compensation: '$8,000 - $15,000'
    }
  ];

  const [recentApplications, setRecentApplications] = useState([
    {
      id: 1,
      name: 'Sarah Mitchell',
      artistName: 'Sarah Mitchell',
      role: 'Lead Actress',
      audition: 'Romantic Drama Film',
      auditionTitle: 'Lead Role - Kantara 3',
      appliedDate: '2024-01-15',
      status: 'pending',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20young%20actress%20with%20warm%20smile%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20makeup%20and%20styling%2C%20contemporary%20portrait%20photography%20style&width=100&height=100&seq=app001&orientation=squarish',
      experience: '8 years',
      location: 'Mumbai',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Raj Kumar',
      artistName: 'Raj Kumar',
      role: 'Supporting Actor',
      audition: 'Action Thriller',
      auditionTitle: 'Supporting Actor - Drama Series',
      appliedDate: '2024-01-14',
      status: 'pending',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20young%20male%20actor%20with%20serious%20expression%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20grooming%2C%20contemporary%20portrait%20photography%20style&width=100&height=100&seq=app002&orientation=squarish',
      experience: '5 years',
      location: 'Delhi',
      rating: 4.6
    },
    {
      id: 3,
      name: 'Priya Sharma',
      artistName: 'Priya Sharma',
      role: 'Voice Artist',
      audition: 'Commercial Voice Over',
      auditionTitle: 'Voice Artist - Animation',
      appliedDate: '2024-01-13',
      status: 'pending',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20young%20female%20voice%20artist%20with%20friendly%20smile%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20makeup%2C%20contemporary%20portrait%20photography%20style&width=100&height=100&seq=app003&orientation=squarish',
      experience: '6 years',
      location: 'Bangalore',
      rating: 4.9
    }
  ]);

  const [allApplications, setAllApplications] = useState([
    {
      id: 1,
      auditionId: 1,
      auditionTitle: 'Lead Role - Kantara 3',
      artistName: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 9876543210',
      age: 25,
      location: 'Mumbai, Maharashtra',
      experience: 'Intermediate',
      appliedDate: '2025-01-20',
      status: 'New',
      rating: 4.8,
      coverLetter: 'I am very passionate about this role and have 5 years of experience in dramatic acting. I have worked in several regional films and am excited about this opportunity.',
      skills: 'Dancing, Singing, Martial Arts, Emotional Acting',
      languages: 'Tamil, English, Hindi',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20young%20actress%20with%20warm%20smile%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20makeup%20and%20styling%2C%20contemporary%20portrait%20photography%20style&width=100&height=100&seq=app001&orientation=squarish',
      portfolio: 'https://portfolio.example.com/priya',
      demoReel: 'https://demo.example.com/priya-reel'
    },
    {
      id: 2,
      auditionId: 1,
      auditionTitle: 'Lead Role - Kantara 3',
      artistName: 'Arjun Reddy',
      email: 'arjun.reddy@email.com',
      phone: '+91 9876543211',
      age: 28,
      location: 'Hyderabad, Telangana',
      experience: 'Professional',
      appliedDate: '2025-01-19',
      status: 'Reviewed',
      rating: 4.6,
      coverLetter: 'With over 8 years in the industry, I bring depth and authenticity to every role. I have experience in action sequences and emotional scenes.',
      skills: 'Martial Arts, Action Sequences, Method Acting',
      languages: 'Tamil, Telugu, English',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20male%20actor%2C%20warm%20expression%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20styling%2C%20contemporary%20portrait%20photography&width=100&height=100&seq=app002&orientation=squarish',
      portfolio: 'https://portfolio.example.com/arjun',
      demoReel: 'https://demo.example.com/arjun-reel'
    },
    {
      id: 3,
      auditionId: 3,
      auditionTitle: 'Voice Artist - Animation',
      artistName: 'Meera Nair',
      email: 'meera.nair@email.com',
      phone: '+91 9876543212',
      age: 32,
      location: 'Kochi, Kerala',
      experience: 'Professional',
      appliedDate: '2025-01-18',
      status: 'Shortlisted',
      rating: 4.9,
      coverLetter: 'I specialize in character voices and have worked on multiple animation projects. My voice range is versatile and I can create unique character personalities.',
      skills: 'Voice Acting, Character Voices, Dubbing, Singing',
      languages: 'English, Malayalam, Hindi, Tamil',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20female%20voice%20artist%2C%20warm%20expression%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20styling%2C%20contemporary%20portrait%20photography&width=100&height=100&seq=app003&orientation=squarish',
      portfolio: 'https://portfolio.example.com/meera',
      demoReel: 'https://demo.example.com/meera-reel'
    },
    {
      id: 4,
      auditionId: 2,
      auditionTitle: 'Supporting Actor - Drama Series',
      artistName: 'Rajesh Kumar',
      email: 'rajesh.kumar@email.com',
      phone: '+91 9876543213',
      age: 35,
      location: 'Chennai, Tamil Nadu',
      experience: 'Professional',
      appliedDate: '2025-01-17',
      status: 'New',
      rating: 4.7,
      coverLetter: 'I have extensive experience in television drama and can bring authenticity to complex characters. Looking forward to this opportunity.',
      skills: 'Dramatic Acting, Emotional Scenes, Character Development',
      languages: 'Tamil, English, Hindi',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20mature%20male%20actor%2C%20confident%20expression%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20styling%2C%20contemporary%20portrait%20photography&width=100&height=100&seq=app004&orientation=squarish',
      portfolio: 'https://portfolio.example.com/rajesh',
      demoReel: 'https://demo.example.com/rajesh-reel'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Review': return 'bg-yellow-100 text-yellow-800';
      case 'Closed': return 'bg-gray-100 text-gray-800';
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Reviewed': return 'bg-purple-100 text-purple-800';
      case 'Shortlisted': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleCreateAudition = () => {
    setShowCreateAuditionModal(true);
  };

  const handleReviewApplications = (audition: any) => {
    setSelectedAudition(audition);
    const apps = allApplications.filter(app => app.auditionId === audition.id);
    setSelectedApplications(apps);
    setShowReviewApplications(true);
  };

  const handleUpdateAudition = (audition: any) => {
    setSelectedAudition(audition);
    setShowUpdateAudition(true);
  };

  const handleApplicationAction = (applicationId: number, action: string) => {
    alert(`Application ${action}: ${applicationId}`);
    // In real app, this would update the application status
  };

  const handleOpenAudition = (audition: any) => {
    if (audition.auditionType === 'public') {
      navigate(`/public-audition/${audition.id}`);
    } else if (audition.auditionType === 'live') {
      navigate(`/live/${audition.id}`);
    } else {
      navigate(`/private-audition-review/${audition.id}`);
    }
  };

  const handleShortlist = (artistId: number) => {
    setRecentApplications(prev =>
      prev.map(app =>
        app.id === artistId
          ? { ...app, status: 'shortlisted' }
          : app
      )
    );
    alert('Artist shortlisted successfully!');
  };

  const handleReject = (artistId: number) => {
    if (confirm('Are you sure you want to reject this application?')) {
      setRecentApplications(prev =>
        prev.map(app =>
          app.id === artistId
            ? { ...app, status: 'rejected' }
            : app
        )
      );
      alert('Application rejected.');
    }
  };

  const handleOpenNotes = (artistId: number) => {
    setSelectedArtistId(artistId);
    setShowNotesModal(true);
  };

  const handleSaveNotes = () => {
    if (selectedArtistId !== null) {
      const notes = (document.getElementById('artist-notes') as HTMLTextAreaElement)?.value || '';
      setArtistNotes(prev => ({
        ...prev,
        [selectedArtistId]: notes
      }));
      setShowNotesModal(false);
      setSelectedArtistId(null);
      alert('Notes saved successfully!');
    }
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
              <span className="ml-4 text-sm text-gray-500 hidden md:block">Director Dashboard</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => navigate('/shots')}
                className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Shots
              </button>
              <button 
                onClick={() => navigate('/dashboard-selection')}
                className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium cursor-pointer"
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
                  className="relative text-gray-600 hover:text-purple-600 p-2 cursor-pointer w-10 h-10 flex items-center justify-center"
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
                        <div key={notif.id} className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${notif.unread ? 'bg-purple-50' : ''}`}>
                          <p className="text-sm text-gray-900">{notif.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 text-center border-t border-gray-100">
                      <button className="text-sm text-purple-600 hover:text-purple-700 cursor-pointer">View All</button>
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
                  className="relative text-gray-600 hover:text-purple-600 p-2 cursor-pointer w-10 h-10 flex items-center justify-center"
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
                        <div key={msg.id} className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${msg.unread ? 'bg-purple-50' : ''}`}>
                          <p className="text-sm font-medium text-gray-900">{msg.sender}</p>
                          <p className="text-sm text-gray-600 mt-1">{msg.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 text-center border-t border-gray-100">
                      <button className="text-sm text-purple-600 hover:text-purple-700 cursor-pointer">View All Messages</button>
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
                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 hover:border-purple-600 transition-colors"
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
                          navigate('/director/1');
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
              className="md:hidden text-gray-600 hover:text-purple-600 p-2 cursor-pointer w-10 h-10 flex items-center justify-center"
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
                  className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium cursor-pointer text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    navigate('/shots');
                    setShowMobileMenu(false);
                  }}
                  className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium cursor-pointer text-left"
                >
                  Shots
                </button>
                <button 
                  onClick={() => {
                    navigate('/dashboard-selection');
                    setShowMobileMenu(false);
                  }}
                  className="text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium cursor-pointer text-left"
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
                      navigate('/director/1');
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Ram!</h2>
          <p className="text-gray-600">Manage your casting projects and discover talented performers</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="ri-movie-2-line text-xl text-purple-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Auditions</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="ri-user-line text-xl text-blue-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Applications</p>
                <p className="text-2xl font-bold text-gray-900">135</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <i className="ri-star-line text-xl text-teal-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Shortlisted</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <i className="ri-check-line text-xl text-green-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Auditions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">My Auditions</h3>
                <button 
                  onClick={handleCreateAudition}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Create New Audition
                </button>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {myAuditions.map((audition) => (
                    <div key={audition.id} className="flex flex-col p-4 border border-gray-200 rounded-lg space-y-4">
                      <div className="flex-1">
                        <div className="flex items-center flex-wrap gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{audition.title}</h4>
                          {audition.auditionType === 'public' && (
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                              Public
                            </span>
                          )}
                          {audition.auditionType === 'private' && (
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                              Private
                            </span>
                          )}
                          {audition.auditionType === 'live' && (
                            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                              Live
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{audition.project}</p>
                        <p className="text-xs text-gray-500">{audition.location} • Deadline: {audition.deadline}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center justify-between sm:justify-start gap-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(audition.status)}`}>
                            {audition.status}
                          </span>
                          <p className="text-sm font-medium text-gray-900">{audition.applications} Applications</p>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <button
                            onClick={() => handleOpenAudition(audition)}
                            className="px-3 py-2 bg-teal-600 text-white text-xs rounded hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap"
                          >
                            {audition.auditionType === 'live' && (
                              <>
                                <i className="ri-live-line mr-1"></i>
                                <span className="hidden sm:inline">Open Live</span>
                                <span className="sm:hidden">Live</span>
                              </>
                            )}
                            {audition.auditionType === 'public' && (
                              <>
                                <i className="ri-global-line mr-1"></i>
                                <span className="hidden sm:inline">Open Audition</span>
                                <span className="sm:hidden">Open</span>
                              </>
                            )}
                            {audition.auditionType === 'private' && (
                              <>
                                <i className="ri-lock-line mr-1"></i>
                                <span className="hidden sm:inline">Open Audition</span>
                                <span className="sm:hidden">Open</span>
                              </>
                            )}
                          </button>
                          <button
                            onClick={() => handleReviewApplications(audition)}
                            className="px-3 py-2 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                          >
                            <i className="ri-file-list-3-line mr-1 sm:hidden"></i>
                            <span className="hidden sm:inline">Review Apps</span>
                            <span className="sm:hidden">Review</span>
                          </button>
                          <button
                            onClick={() => handleUpdateAudition(audition)}
                            className="px-3 py-2 bg-purple-600 text-white text-xs rounded hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap"
                          >
                            <i className="ri-edit-line mr-1 sm:hidden"></i>
                            <span className="hidden sm:inline">Update</span>
                            <span className="sm:hidden">Edit</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <button className="text-purple-600 hover:text-purple-700 text-sm font-medium cursor-pointer">
                    View All Auditions →
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
                    onClick={handleCreateAudition}
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <i className="ri-add-line text-purple-600"></i>
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">Create Audition</p>
                      <p className="text-sm text-gray-600">Post new casting call</p>
                    </div>
                  </button>
                  
                  <button 
                    onClick={() => navigate('/artists')}
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <i className="ri-search-line text-blue-600"></i>
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">Find Artists</p>
                      <p className="text-sm text-gray-600">Browse talent database</p>
                    </div>
                  </button>
                  
                  <button 
                    onClick={() => handleReviewApplications(myAuditions[0])}
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                      <i className="ri-file-list-3-line text-teal-600"></i>
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">Review Applications</p>
                      <p className="text-sm text-gray-600">Check submissions</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Recent Applications */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Recent Applications</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentApplications.map((application) => (
                    <div key={application.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                      <img 
                        src={application.image}
                        alt={application.artistName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 text-sm truncate">{application.artistName}</p>
                        <p className="text-xs text-gray-600 truncate">{application.auditionTitle}</p>
                        <div className="flex items-center mt-1">
                          <div className="flex items-center">
                            <i className="ri-star-fill text-yellow-400 text-xs"></i>
                            <span className="text-xs text-gray-600 ml-1">{application.rating}</span>
                          </div>
                          <span className={`ml-2 px-2 py-1 rounded-full text-xs ${getStatusColor(application.status)}`}>
                            {application.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-purple-600 hover:text-purple-700 text-sm font-medium cursor-pointer">
                  View All Applications
                </button>
              </div>
            </div>

            {/* Project Analytics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">This Month</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">New Applications</span>
                    <span className="font-semibold text-gray-900">47</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Auditions Created</span>
                    <span className="font-semibold text-gray-900">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Artists Shortlisted</span>
                    <span className="font-semibold text-gray-900">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Roles Filled</span>
                    <span className="font-semibold text-gray-900">2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trending Artists */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Trending Artists</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20young%20actress%20with%20warm%20smile%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20makeup%20and%20styling%2C%20contemporary%20portrait%20photography%20style&width=40&height=40&seq=trend001&orientation=squarish"
                      alt="Artist"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">Priya Sharma</p>
                      <p className="text-xs text-gray-600">Actress • Mumbai</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        <i className="ri-star-fill text-yellow-400 text-xs"></i>
                        <span className="text-xs text-gray-600 ml-1">4.8</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20male%20actor%2C%20warm%20expression%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20styling%2C%20contemporary%20portrait%20photography&width=40&height=40&seq=trend002&orientation=squarish"
                      alt="Artist"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">Arjun Reddy</p>
                      <p className="text-xs text-gray-600">Actor • Chennai</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        <i className="ri-star-fill text-yellow-400 text-xs"></i>
                        <span className="text-xs text-gray-600 ml-1">4.6</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20elegant%20female%20model%2C%20confident%20expression%2C%20studio%20lighting%2C%20neutral%20background%2C%20fashion%20industry%20styling%2C%20contemporary%20portrait%20photography&width=40&height=40&seq=trend003&orientation=squarish"
                      alt="Artist"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">Sophia Williams</p>
                      <p className="text-xs text-gray-600">Model • Delhi</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        <i className="ri-star-fill text-yellow-400 text-xs"></i>
                        <span className="text-xs text-gray-600 ml-1">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/artists')}
                  className="w-full mt-4 border border-purple-600 text-purple-600 py-2 rounded-lg text-sm font-medium hover:bg-purple-50 transition-colors cursor-pointer whitespace-nowrap"
                >
                  View All Artists
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Audition Modal */}
      {showCreateAuditionModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
              <h3 className="text-2xl font-bold text-gray-900">Create New Audition</h3>
              <button 
                onClick={() => setShowCreateAuditionModal(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer w-8 h-8 flex items-center justify-center"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <div className="p-6">
              <form 
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Audition created successfully!');
                  setShowCreateAuditionModal(false);
                }}
              >
                {/* Basic Details */}
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Basic Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Title *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        placeholder="Enter project title"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Production Company *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        placeholder="Enter production company"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                      <select 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                        required
                      >
                        <option value="">Select category</option>
                        <option value="Acting">Acting</option>
                        <option value="Modeling">Modeling</option>
                        <option value="Voice Acting">Voice Acting</option>
                        <option value="Music">Music</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Media Type *</label>
                      <select 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                        required
                      >
                        <option value="">Select media type</option>
                        <option value="Movie">Movie</option>
                        <option value="TV Series">TV Series</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Fashion Show">Fashion Show</option>
                        <option value="Musical Theater">Musical Theater</option>
                        <option value="Web Series">Web Series</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Audition Type *</label>
                      <select 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                        required
                      >
                        <option value="">Select audition type</option>
                        <option value="Open">Open</option>
                        <option value="Selective">Selective</option>
                        <option value="Remote">Remote</option>
                        <option value="Live">Live</option>
                        <option value="Callback">Callback</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Director Name *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        placeholder="Enter director name"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Role Requirements */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Role Requirements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Role Name *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        placeholder="e.g., Lead Actor, Supporting Role"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                      <select 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                        required
                      >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Any">Any</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Age Range *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        placeholder="e.g., 18-30"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Language Requirement *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        placeholder="e.g., Tamil, English"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Skills Required *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        placeholder="e.g., Dancing, Singing, Martial Arts"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level *</label>
                      <select 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                        required
                      >
                        <option value="">Select experience level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Professional">Professional</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Role Description *</label>
                      <textarea 
                        rows={3}
                        maxLength={500}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm resize-none"
                        placeholder="Describe the role requirements..."
                        required
                      ></textarea>
                      <p className="text-xs text-gray-500 mt-1">Maximum 500 characters</p>
                    </div>
                  </div>
                </div>

                {/* Location & Schedule */}
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Location & Schedule</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Shoot Location *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        placeholder="e.g., Chennai, Tamil Nadu"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Audition Location *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        placeholder="Full address"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Shoot Dates *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        placeholder="e.g., 10-15 May 2026"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Audition Date *</label>
                      <input 
                        type="date" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Audition Time *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        placeholder="e.g., 10:00 AM - 4:00 PM"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Application Deadline *</label>
                      <input 
                        type="date" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Contact & Compensation */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact & Compensation</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        placeholder="Contact person name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        placeholder="+91 9876543210"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        placeholder="contact@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Compensation *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        placeholder="e.g., $5,000 - $15,000"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end space-x-4 -mx-6 -mb-6">
                  <button 
                    type="button"
                    onClick={() => setShowCreateAuditionModal(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Create Audition
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Review Applications Modal */}
      {showReviewApplications && selectedAudition && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex justify-between items-center z-10">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{selectedAudition.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mt-1">{selectedApplications.length} Applications</p>
              </div>
              <button 
                onClick={() => setShowReviewApplications(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer w-8 h-8 flex items-center justify-center"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            
            <div className="p-4 sm:p-6">
              <div className="space-y-6">
                {selectedApplications.map((application) => (
                  <div key={application.id} className="border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      <img 
                        src={application.image}
                        alt={application.artistName}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover mx-auto sm:mx-0"
                      />
                      
                      <div className="flex-1 w-full">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-3">
                          <div>
                            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">{application.artistName}</h4>
                            <div className="flex flex-wrap items-center mt-1 gap-2">
                              <div className="flex items-center">
                                <i className="ri-star-fill text-yellow-400 text-sm"></i>
                                <span className="text-sm text-gray-600 ml-1">{application.rating} Rating</span>
                              </div>
                              <span className="text-gray-300">•</span>
                              <span className="text-sm text-gray-600">{application.experience}</span>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${getStatusColor(application.status)}`}>
                            {application.status}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4">
                          <div>
                            <p className="text-xs text-gray-500">Age</p>
                            <p className="text-sm font-medium text-gray-900">{application.age} years</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Location</p>
                            <p className="text-sm font-medium text-gray-900 truncate">{application.location}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Applied</p>
                            <p className="text-sm font-medium text-gray-900">{application.appliedDate}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Contact</p>
                            <p className="text-sm font-medium text-gray-900 truncate">{application.phone}</p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-xs text-gray-500 mb-1">Skills</p>
                          <p className="text-sm text-gray-700">{application.skills}</p>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-xs text-gray-500 mb-1">Languages</p>
                          <p className="text-sm text-gray-700">{application.languages}</p>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-xs text-gray-500 mb-1">Cover Letter</p>
                          <p className="text-sm text-gray-700 leading-relaxed">{application.coverLetter}</p>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <a 
                            href={application.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-purple-600 hover:text-purple-700 cursor-pointer"
                          >
                            <i className="ri-folder-line mr-1"></i>
                            <span className="hidden sm:inline">View Portfolio</span>
                            <span className="sm:hidden">Portfolio</span>
                          </a>
                          <a 
                            href={application.demoReel}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-purple-600 hover:text-purple-700 cursor-pointer"
                          >
                            <i className="ri-video-line mr-1"></i>
                            <span className="hidden sm:inline">Watch Demo Reel</span>
                            <span className="sm:hidden">Demo Reel</span>
                          </a>
                          <a 
                            href={`mailto:${application.email}`}
                            className="text-sm text-purple-600 hover:text-purple-700 cursor-pointer"
                          >
                            <i className="ri-mail-line mr-1"></i>
                            <span className="hidden sm:inline">Send Email</span>
                            <span className="sm:hidden">Email</span>
                          </a>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => handleShortlist(application.id)}
                            disabled={application.status === 'shortlisted'}
                            className={`px-3 py-2 text-xs rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                              application.status === 'shortlisted'
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-green-600 text-white hover:bg-green-700'
                            }`}
                          >
                            <i className="ri-check-line mr-1 hidden sm:inline w-4 h-4 flex items-center justify-center"></i>
                            <span className="sm:hidden">Shortlist</span>
                            <span className="hidden sm:inline">Shortlist</span>
                          </button>
                          <button
                            onClick={() => handleReject(application.id)}
                            disabled={application.status === 'rejected'}
                            className={`px-3 py-2 text-xs rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                              application.status === 'rejected'
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-red-600 text-white hover:bg-red-700'
                            }`}
                          >
                            <i className="ri-close-line mr-1 hidden sm:inline w-4 h-4 flex items-center justify-center"></i>
                            <span className="sm:hidden">Reject</span>
                            <span className="hidden sm:inline">Reject</span>
                          </button>
                          <button
                            onClick={() => handleOpenNotes(application.id)}
                            className="px-3 py-2 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                          >
                            <i className="ri-file-text-line mr-1 hidden sm:inline w-4 h-4 flex items-center justify-center"></i>
                            <span className="sm:hidden">Notes</span>
                            <span className="hidden sm:inline">Notes</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notes Modal */}
      {showNotesModal && selectedArtistId !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Director Notes</h3>
                <button 
                  onClick={() => {
                    setShowNotesModal(false);
                    setSelectedArtistId(null);
                  }}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer w-6 h-6 flex items-center justify-center"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  Artist: <strong>{recentApplications.find(app => app.id === selectedArtistId)?.name}</strong>
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Role: {recentApplications.find(app => app.id === selectedArtistId)?.role}
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Add your notes about this artist
                </label>
                <textarea
                  id="artist-notes"
                  rows={6}
                  maxLength={500}
                  defaultValue={artistNotes[selectedArtistId] || ''}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  placeholder="Enter your observations, feedback, or any important notes about this artist's audition..."
                />
                <p className="text-xs text-gray-500 mt-1">Maximum 500 characters</p>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => {
                    setShowNotesModal(false);
                    setSelectedArtistId(null);
                  }}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveNotes}
                  className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors cursor-pointer"
                >
                  Save Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Update Audition Modal */}
      {showUpdateAudition && selectedAudition && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
              <h3 className="text-2xl font-bold text-gray-900">Update Audition</h3>
              <button 
                onClick={() => setShowUpdateAudition(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer w-8 h-8 flex items-center justify-center"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            
            <div className="p-6">
              <form 
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Audition updated successfully!');
                  setShowUpdateAudition(false);
                }}
              >
                {/* Basic Details */}
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Basic Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Title *</label>
                      <input 
                        type="text" 
                        defaultValue={selectedAudition.project}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                      <select 
                        defaultValue={selectedAudition.category}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                        required
                      >
                        <option value="Acting">Acting</option>
                        <option value="Modeling">Modeling</option>
                        <option value="Voice Acting">Voice Acting</option>
                        <option value="Music">Music</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Media Type *</label>
                      <select 
                        defaultValue={selectedAudition.mediaType}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                        required
                      >
                        <option value="Movie">Movie</option>
                        <option value="TV Series">TV Series</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Fashion Show">Fashion Show</option>
                        <option value="Musical Theater">Musical Theater</option>
                        <option value="Web Series">Web Series</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Status *</label>
                      <select 
                        defaultValue={selectedAudition.status}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                        required
                      >
                        <option value="Active">Active</option>
                        <option value="Review">Review</option>
                        <option value="Closed">Closed</option>
                        <option value="On Hold">On Hold</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Role Requirements */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Role Requirements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Role Name *</label>
                      <input 
                        type="text" 
                        defaultValue={selectedAudition.roleName}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                      <select 
                        defaultValue={selectedAudition.gender}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                        required
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Any">Any</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Age Range *</label>
                      <input 
                        type="text" 
                        defaultValue={selectedAudition.ageRange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Language *</label>
                      <input 
                        type="text" 
                        defaultValue={selectedAudition.language}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Skills Required *</label>
                      <input 
                        type="text" 
                        defaultValue={selectedAudition.skills}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level *</label>
                      <select 
                        defaultValue={selectedAudition.experience}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                        required
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Professional">Professional</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                      <textarea 
                        rows={3}
                        maxLength={500}
                        defaultValue={selectedAudition.description}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm resize-none"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Location & Schedule */}
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Location & Schedule</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                      <input 
                        type="text" 
                        defaultValue={selectedAudition.location}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Application Deadline *</label>
                      <input 
                        type="date" 
                        defaultValue={selectedAudition.deadline}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Compensation *</label>
                      <input 
                        type="text" 
                        defaultValue={selectedAudition.compensation}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end space-x-4 -mx-6 -mb-6">
                  <button 
                    type="button"
                    onClick={() => setShowUpdateAudition(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Update Audition
                  </button>
                </div>
              </form>
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