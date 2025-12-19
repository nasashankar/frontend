import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface LiveComment {
  id: number;
  user: string;
  avatar: string;
  message: string;
  timestamp: string;
  isDirector: boolean;
}

interface LiveViewer {
  id: number;
  name: string;
  avatar: string;
}

export default function LiveStream() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLive, setIsLive] = useState(true);
  const [viewerCount, setViewerCount] = useState(1247);
  const [likes, setLikes] = useState(3456);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState<LiveComment[]>([
    {
      id: 1,
      user: 'Marcus Chen',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20male%20director%20headshot%2C%20confident%20expression%2C%20studio%20lighting%2C%20contemporary%20portrait%20photography&width=100&height=100&seq=director001&orientation=squarish',
      message: 'Great energy! Love the emotion in your performance.',
      timestamp: '2 min ago',
      isDirector: true
    },
    {
      id: 2,
      user: 'Sarah Johnson',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20female%20casting%20director%20headshot%2C%20friendly%20expression%2C%20studio%20lighting%2C%20contemporary%20portrait%20photography&width=100&height=100&seq=casting001&orientation=squarish',
      message: 'Excellent voice projection! Can you try the scene again with more intensity?',
      timestamp: '3 min ago',
      isDirector: true
    },
    {
      id: 3,
      user: 'Alex Kumar',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20male%20viewer%20headshot%2C%20casual%20expression%2C%20studio%20lighting%2C%20contemporary%20portrait%20photography&width=100&height=100&seq=viewer001&orientation=squarish',
      message: 'This is amazing! 🔥🔥🔥',
      timestamp: '4 min ago',
      isDirector: false
    },
    {
      id: 4,
      user: 'Emily Chen',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20female%20viewer%20headshot%2C%20smiling%20expression%2C%20studio%20lighting%2C%20contemporary%20portrait%20photography&width=100&height=100&seq=viewer002&orientation=squarish',
      message: 'So talented! Good luck! 💫',
      timestamp: '5 min ago',
      isDirector: false
    }
  ]);
  const [newComment, setNewComment] = useState('');
  const [showChat, setShowChat] = useState(true);
  const [showViewers, setShowViewers] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const commentsEndRef = useRef<HTMLDivElement>(null);

  const audition = {
    id: parseInt(id || '1'),
    title: 'Fashion Week Model - Live Audition',
    director: 'Marcus Chen',
    productionCompany: 'Elite Fashion Agency',
    category: 'Modeling',
    currentPerformer: 'Sophia Williams',
    performerAvatar: 'https://readdy.ai/api/search-image?query=Professional%20fashion%20model%20headshot%2C%20elegant%20expression%2C%20high-end%20studio%20lighting%2C%20contemporary%20portrait%20photography&width=100&height=100&seq=performer001&orientation=squarish',
    streamThumbnail: 'https://readdy.ai/api/search-image?query=Professional%20fashion%20runway%20show%20with%20model%20walking%2C%20bright%20stage%20lighting%2C%20elegant%20fashion%20week%20atmosphere%2C%20live%20streaming%20setup%20with%20cameras%20and%20professional%20equipment&width=1200&height=675&seq=livestream001&orientation=landscape',
    scheduledTime: '2:00 PM - 6:00 PM EST',
    nextPerformer: 'James Rodriguez',
    queueCount: 12
  };

  const viewers: LiveViewer[] = [
    { id: 1, name: 'Marcus Chen', avatar: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20male%20director%20headshot%2C%20confident%20expression%2C%20studio%20lighting&width=100&height=100&seq=director001&orientation=squarish' },
    { id: 2, name: 'Sarah Johnson', avatar: 'https://readdy.ai/api/search-image?query=Professional%20female%20casting%20director%20headshot%2C%20friendly%20expression%2C%20studio%20lighting&width=100&height=100&seq=casting001&orientation=squarish' },
    { id: 3, name: 'Alex Kumar', avatar: 'https://readdy.ai/api/search-image?query=Professional%20male%20viewer%20headshot%2C%20casual%20expression%2C%20studio%20lighting&width=100&height=100&seq=viewer001&orientation=squarish' },
    { id: 4, name: 'Emily Chen', avatar: 'https://readdy.ai/api/search-image?query=Professional%20female%20viewer%20headshot%2C%20smiling%20expression%2C%20studio%20lighting&width=100&height=100&seq=viewer002&orientation=squarish' },
    { id: 5, name: 'David Park', avatar: 'https://readdy.ai/api/search-image?query=Professional%20male%20viewer%20headshot%2C%20professional%20expression%2C%20studio%20lighting&width=100&height=100&seq=viewer003&orientation=squarish' }
  ];

  useEffect(() => {
    // Simulate viewer count changes
    const viewerInterval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 10) - 4);
    }, 5000);

    // Simulate new comments
    const commentInterval = setInterval(() => {
      const randomComments = [
        'Amazing performance! 👏',
        'Keep it up! 🌟',
        'So professional! 💯',
        'Love the energy! ⚡',
        'Incredible talent! 🎭'
      ];
      const randomComment = randomComments[Math.floor(Math.random() * randomComments.length)];
      
      setComments(prev => [...prev, {
        id: Date.now(),
        user: `Viewer ${Math.floor(Math.random() * 1000)}`,
        avatar: 'https://readdy.ai/api/search-image?query=Professional%20viewer%20headshot%2C%20friendly%20expression%2C%20studio%20lighting&width=100&height=100&seq=viewer' + Math.random() + '&orientation=squarish',
        message: randomComment,
        timestamp: 'Just now',
        isDirector: false
      }]);
    }, 15000);

    return () => {
      clearInterval(viewerInterval);
      clearInterval(commentInterval);
    };
  }, []);

  useEffect(() => {
    commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [comments]);

  const handleSendComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, {
        id: Date.now(),
        user: 'You',
        avatar: 'https://readdy.ai/api/search-image?query=Professional%20user%20headshot%2C%20friendly%20expression%2C%20studio%20lighting&width=100&height=100&seq=currentuser&orientation=squarish',
        message: newComment,
        timestamp: 'Just now',
        isDirector: false
      }]);
      setNewComment('');
    }
  };

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setHasLiked(!hasLiked);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
             <img 
                src="https://static.readdy.ai/image/f9554bb0a127440936ab2d922523a178/298fbdfef9c03fe40ef57ca9c08a88b2.png" 
                alt="Media Audition" 
                className="h-10 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => navigate('/')}
                className="text-gray-300 hover:text-teal-400 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => navigate('/auditions')}
                className="text-gray-300 hover:text-teal-400 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Find Audition
              </button>
              <button 
                onClick={() => navigate('/artists')}
                className="text-gray-300 hover:text-teal-400 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Find Artist
              </button>
              <button 
                onClick={() => navigate('/shots')}
                className="text-gray-300 hover:text-teal-400 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Shots
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-teal-400 cursor-pointer w-10 h-10 flex items-center justify-center"
            >
              <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => {
                    navigate('/');
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-teal-400 hover:bg-gray-800 px-4 py-3 text-sm font-medium cursor-pointer text-left rounded-lg"
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    navigate('/auditions');
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-teal-400 hover:bg-gray-800 px-4 py-3 text-sm font-medium cursor-pointer text-left rounded-lg"
                >
                  Find Audition
                </button>
                <button 
                  onClick={() => {
                    navigate('/artists');
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-teal-400 hover:bg-gray-800 px-4 py-3 text-sm font-medium cursor-pointer text-left rounded-lg"
                >
                  Find Artist
                </button>
                <button 
                  onClick={() => {
                    navigate('/shots');
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-teal-400 hover:bg-gray-800 px-4 py-3 text-sm font-medium cursor-pointer text-left rounded-lg"
                >
                  Shots
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Stream */}
          <div className="lg:col-span-2">
            {/* Stream Player */}
            <div className="bg-black rounded-xl overflow-hidden mb-4 relative aspect-video">
              <img 
                src={audition.streamThumbnail} 
                alt="Live Stream" 
                className="w-full h-full object-cover"
              />
              
              {/* Live Indicator Overlay */}
              <div className="absolute top-4 left-4 bg-red-600 px-3 py-1 rounded-full flex items-center animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                <span className="text-white text-sm font-semibold">LIVE</span>
              </div>
              
              {/* Current Performer Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img 
                    src={audition.performerAvatar} 
                    alt={audition.currentPerformer}
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <div>
                    <p className="text-white font-semibold text-lg">{audition.currentPerformer}</p>
                    <p className="text-gray-300 text-sm">Currently Performing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stream Info */}
            <div className="bg-gray-800 rounded-xl p-6 mb-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-white mb-2">{audition.title}</h1>
                  <p className="text-gray-400 mb-3">{audition.productionCompany}</p>
                  <div className="flex items-center space-x-4">
                    <span className="inline-block bg-teal-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {audition.category}
                    </span>
                    <span className="text-gray-400 text-sm">
                      <i className="ri-calendar-line mr-1 w-4 h-4 inline-flex items-center justify-center"></i>
                      {audition.scheduledTime}
                    </span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleLike}
                    className={`flex flex-col items-center cursor-pointer transition-colors ${
                      hasLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                    }`}
                  >
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                      <i className={`${hasLiked ? 'ri-heart-fill' : 'ri-heart-line'} text-2xl`}></i>
                    </div>
                    <span className="text-xs mt-1">{likes.toLocaleString()}</span>
                  </button>
                  
                  <button className="flex flex-col items-center text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                      <i className="ri-share-forward-line text-2xl"></i>
                    </div>
                    <span className="text-xs mt-1">Share</span>
                  </button>
                </div>
              </div>

              {/* Director Info */}
              <div className="border-t border-gray-700 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Hosted by</p>
                    <p className="text-white font-semibold">{audition.director}</p>
                  </div>
                  <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer">
                    Follow
                  </button>
                </div>
              </div>
            </div>

            {/* Queue Info */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-white font-semibold text-lg mb-4">Performance Queue</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <i className="ri-play-fill text-white"></i>
                    </div>
                    <div>
                      <p className="text-white font-medium">{audition.currentPerformer}</p>
                      <p className="text-gray-400 text-sm">Currently Performing</p>
                    </div>
                  </div>
                  <span className="text-green-400 text-sm font-semibold">LIVE NOW</span>
                </div>
                
                <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white font-semibold">
                      2
                    </div>
                    <div>
                      <p className="text-white font-medium">{audition.nextPerformer}</p>
                      <p className="text-gray-400 text-sm">Up Next</p>
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm">~5 min</span>
                </div>
                
                <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                      <i className="ri-group-line text-white"></i>
                    </div>
                    <div>
                      <p className="text-white font-medium">{audition.queueCount} more performers</p>
                      <p className="text-gray-400 text-sm">In queue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl overflow-hidden h-[calc(100vh-120px)] flex flex-col">
              {/* Chat Header */}
              <div className="bg-gray-700 p-4 border-b border-gray-600">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">Live Chat</h3>
                  <button
                    onClick={() => setShowChat(!showChat)}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <i className={`${showChat ? 'ri-eye-line' : 'ri-eye-off-line'} text-xl w-5 h-5 flex items-center justify-center`}></i>
                  </button>
                </div>
              </div>

              {/* Comments List */}
              {showChat && (
                <>
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {comments.map((comment) => (
                      <div key={comment.id} className="flex space-x-3">
                        <img 
                          src={comment.avatar} 
                          alt={comment.user}
                          className="w-8 h-8 rounded-full flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className={`font-medium text-sm ${
                              comment.isDirector ? 'text-teal-400' : 'text-white'
                            }`}>
                              {comment.user}
                            </span>
                            {comment.isDirector && (
                              <span className="bg-teal-600 text-white text-xs px-2 py-0.5 rounded-full">
                                Director
                              </span>
                            )}
                          </div>
                          <p className="text-gray-300 text-sm break-words">{comment.message}</p>
                          <span className="text-gray-500 text-xs">{comment.timestamp}</span>
                        </div>
                      </div>
                    ))}
                    <div ref={commentsEndRef} />
                  </div>

                  {/* Comment Input */}
                  <div className="bg-gray-700 p-4 border-t border-gray-600">
                    <form onSubmit={handleSendComment} className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Send a message..."
                        className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none text-sm"
                      />
                      <button
                        type="submit"
                        className="bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-700 transition-colors cursor-pointer w-10 h-10 flex items-center justify-center"
                      >
                        <i className="ri-send-plane-fill"></i>
                      </button>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Viewers Modal */}
      {showViewers && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-4 flex items-center justify-between">
              <h3 className="text-white font-semibold text-lg">
                Viewers ({viewerCount.toLocaleString()})
              </h3>
              <button
                onClick={() => setShowViewers(false)}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            
            <div className="p-4 space-y-3">
              {viewers.map((viewer) => (
                <div key={viewer.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={viewer.avatar} 
                      alt={viewer.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="text-white font-medium">{viewer.name}</span>
                  </div>
                  <button className="text-teal-400 hover:text-teal-300 text-sm cursor-pointer whitespace-nowrap">
                    Follow
                  </button>
                </div>
              ))}
              
              <div className="text-center py-4">
                <p className="text-gray-400 text-sm">
                  + {(viewerCount - viewers.length).toLocaleString()} more viewers
                </p>
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
