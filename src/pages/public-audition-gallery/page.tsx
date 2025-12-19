import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function PublicAuditionGallery() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [likedVideos, setLikedVideos] = useState<Set<number>>(new Set());
  const [commentText, setCommentText] = useState('');
  const [videoComments, setVideoComments] = useState<{[key: number]: any[]}>({});
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mock audition data
  const audition = {
    id: 1,
    title: 'Kantara 3',
    company: 'Pix Rock Entertainment',
    director: 'Ram',
    category: 'Acting',
    privacyType: 'public',
    projectTitle: 'Kantara 3',
    productionCompany: 'Pix Rock Entertainment'
  };

  // Mock submissions data
  const submissions = [
    {
      id: 1,
      artistName: 'Rajesh Kumar',
      artistImage: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20actor%20headshot%20portrait%2C%20confident%20expression%2C%20studio%20lighting%2C%20contemporary%20professional%20photography%20with%20clean%20background&width=150&height=150&seq=artist001&orientation=squarish',
      videoThumbnail: 'https://readdy.ai/api/search-image?query=Dramatic%20acting%20scene%20with%20male%20actor%20performing%20emotional%20monologue%2C%20cinematic%20lighting%2C%20professional%20film%20production%20quality%20with%20intense%20expression%20and%20theatrical%20atmosphere&width=400&height=300&seq=video001&orientation=landscape',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '3:45',
      submittedDate: '2024-03-15',
      likes: 1247,
      comments: 89,
      views: 5432,
      age: 28,
      location: 'Chennai, Tamil Nadu',
      experience: 'Intermediate',
      skills: ['Acting', 'Dancing', 'Martial Arts'],
      coverLetter: 'I am passionate about bringing authentic emotions to every role. My experience in theater and film has prepared me for this challenging character.'
    },
    {
      id: 2,
      artistName: 'Priya Sharma',
      artistImage: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20actress%20headshot%20portrait%2C%20elegant%20expression%2C%20studio%20lighting%2C%20contemporary%20professional%20photography%20with%20clean%20background&width=150&height=150&seq=artist002&orientation=squarish',
      videoThumbnail: 'https://readdy.ai/api/search-image?query=Female%20actress%20performing%20dramatic%20scene%2C%20expressive%20emotions%2C%20professional%20film%20set%2C%20cinematic%20lighting%20with%20theatrical%20atmosphere%20and%20intense%20performance&width=400&height=300&seq=video002&orientation=landscape',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '4:12',
      submittedDate: '2024-03-14',
      likes: 2156,
      comments: 143,
      views: 8921,
      age: 25,
      location: 'Mumbai, Maharashtra',
      experience: 'Professional',
      skills: ['Acting', 'Dancing', 'Singing'],
      coverLetter: 'With over 5 years of experience in theater and independent films, I bring depth and authenticity to every character I portray.'
    },
    {
      id: 3,
      artistName: 'Arjun Reddy',
      artistImage: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20actor%20headshot%20portrait%2C%20intense%20expression%2C%20studio%20lighting%2C%20contemporary%20professional%20photography%20with%20clean%20background&width=150&height=150&seq=artist003&orientation=squarish',
      videoThumbnail: 'https://readdy.ai/api/search-image?query=Male%20actor%20performing%20action%20scene%2C%20dynamic%20movement%2C%20professional%20film%20production%2C%20dramatic%20lighting%20with%20energetic%20atmosphere%20and%20powerful%20performance&width=400&height=300&seq=video003&orientation=landscape',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '3:28',
      submittedDate: '2024-03-13',
      likes: 892,
      comments: 67,
      views: 3456,
      age: 30,
      location: 'Hyderabad, Telangana',
      experience: 'Professional',
      skills: ['Acting', 'Martial Arts', 'Stunts'],
      coverLetter: 'My background in martial arts and stunt work makes me perfect for action-oriented roles. I am dedicated to delivering powerful performances.'
    },
    {
      id: 4,
      artistName: 'Ananya Iyer',
      artistImage: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20actress%20headshot%20portrait%2C%20warm%20smile%2C%20studio%20lighting%2C%20contemporary%20professional%20photography%20with%20clean%20background&width=150&height=150&seq=artist004&orientation=squarish',
      videoThumbnail: 'https://readdy.ai/api/search-image?query=Female%20actress%20performing%20emotional%20scene%2C%20expressive%20face%2C%20professional%20film%20set%2C%20soft%20lighting%20with%20intimate%20atmosphere%20and%20heartfelt%20performance&width=400&height=300&seq=video004&orientation=landscape',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '4:05',
      submittedDate: '2024-03-12',
      likes: 1678,
      comments: 112,
      views: 6789,
      age: 23,
      location: 'Bangalore, Karnataka',
      experience: 'Intermediate',
      skills: ['Acting', 'Dancing', 'Classical Music'],
      coverLetter: 'I have trained in classical dance and music, which helps me bring grace and emotion to my performances. I am excited about this opportunity.'
    },
    {
      id: 5,
      artistName: 'Vikram Singh',
      artistImage: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20actor%20headshot%20portrait%2C%20charismatic%20expression%2C%20studio%20lighting%2C%20contemporary%20professional%20photography%20with%20clean%20background&width=150&height=150&seq=artist005&orientation=squarish',
      videoThumbnail: 'https://readdy.ai/api/search-image?query=Male%20actor%20performing%20comedy%20scene%2C%20expressive%20gestures%2C%20professional%20film%20set%2C%20bright%20lighting%20with%20entertaining%20atmosphere%20and%20humorous%20performance&width=400&height=300&seq=video005&orientation=landscape',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '3:52',
      submittedDate: '2024-03-11',
      likes: 1423,
      comments: 95,
      views: 5234,
      age: 27,
      location: 'Delhi, NCR',
      experience: 'Intermediate',
      skills: ['Acting', 'Comedy', 'Improvisation'],
      coverLetter: 'My experience in comedy and improvisation allows me to adapt to any role. I bring energy and authenticity to every performance.'
    },
    {
      id: 6,
      artistName: 'Meera Nair',
      artistImage: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20actress%20headshot%20portrait%2C%20serene%20expression%2C%20studio%20lighting%2C%20contemporary%20professional%20photography%20with%20clean%20background&width=150&height=150&seq=artist006&orientation=squarish',
      videoThumbnail: 'https://readdy.ai/api/search-image?query=Female%20actress%20performing%20dramatic%20monologue%2C%20intense%20emotions%2C%20professional%20film%20set%2C%20cinematic%20lighting%20with%20powerful%20atmosphere%20and%20compelling%20performance&width=400&height=300&seq=video006&orientation=landscape',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '4:20',
      submittedDate: '2024-03-10',
      likes: 1989,
      comments: 128,
      views: 7654,
      age: 26,
      location: 'Kochi, Kerala',
      experience: 'Professional',
      skills: ['Acting', 'Dancing', 'Kathakali'],
      coverLetter: 'With a background in traditional Kathakali dance and modern acting, I bring a unique blend of classical and contemporary performance styles.'
    }
  ];

  // Initialize comments for each video
  const initializeComments = () => {
    const comments: {[key: number]: any[]} = {};
    submissions.forEach(submission => {
      comments[submission.id] = [
        {
          id: 1,
          userName: 'Sarah Johnson',
          userImage: 'https://readdy.ai/api/search-image?query=Professional%20woman%20headshot%20portrait%2C%20friendly%20expression%2C%20studio%20lighting%2C%20contemporary%20professional%20photography&width=50&height=50&seq=user001&orientation=squarish',
          comment: 'Amazing performance! Your emotional range is incredible.',
          timestamp: '2 hours ago',
          likes: 24
        },
        {
          id: 2,
          userName: 'Michael Chen',
          userImage: 'https://readdy.ai/api/search-image?query=Professional%20man%20headshot%20portrait%2C%20confident%20expression%2C%20studio%20lighting%2C%20contemporary%20professional%20photography&width=50&height=50&seq=user002&orientation=squarish',
          comment: 'Really impressed with your delivery. Best of luck!',
          timestamp: '5 hours ago',
          likes: 18
        },
        {
          id: 3,
          userName: 'Director Ram',
          userImage: 'https://readdy.ai/api/search-image?query=Professional%20film%20director%20headshot%20portrait%2C%20experienced%20expression%2C%20studio%20lighting%2C%20contemporary%20professional%20photography&width=50&height=50&seq=director001&orientation=squarish',
          comment: 'Excellent work! We will be in touch soon.',
          timestamp: '1 day ago',
          likes: 156,
          isDirector: true
        }
      ];
    });
    return comments;
  };

  useState(() => {
    setVideoComments(initializeComments());
  });

  const handleLike = (videoId: number) => {
    setLikedVideos(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(videoId)) {
        newLiked.delete(videoId);
      } else {
        newLiked.add(videoId);
      }
      return newLiked;
    });
  };

  const handleAddComment = (videoId: number) => {
    if (!commentText.trim()) return;
    
    const newComment = {
      id: Date.now(),
      userName: 'You',
      userImage: 'https://readdy.ai/api/search-image?query=Professional%20person%20headshot%20portrait%2C%20friendly%20expression%2C%20studio%20lighting%2C%20contemporary%20professional%20photography&width=50&height=50&seq=currentuser&orientation=squarish',
      comment: commentText,
      timestamp: 'Just now',
      likes: 0
    };

    setVideoComments(prev => ({
      ...prev,
      [videoId]: [newComment, ...(prev[videoId] || [])]
    }));
    
    setCommentText('');
  };

  const handleShare = (submission: any) => {
    if (navigator.share) {
      navigator.share({
        title: `${submission.artistName}'s Audition`,
        text: `Check out ${submission.artistName}'s audition for ${audition.title}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const sortedSubmissions = [...submissions].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.submittedDate).getTime() - new Date(a.submittedDate).getTime();
    } else if (sortBy === 'popular') {
      return b.likes - a.likes;
    } else if (sortBy === 'views') {
      return b.views - a.views;
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

      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
                  <i className="ri-global-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Public Audition
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{audition.title}</h1>
              <p className="text-xl text-white/90 mb-2">{audition.company}</p>
              <p className="text-lg text-white/80">Directed by {audition.director}</p>
            </div>
            <div className="hidden md:flex flex-col items-end gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">{submissions.length}</div>
                <div className="text-sm text-white/80">Total Submissions</div>
              </div>
              <button 
                onClick={() => setShowApplicationForm(true)}
                className="bg-white text-teal-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          </div>
          
          {/* Mobile Apply Button */}
          <div className="md:hidden mt-6">
            <button 
              onClick={() => setShowApplicationForm(true)}
              className="w-full bg-white text-teal-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {submissions.reduce((sum, s) => sum + s.views, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {submissions.reduce((sum, s) => sum + s.likes, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Likes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {submissions.reduce((sum, s) => sum + s.comments, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Comments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">{submissions.length}</div>
              <div className="text-sm text-gray-600">Participants</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Sort */}
      <div className="bg-white py-6 border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm pr-8"
              >
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="views">Most Viewed</option>
              </select>
            </div>
            <div className="text-sm text-gray-600">
              Showing {sortedSubmissions.length} audition videos
            </div>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedSubmissions.map((submission) => (
            <div key={submission.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              {/* Video Thumbnail */}
              <div 
                className="relative h-64 bg-cover bg-center bg-top cursor-pointer"
                style={{ backgroundImage: `url(${submission.videoThumbnail})` }}
                onClick={() => setSelectedVideo(submission)}
              >
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <i className="ri-play-fill text-3xl text-teal-600"></i>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {submission.duration}
                </div>
              </div>

              {/* Artist Info */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={submission.artistImage} 
                    alt={submission.artistName}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{submission.artistName}</h3>
                    <p className="text-sm text-gray-600">{submission.location}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <i className="ri-eye-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                      {submission.views.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <i className="ri-heart-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                      {submission.likes.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <i className="ri-chat-3-line mr-1 w-4 h-4 flex items-center justify-center"></i>
                      {submission.comments}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleLike(submission.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                      likedVideos.has(submission.id)
                        ? 'bg-red-50 text-red-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <i className={`${likedVideos.has(submission.id) ? 'ri-heart-fill' : 'ri-heart-line'} w-4 h-4 flex items-center justify-center`}></i>
                    <span className="text-sm font-medium">Like</span>
                  </button>
                  
                  <button
                    onClick={() => setSelectedVideo(submission)}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    <i className="ri-chat-3-line w-4 h-4 flex items-center justify-center"></i>
                    <span className="text-sm font-medium">Comment</span>
                  </button>
                  
                  <button
                    onClick={() => handleShare(submission)}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    <i className="ri-share-line w-4 h-4 flex items-center justify-center"></i>
                    <span className="text-sm font-medium">Share</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Detail Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 md:p-6 flex justify-between items-center z-10">
              <h3 className="text-lg md:text-2xl font-semibold text-gray-900">{selectedVideo.artistName}'s Audition</h3>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer w-8 h-8 flex items-center justify-center"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Video and Info */}
                <div className="lg:col-span-2">
                  {/* Video Player */}
                  <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-6">
                    <iframe
                      src={selectedVideo.videoUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Artist Info */}
                  <div className="bg-gray-50 rounded-xl p-4 md:p-6 mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                      <img 
                        src={selectedVideo.artistImage}
                        alt={selectedVideo.artistName}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{selectedVideo.artistName}</h4>
                        <p className="text-sm md:text-base text-gray-600">{selectedVideo.location}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Age</p>
                        <p className="font-medium text-gray-900">{selectedVideo.age} years</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Experience</p>
                        <p className="font-medium text-gray-900">{selectedVideo.experience}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm text-gray-600 mb-2">Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedVideo.skills.map((skill: string, index: number) => (
                          <span key={index} className="bg-teal-100 text-teal-800 text-xs md:text-sm px-3 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-2">Cover Letter</p>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">{selectedVideo.coverLetter}</p>
                    </div>
                  </div>

                  {/* Engagement Stats */}
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6">
                    <button
                      onClick={() => handleLike(selectedVideo.id)}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors ${
                        likedVideos.has(selectedVideo.id)
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}>
                        <i className={`${likedVideos.has(selectedVideo.id) ? 'ri-heart-fill' : 'ri-heart-line'} text-lg md:text-xl`}></i>
                      </div>
                      <span className="text-sm md:text-base font-medium text-gray-900">
                        {likedVideos.has(selectedVideo.id) ? selectedVideo.likes + 1 : selectedVideo.likes}
                      </span>
                    </button>

                    <button className="flex items-center space-x-2 cursor-pointer">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <i className="ri-chat-3-line text-lg md:text-xl text-gray-600"></i>
                      </div>
                      <span className="text-sm md:text-base font-medium text-gray-900">{selectedVideo.comments}</span>
                    </button>

                    <button
                      onClick={() => handleShare(selectedVideo)}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <i className="ri-share-forward-line text-lg md:text-xl text-gray-600"></i>
                      </div>
                      <span className="text-sm md:text-base font-medium text-gray-900">Share</span>
                    </button>
                  </div>

                  {/* Comments Section */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6">
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Comments ({selectedVideo.comments})</h4>
                    
                    {/* Comment Input */}
                    <div className="mb-6">
                      <textarea
                        placeholder="Add a comment..."
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none text-sm md:text-base"
                      ></textarea>
                      <div className="flex justify-end mt-2">
                        <button className="bg-teal-600 text-white px-4 md:px-6 py-2 rounded-lg text-sm md:text-base font-medium hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap">
                          Post Comment
                        </button>
                      </div>
                    </div>

                    {/* Sample Comments */}
                    <div className="space-y-4">
                      {[
                        { name: 'Sarah Mitchell', time: '2 hours ago', comment: 'Excellent performance! Very impressive range.' },
                        { name: 'Rajesh Kumar', time: '5 hours ago', comment: 'Great work! Looking forward to seeing more.' },
                        { name: 'Emma Rodriguez', time: '1 day ago', comment: 'Wonderful audition. Best of luck!' }
                      ].map((comment, index) => (
                        <div key={index} className="flex space-x-3">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <i className="ri-user-line text-gray-500 text-sm md:text-base"></i>
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                              <p className="font-medium text-gray-900 text-sm md:text-base">{comment.name}</p>
                              <p className="text-xs md:text-sm text-gray-500">{comment.time}</p>
                            </div>
                            <p className="text-sm md:text-base text-gray-700">{comment.comment}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Quick Actions */}
                  <div className="bg-gray-50 rounded-xl p-4 md:p-6">
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
                    <div className="space-y-3">
                      <button className="w-full bg-teal-600 text-white py-2.5 md:py-3 rounded-lg text-sm md:text-base font-medium hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap">
                        Shortlist Artist
                      </button>
                      <button className="w-full bg-white border-2 border-teal-600 text-teal-600 py-2.5 md:py-3 rounded-lg text-sm md:text-base font-medium hover:bg-teal-50 transition-colors cursor-pointer whitespace-nowrap">
                        Contact Artist
                      </button>
                      <button className="w-full bg-white border border-gray-300 text-gray-700 py-2.5 md:py-3 rounded-lg text-sm md:text-base font-medium hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap">
                        View Full Profile
                      </button>
                    </div>
                  </div>

                  {/* Related Videos */}
                  <div className="bg-gray-50 rounded-xl p-4 md:p-6">
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-4">More from this Artist</h4>
                    <div className="space-y-3">
                      {submissions
                        .filter(v => v.artistName === selectedVideo.artistName && v.id !== selectedVideo.id)
                        .slice(0, 3)
                        .map((video) => (
                          <div 
                            key={video.id}
                            onClick={() => setSelectedVideo(video)}
                            className="flex space-x-3 cursor-pointer hover:bg-white p-2 rounded-lg transition-colors"
                          >
                            <div className="w-20 h-14 md:w-24 md:h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                              <img 
                                src={video.videoThumbnail}
                                alt={video.artistName}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-gray-900 text-xs md:text-sm line-clamp-2">{video.artistName}</p>
                              <p className="text-xs text-gray-500">{video.views} views</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="bg-gray-50 rounded-xl p-4 md:p-6">
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Performance Stats</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm md:text-base text-gray-600">Views</span>
                        <span className="font-semibold text-gray-900 text-sm md:text-base">{selectedVideo.views}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm md:text-base text-gray-600">Likes</span>
                        <span className="font-semibold text-gray-900 text-sm md:text-base">{selectedVideo.likes}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm md:text-base text-gray-600">Comments</span>
                        <span className="font-semibold text-gray-900 text-sm md:text-base">{selectedVideo.comments}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm md:text-base text-gray-600">Engagement Rate</span>
                        <span className="font-semibold text-teal-600 text-sm md:text-base">
                          {Math.round(((selectedVideo.likes + selectedVideo.comments) / selectedVideo.views * 100) * 100) / 100}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-semibold text-gray-900">Apply for {audition.projectTitle}</h3>
                <button 
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer w-8 h-8 flex items-center justify-center"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>
              
              <form 
                className="space-y-6" 
                data-readdy-form 
                action="https://readdy.ai/api/form/d482v8l34biqimnfonrg" 
                method="POST" 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const data = new URLSearchParams();
                  for (const [key, value] of formData.entries()) {
                    if (value instanceof File) {
                      data.append(key, 'Uncollectable');
                    } else {
                      data.append(key, value as string);
                    }
                  }
                  
                  fetch('https://readdy.ai/api/form/d482v8l34biqimnfonrg', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: data
                  }).then(() => {
                    alert('Application submitted successfully! We will contact you soon.');
                    setShowApplicationForm(false);
                  }).catch(() => {
                    alert('Error submitting application. Please try again.');
                  });
                }}
              >
                <input type="hidden" name="audition_title" value={audition.projectTitle} />
                <input type="hidden" name="audition_id" value={audition.id} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input 
                      type="text" 
                      name="first_name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      name="last_name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                    <input 
                      type="number" 
                      name="age"
                      min="16"
                      max="80"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                      placeholder="Enter your age"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input 
                      type="text" 
                      name="location"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                      placeholder="City, State"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                  <select 
                    name="experience_level"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Select experience level</option>
                    <option value="beginner">Beginner (0-2 years)</option>
                    <option value="intermediate">Intermediate (3-5 years)</option>
                    <option value="experienced">Experienced (6-10 years)</option>
                    <option value="professional">Professional (10+ years)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter *</label>
                  <textarea 
                    name="cover_letter"
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
                    placeholder="Tell us why you're perfect for this role..."
                    required
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">Maximum 500 characters</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Headshot/Photo *</label>
                  <input 
                    type="file" 
                    name="headshot"
                    accept="image/*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Upload your professional headshot (JPG, PNG)</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Demo Reel/Video</label>
                  <input 
                    type="file" 
                    name="demo_video"
                    accept="video/*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">Upload your demo reel or audition video (MP4, MOV)</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Audio Sample</label>
                  <input 
                    type="file" 
                    name="audio_sample"
                    accept="audio/*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">Upload voice sample or audio demo (MP3, WAV)</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Resume/CV</label>
                  <input 
                    type="file" 
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">Upload your resume (PDF, DOC, DOCX)</p>
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    name="terms_agreement"
                    className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 mt-1" 
                    required
                  />
                  <label className="ml-3 text-sm text-gray-600">
                    I agree to the terms and conditions and confirm that all information provided is accurate. I understand that false information may result in disqualification. *
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    name="contact_permission"
                    className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 mt-1" 
                  />
                  <label className="ml-3 text-sm text-gray-600">
                    I give permission to be contacted regarding this audition and future opportunities.
                  </label>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-teal-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Submit Application
                </button>
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
