import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function PrivateAuditionReview() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [showNotes, setShowNotes] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentNoteId, setCurrentNoteId] = useState<number | null>(null);
  const [notes, setNotes] = useState<{[key: number]: string}>({});
  const [noteText, setNoteText] = useState('');
  const [currentNotes, setCurrentNotes] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mock audition data - converted to state
  const [videos, setVideos] = useState([
    {
      id: 1,
      artistName: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 9876543210',
      age: 25,
      location: 'Mumbai, Maharashtra',
      experience: 'Intermediate',
      submittedDate: '2025-01-20',
      status: 'pending',
      rating: 0,
      videoUrl: 'https://readdy.ai/api/search-image?query=Professional%20actress%20performing%20dramatic%20monologue%20scene%2C%20emotional%20expression%2C%20studio%20lighting%2C%20cinematic%20quality%20video%20frame%2C%20contemporary%20acting%20performance&width=400&height=600&seq=vid001&orientation=portrait',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20actress%20performing%20dramatic%20monologue%20scene%2C%20emotional%20expression%2C%20studio%20lighting%2C%20cinematic%20quality%20video%20frame%2C%20contemporary%20acting%20performance&width=400&height=600&seq=vid001&orientation=portrait',
      duration: '3:45',
      coverLetter: 'I am very passionate about this role and have 5 years of experience in dramatic acting.',
      skills: 'Dancing, Singing, Martial Arts, Emotional Acting',
      languages: 'Tamil, English, Hindi',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20young%20actress%20with%20warm%20smile%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20makeup%20and%20styling%2C%20contemporary%20portrait%20photography%20style&width=100&height=100&seq=app001&orientation=squarish',
      directorNotes: ''
    },
    {
      id: 2,
      artistName: 'Arjun Reddy',
      email: 'arjun.reddy@email.com',
      phone: '+91 9876543211',
      age: 28,
      location: 'Hyderabad, Telangana',
      experience: 'Professional',
      submittedDate: '2025-01-19',
      status: 'reviewed',
      rating: 4,
      videoUrl: 'https://readdy.ai/api/search-image?query=Professional%20male%20actor%20performing%20intense%20action%20scene%2C%20dynamic%20movement%2C%20dramatic%20lighting%2C%20cinematic%20quality%20video%20frame%2C%20contemporary%20action%20performance&width=400&height=600&seq=vid002&orientation=portrait',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20male%20actor%20performing%20intense%20action%20scene%2C%20dynamic%20movement%2C%20dramatic%20lighting%2C%20cinematic%20quality%20video%20frame%2C%20contemporary%20action%20performance&width=400&height=600&seq=vid002&orientation=portrait',
      duration: '4:12',
      coverLetter: 'With over 8 years in the industry, I bring depth and authenticity to every role.',
      skills: 'Martial Arts, Action Sequences, Method Acting',
      languages: 'Tamil, Telugu, English',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20male%20actor%2C%20warm%20expression%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20styling%2C%20contemporary%20portrait%20photography&width=100&height=100&seq=app002&orientation=squarish',
      directorNotes: 'Strong performance, good action skills. Consider for callback.'
    },
    {
      id: 3,
      artistName: 'Meera Nair',
      email: 'meera.nair@email.com',
      phone: '+91 9876543212',
      age: 32,
      location: 'Kochi, Kerala',
      experience: 'Professional',
      submittedDate: '2025-01-18',
      status: 'shortlisted',
      rating: 5,
      videoUrl: 'https://readdy.ai/api/search-image?query=Professional%20actress%20performing%20emotional%20dramatic%20scene%2C%20expressive%20face%2C%20theatrical%20lighting%2C%20cinematic%20quality%20video%20frame%2C%20contemporary%20dramatic%20performance&width=400&height=600&seq=vid003&orientation=portrait',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20actress%20performing%20emotional%20dramatic%20scene%2C%20expressive%20face%2C%20theatrical%20lighting%2C%20cinematic%20quality%20video%20frame%2C%20contemporary%20dramatic%20performance&width=400&height=600&seq=vid003&orientation=portrait',
      duration: '3:28',
      coverLetter: 'I specialize in emotional depth and have worked on multiple dramatic projects.',
      skills: 'Dramatic Acting, Emotional Scenes, Character Development',
      languages: 'English, Malayalam, Hindi, Tamil',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20female%20voice%20artist%2C%20warm%20expression%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20styling%2C%20contemporary%20portrait%20photography&width=100&height=100&seq=app003&orientation=squarish',
      directorNotes: 'Excellent emotional range. Top candidate for the role.'
    },
    {
      id: 4,
      artistName: 'Rajesh Kumar',
      email: 'rajesh.kumar@email.com',
      phone: '+91 9876543213',
      age: 35,
      location: 'Chennai, Tamil Nadu',
      experience: 'Professional',
      submittedDate: '2025-01-17',
      status: 'rejected',
      rating: 2,
      videoUrl: 'https://readdy.ai/api/search-image?query=Professional%20male%20actor%20performing%20dialogue%20scene%2C%20confident%20expression%2C%20studio%20lighting%2C%20cinematic%20quality%20video%20frame%2C%20contemporary%20acting%20performance&width=400&height=600&seq=vid004&orientation=portrait',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20male%20actor%20performing%20dialogue%20scene%2C%20confident%20expression%2C%20studio%20lighting%2C%20cinematic%20quality%20video%20frame%2C%20contemporary%20acting%20performance&width=400&height=600&seq=vid004&orientation=portrait',
      duration: '2:55',
      coverLetter: 'I have extensive experience in television drama and film.',
      skills: 'Dramatic Acting, Emotional Scenes, Character Development',
      languages: 'Tamil, English, Hindi',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20mature%20male%20actor%2C%20confident%20expression%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20styling%2C%20contemporary%20portrait%20photography&width=100&height=100&seq=app004&orientation=squarish',
      directorNotes: 'Not the right fit for this particular role.'
    },
    {
      id: 5,
      artistName: 'Ananya Iyer',
      email: 'ananya.iyer@email.com',
      phone: '+91 9876543214',
      age: 23,
      location: 'Bangalore, Karnataka',
      experience: 'Intermediate',
      submittedDate: '2025-01-16',
      status: 'shortlisted',
      rating: 4,
      videoUrl: 'https://readdy.ai/api/search-image?query=Young%20professional%20actress%20performing%20contemporary%20scene%2C%20natural%20expression%2C%20bright%20lighting%2C%20cinematic%20quality%20video%20frame%2C%20modern%20acting%20performance&width=400&height=600&seq=vid005&orientation=portrait',
      thumbnail: 'https://readdy.ai/api/search-image?query=Young%20professional%20actress%20performing%20contemporary%20scene%2C%20natural%20expression%2C%20bright%20lighting%2C%20cinematic%20quality%20video%20frame%2C%20modern%20acting%20performance&width=400&height=600&seq=vid005&orientation=portrait',
      duration: '3:15',
      coverLetter: 'Fresh perspective with strong training in method acting.',
      skills: 'Method Acting, Contemporary Performance, Dance',
      languages: 'English, Kannada, Hindi',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20actress%20with%20bright%20smile%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20makeup%2C%20contemporary%20portrait%20photography&width=100&height=100&seq=app005&orientation=squarish',
      directorNotes: 'Great potential. Natural talent with good training.'
    },
    {
      id: 6,
      artistName: 'Vikram Singh',
      email: 'vikram.singh@email.com',
      phone: '+91 9876543215',
      age: 30,
      location: 'Delhi, NCR',
      experience: 'Professional',
      submittedDate: '2025-01-15',
      status: 'pending',
      rating: 0,
      videoUrl: 'https://readdy.ai/api/search-image?query=Professional%20male%20actor%20performing%20intense%20dramatic%20scene%2C%20powerful%20expression%2C%20dramatic%20lighting%2C%20cinematic%20quality%20video%20frame%2C%20contemporary%20dramatic%20performance&width=400&height=600&seq=vid006&orientation=portrait',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20male%20actor%20performing%20intense%20dramatic%20scene%2C%20powerful%20expression%2C%20dramatic%20lighting%2C%20cinematic%20quality%20video%20frame%2C%20contemporary%20dramatic%20performance&width=400&height=600&seq=vid006&orientation=portrait',
      duration: '4:30',
      coverLetter: 'Versatile actor with experience in both commercial and art cinema.',
      skills: 'Versatile Acting, Action, Drama, Comedy',
      languages: 'Hindi, English, Punjabi',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20male%20actor%20with%20strong%20features%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20styling%2C%20contemporary%20portrait%20photography&width=100&height=100&seq=app006&orientation=squarish',
      directorNotes: ''
    }
  ]);

  // Mock audition data
  const audition = {
    id: 1,
    title: 'Lead Role - Kantara 3',
    project: 'Kantara 3',
    director: 'Ram',
    totalSubmissions: 45,
    reviewed: videos.filter(v => v.status === 'reviewed').length,
    shortlisted: videos.filter(v => v.status === 'shortlisted').length,
    rejected: videos.filter(v => v.status === 'rejected').length,
    pending: videos.filter(v => v.status === 'pending').length,
    deadline: '2025-03-20'
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'reviewed': return 'bg-blue-100 text-blue-800';
      case 'shortlisted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleShortlist = (videoId: number) => {
    setVideos(videos.map(video => 
      video.id === videoId 
        ? { ...video, status: 'shortlisted' }
        : video
    ));
    if (selectedVideo && selectedVideo.id === videoId) {
      setSelectedVideo({ ...selectedVideo, status: 'shortlisted' });
    }
    alert('Artist shortlisted successfully!');
  };

  const handleReject = (videoId: number) => {
    setVideos(videos.map(video => 
      video.id === videoId 
        ? { ...video, status: 'rejected' }
        : video
    ));
    if (selectedVideo && selectedVideo.id === videoId) {
      setSelectedVideo({ ...selectedVideo, status: 'rejected' });
    }
    alert('Artist rejected.');
  };

  const handleAddNote = (videoId: number) => {
    setSelectedVideo(videos.find(v => v.id === videoId));
    setCurrentNotes(videos.find(v => v.id === videoId)?.directorNotes || '');
    setShowNotes(true);
  };

  const handleStatusChange = (submissionId: number, newStatus: string) => {
    setVideos(videos.map(video => 
      video.id === submissionId 
        ? { ...video, status: newStatus }
        : video
    ));
    if (selectedVideo && selectedVideo.id === submissionId) {
      setSelectedVideo({ ...selectedVideo, status: newStatus });
    }
    alert(`Status changed to: ${newStatus}`);
  };

  const handleRating = (submissionId: number, rating: number) => {
    setVideos(videos.map(video => 
      video.id === submissionId 
        ? { ...video, rating }
        : video
    ));
    if (selectedVideo && selectedVideo.id === submissionId) {
      setSelectedVideo({ ...selectedVideo, rating });
    }
  };

  const handleSaveNotes = () => {
    if (selectedVideo) {
      setVideos(videos.map(video => 
        video.id === selectedVideo.id 
          ? { ...video, directorNotes: currentNotes }
          : video
      ));
      setSelectedVideo({ ...selectedVideo, directorNotes: currentNotes });
    }
    alert('Notes saved successfully!');
    setShowNotes(false);
  };

  const filteredSubmissions = videos.filter(sub => {
    if (filterStatus === 'all') return true;
    return sub.status === filterStatus;
  });

  const sortedSubmissions = [...filteredSubmissions].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.submittedDate).getTime() - new Date(a.submittedDate).getTime();
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'name') {
      return a.artistName.localeCompare(b.artistName);
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={() => navigate('/')}
                className="cursor-pointer"
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
                className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Find Artist
              </button>
              <button 
                onClick={() => navigate('/shots')}
                className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Shots
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-teal-600 cursor-pointer w-10 h-10 flex items-center justify-center"
            >
              <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => {
                    navigate('/');
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-600 hover:text-teal-600 hover:bg-gray-50 px-4 py-3 text-sm font-medium cursor-pointer text-left rounded-lg"
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    navigate('/auditions');
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-600 hover:text-teal-600 hover:bg-gray-50 px-4 py-3 text-sm font-medium cursor-pointer text-left rounded-lg"
                >
                  Find Audition
                </button>
                <button 
                  onClick={() => {
                    navigate('/artists');
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-600 hover:text-teal-600 hover:bg-gray-50 px-4 py-3 text-sm font-medium cursor-pointer text-left rounded-lg"
                >
                  Find Artist
                </button>
                <button 
                  onClick={() => {
                    navigate('/shots');
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-600 hover:text-teal-600 hover:bg-gray-50 px-4 py-3 text-sm font-medium cursor-pointer text-left rounded-lg"
                >
                  Shots
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 flex-1">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-start sm:items-center mb-4">
            <button 
              onClick={() => navigate('/director-dashboard')}
              className="text-gray-600 hover:text-purple-600 mr-3 sm:mr-4 cursor-pointer w-8 h-8 flex items-center justify-center flex-shrink-0"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            <div className="flex-1 min-w-0">
              <div className="flex items-start sm:items-center mb-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                  <i className="ri-lock-line text-white text-base sm:text-lg"></i>
                </div>
                <div className="min-w-0">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 break-words">{audition.title}</h1>
                  <p className="text-sm sm:text-base text-gray-600">Private Audition Submissions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Submissions</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">{videos.length}</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3 sm:p-4 border border-yellow-200">
              <p className="text-xs sm:text-sm text-yellow-800 mb-1">Pending Review</p>
              <p className="text-xl sm:text-2xl font-bold text-yellow-900">{audition.pending}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 sm:p-4 border border-blue-200">
              <p className="text-xs sm:text-sm text-blue-800 mb-1">Reviewed</p>
              <p className="text-xl sm:text-2xl font-bold text-blue-900">{audition.reviewed}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 sm:p-4 border border-green-200">
              <p className="text-xs sm:text-sm text-green-800 mb-1">Shortlisted</p>
              <p className="text-xl sm:text-2xl font-bold text-green-900">{audition.shortlisted}</p>
            </div>
            <div className="bg-red-50 rounded-lg p-3 sm:p-4 border border-red-200 col-span-2 sm:col-span-1">
              <p className="text-xs sm:text-sm text-red-800 mb-1">Rejected</p>
              <p className="text-xl sm:text-2xl font-bold text-red-900">{audition.rejected}</p>
            </div>
          </div>

          {/* Filters and Sort */}
          <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200 space-y-3 sm:space-y-0 sm:flex sm:flex-wrap sm:gap-4 sm:items-center">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <div className="flex items-center space-x-2">
                <i className="ri-filter-line text-gray-600"></i>
                <span className="text-sm font-medium text-gray-700">Filter:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterStatus('all')}
                  className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium cursor-pointer whitespace-nowrap ${
                    filterStatus === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All ({videos.length})
                </button>
                <button
                  onClick={() => setFilterStatus('pending')}
                  className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium cursor-pointer whitespace-nowrap ${
                    filterStatus === 'pending' ? 'bg-yellow-600 text-white' : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                  }`}
                >
                  <span className="hidden sm:inline">Pending ({audition.pending})</span>
                  <span className="sm:hidden">Pending</span>
                </button>
                <button
                  onClick={() => setFilterStatus('reviewed')}
                  className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium cursor-pointer whitespace-nowrap ${
                    filterStatus === 'reviewed' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                  }`}
                >
                  <span className="hidden sm:inline">Reviewed ({audition.reviewed})</span>
                  <span className="sm:hidden">Reviewed</span>
                </button>
                <button
                  onClick={() => setFilterStatus('shortlisted')}
                  className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium cursor-pointer whitespace-nowrap ${
                    filterStatus === 'shortlisted' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800 hover:bg-green-200'
                  }`}
                >
                  <span className="hidden sm:inline">Shortlisted ({audition.shortlisted})</span>
                  <span className="sm:hidden">Shortlisted</span>
                </button>
                <button
                  onClick={() => setFilterStatus('rejected')}
                  className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium cursor-pointer whitespace-nowrap ${
                    filterStatus === 'rejected' ? 'bg-red-600 text-white' : 'bg-red-100 text-red-800 hover:bg-red-200'
                  }`}
                >
                  <span className="hidden sm:inline">Rejected ({audition.rejected})</span>
                  <span className="sm:hidden">Rejected</span>
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:ml-auto">
              <i className="ri-sort-desc text-gray-600"></i>
              <span className="text-sm font-medium text-gray-700">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-2 sm:px-3 py-1 border border-gray-300 rounded-lg text-xs sm:text-sm cursor-pointer pr-6 sm:pr-8"
              >
                <option value="recent">Recent</option>
                <option value="rating">Rating</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sortedSubmissions.map((submission) => (
            <div key={submission.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              {/* Video Thumbnail */}
              <div 
                className="relative h-64 sm:h-80 bg-cover bg-center cursor-pointer group"
                style={{ backgroundImage: `url(${submission.thumbnail})` }}
                onClick={() => {
                  setSelectedVideo(submission);
                  setShowVideoModal(true);
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className="ri-play-fill text-2xl sm:text-3xl text-purple-600"></i>
                  </div>
                </div>
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                    {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                  </span>
                </div>
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {submission.duration}
                </div>
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                  <div className="flex items-center space-x-2">
                    <img 
                      src={submission.image}
                      alt={submission.artistName}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-xs sm:text-sm truncate">{submission.artistName}</p>
                      <p className="text-xs text-white/80 truncate">{submission.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Artist Info */}
              <div className="p-3 sm:p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRating(submission.id, star)}
                        className="cursor-pointer w-5 h-5 flex items-center justify-center"
                      >
                        <i className={`${star <= submission.rating ? 'ri-star-fill text-yellow-400' : 'ri-star-line text-gray-300'} text-base sm:text-lg`}></i>
                      </button>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{submission.submittedDate}</span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <i className="ri-user-line mr-2 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                    <span className="truncate">{submission.age} years • {submission.experience}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <i className="ri-phone-line mr-2 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                    <span className="truncate">{submission.phone}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <i className="ri-mail-line mr-2 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                    <span className="truncate">{submission.email}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => handleShortlist(submission.id)}
                    className="px-2 sm:px-3 py-2 bg-green-600 text-white text-xs rounded-lg hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-check-line sm:mr-1"></i>
                    <span className="hidden sm:inline">Shortlist</span>
                  </button>
                  <button
                    onClick={() => handleReject(submission.id)}
                    className="px-2 sm:px-3 py-2 bg-red-600 text-white text-xs rounded-lg hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-close-line sm:mr-1"></i>
                    <span className="hidden sm:inline">Reject</span>
                  </button>
                  <button
                    onClick={() => handleAddNote(submission.id)}
                    className="px-2 sm:px-3 py-2 border border-gray-300 text-gray-700 text-xs rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-file-text-line sm:mr-1"></i>
                    <span className="hidden sm:inline">Notes</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedSubmissions.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-video-line text-4xl text-gray-400"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Submissions Found</h3>
            <p className="text-gray-600">No video submissions match your current filter.</p>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {showVideoModal && selectedVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
              <div className="flex items-center space-x-4">
                <img 
                  src={selectedVideo.image}
                  alt={selectedVideo.artistName}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedVideo.artistName}</h3>
                  <p className="text-sm text-gray-600">{selectedVideo.location} • {selectedVideo.experience}</p>
                </div>
              </div>
              <button 
                onClick={() => setShowVideoModal(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer w-8 h-8 flex items-center justify-center"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Video Player */}
                <div className="lg:col-span-2">
                  <div 
                    className="w-full h-96 lg:h-[600px] bg-cover bg-center rounded-lg relative"
                    style={{ backgroundImage: `url(${selectedVideo.videoUrl})` }}
                  >
                    <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                        <i className="ri-play-fill text-4xl text-purple-600"></i>
                      </div>
                    </div>
                  </div>

                  {/* Rating and Actions */}
                  <div className="mt-6 bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Rate this performance:</p>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              onClick={() => handleRating(selectedVideo.id, star)}
                              className="cursor-pointer w-8 h-8 flex items-center justify-center"
                            >
                              <i className={`${star <= selectedVideo.rating ? 'ri-star-fill text-yellow-400' : 'ri-star-line text-gray-300'} text-2xl`}></i>
                            </button>
                          ))}
                        </div>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(selectedVideo.status)}`}>
                        {selectedVideo.status.charAt(0).toUpperCase() + selectedVideo.status.slice(1)}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => handleStatusChange(selectedVideo.id, 'shortlisted')}
                        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <i className="ri-check-line mr-2"></i>
                        Shortlist Candidate
                      </button>
                      <button
                        onClick={() => handleStatusChange(selectedVideo.id, 'rejected')}
                        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <i className="ri-close-line mr-2"></i>
                        Reject
                      </button>
                      <button
                        onClick={() => handleStatusChange(selectedVideo.id, 'reviewed')}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <i className="ri-eye-line mr-2"></i>
                        Mark as Reviewed
                      </button>
                    </div>
                  </div>
                </div>

                {/* Artist Details */}
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Artist Information</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Age</p>
                        <p className="text-sm font-medium text-gray-900">{selectedVideo.age} years</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Experience</p>
                        <p className="text-sm font-medium text-gray-900">{selectedVideo.experience}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Location</p>
                        <p className="text-sm font-medium text-gray-900">{selectedVideo.location}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Phone</p>
                        <p className="text-sm font-medium text-gray-900">{selectedVideo.phone}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Email</p>
                        <p className="text-sm font-medium text-gray-900 break-all">{selectedVideo.email}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Submitted</p>
                        <p className="text-sm font-medium text-gray-900">{selectedVideo.submittedDate}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Skills & Languages</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Skills</p>
                        <p className="text-sm text-gray-700">{selectedVideo.skills}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Languages</p>
                        <p className="text-sm text-gray-700">{selectedVideo.languages}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Cover Letter</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{selectedVideo.coverLetter}</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Director Notes</h4>
                    {selectedVideo.directorNotes ? (
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">{selectedVideo.directorNotes}</p>
                    ) : (
                      <p className="text-sm text-gray-500 italic mb-3">No notes yet</p>
                    )}
                    <button
                      onClick={() => {
                        setCurrentNotes(selectedVideo.directorNotes);
                        setShowNotes(true);
                      }}
                      className="w-full px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-edit-line mr-2"></i>
                      Edit Notes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notes Modal */}
      {showNotes && selectedVideo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Director Notes</h3>
              <p className="text-gray-600 mt-1">Add your private notes about {selectedVideo.artistName}</p>
            </div>
            <div className="p-6">
              <textarea
                value={currentNotes}
                onChange={(e) => setCurrentNotes(e.target.value)}
                rows={8}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm resize-none"
                placeholder="Add your notes here... (e.g., performance strengths, areas for improvement, callback considerations)"
              ></textarea>
              <p className="text-xs text-gray-500 mt-2">Maximum 500 characters</p>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => setShowNotes(false)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNotes}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Save Notes
              </button>
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
