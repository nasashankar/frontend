import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Shot {
  id: number;
  type: 'artist' | 'audition';
  title: string;
  creator: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  likes: number;
  comments: number;
  shares: number;
  views: string;
  description: string;
  tags: string[];
  creatorAvatar: string;
  creatorId: number;
}

export default function Shots() {
  const navigate = useNavigate();
  const [activeShot, setActiveShot] = useState(0);
  const [likedShots, setLikedShots] = useState<Set<number>>(new Set());
  const [followedCreators, setFollowedCreators] = useState<Set<number>>(new Set());
  const [showComments, setShowComments] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);

  const shots: Shot[] = [
    {
      id: 1,
      type: 'artist',
      title: 'Classical Dance Performance',
      creator: 'Priya Sharma',
      category: 'Acting',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20actress%20performing%20classical%20dance%2C%20elegant%20traditional%20costume%2C%20stage%20performance%20with%20dramatic%20lighting%20and%20cultural%20atmosphere&width=400&height=700&seq=shot001&orientation=portrait',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      likes: 15420,
      comments: 342,
      shares: 156,
      views: '125K',
      description: 'Showcasing my classical dance skills for upcoming auditions. Trained in Bharatanatyam for 10 years! 💃',
      tags: ['ClassicalDance', 'Acting', 'Audition', 'Talent'],
      creatorAvatar: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20actress%20headshot%2C%20confident%20expression%2C%20studio%20lighting%2C%20contemporary%20portrait%20photography%20with%20clean%20background&width=100&height=100&seq=avatar001&orientation=squarish',
      creatorId: 1
    },
    {
      id: 2,
      type: 'audition',
      title: 'Lead Role - Historical Drama',
      creator: 'Rajesh Productions',
      category: 'Acting Audition',
      thumbnail: 'https://readdy.ai/api/search-image?query=Historical%20drama%20film%20set%2C%20period%20costume%2C%20cinematic%20lighting%2C%20epic%20movie%20production%20environment%20with%20dramatic%20atmosphere%20and%20royal%20setting&width=400&height=700&seq=shot002&orientation=portrait',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      likes: 8920,
      comments: 234,
      shares: 89,
      views: '89K',
      description: 'Casting for lead role in upcoming historical drama. Age 25-35, experience in period films preferred. Shooting starts March 2024.',
      tags: ['Audition', 'HistoricalDrama', 'LeadRole', 'Acting'],
      creatorAvatar: 'https://readdy.ai/api/search-image?query=Professional%20film%20production%20company%20logo%2C%20cinematic%20design%2C%20modern%20corporate%20branding%20with%20elegant%20styling&width=100&height=100&seq=avatar002&orientation=squarish',
      creatorId: 2
    },
    {
      id: 3,
      type: 'artist',
      title: 'Action Sequence Demo',
      creator: 'Arjun Reddy',
      category: 'Acting',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20male%20actor%20performing%20action%20sequence%2C%20martial%20arts%20moves%2C%20dynamic%20action%20scene%20with%20intense%20lighting%20and%20powerful%20atmosphere&width=400&height=700&seq=shot003&orientation=portrait',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      likes: 23450,
      comments: 567,
      shares: 234,
      views: '234K',
      description: 'Martial arts training paying off! Ready for action roles. Trained in Kalaripayattu and Taekwondo 🥋',
      tags: ['ActionSequence', 'MartialArts', 'Acting', 'Stunt'],
      creatorAvatar: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20actor%20headshot%2C%20strong%20confident%20expression%2C%20studio%20lighting%2C%20contemporary%20portrait%20photography&width=100&height=100&seq=avatar003&orientation=squarish',
      creatorId: 3
    },
    {
      id: 4,
      type: 'artist',
      title: 'Fashion Runway Walk',
      creator: 'Sophia Williams',
      category: 'Modeling',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20fashion%20model%20on%20runway%2C%20elegant%20walk%2C%20high%20fashion%20show%20with%20bright%20stage%20lighting%20and%20sophisticated%20atmosphere&width=400&height=700&seq=shot004&orientation=portrait',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      likes: 18760,
      comments: 423,
      shares: 178,
      views: '156K',
      description: 'Behind the scenes from Lakme Fashion Week 2024. Living my dream on the runway! ✨',
      tags: ['Fashion', 'Modeling', 'Runway', 'FashionWeek'],
      creatorAvatar: 'https://readdy.ai/api/search-image?query=Professional%20fashion%20model%20headshot%2C%20elegant%20expression%2C%20high-end%20studio%20lighting%2C%20contemporary%20portrait%20photography&width=100&height=100&seq=avatar004&orientation=squarish',
      creatorId: 4
    },
    {
      id: 5,
      type: 'audition',
      title: 'Voice Over - Animation Film',
      creator: 'Dream Studios',
      category: 'Voice Acting',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20voice%20recording%20studio%2C%20high-end%20microphone%2C%20soundproof%20booth%2C%20animation%20character%20artwork%2C%20colorful%20creative%20environment&width=400&height=700&seq=shot005&orientation=portrait',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      likes: 12340,
      comments: 289,
      shares: 134,
      views: '98K',
      description: 'Seeking talented voice artists for animated feature film. Multiple character roles available. Auditions open till Feb 2024.',
      tags: ['VoiceOver', 'Animation', 'Audition', 'VoiceActing'],
      creatorAvatar: 'https://readdy.ai/api/search-image?query=Animation%20studio%20logo%2C%20creative%20design%2C%20colorful%20branding%20with%20playful%20artistic%20styling&width=100&height=100&seq=avatar005&orientation=squarish',
      creatorId: 5
    },
    {
      id: 6,
      type: 'artist',
      title: 'Playback Singing Demo',
      creator: 'Meera Nair',
      category: 'Music',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20female%20singer%20in%20recording%20studio%2C%20singing%20with%20emotion%2C%20warm%20lighting%2C%20musical%20instruments%2C%20contemporary%20recording%20environment&width=400&height=700&seq=shot006&orientation=portrait',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      likes: 34560,
      comments: 789,
      shares: 345,
      views: '345K',
      description: 'Recording my latest composition. Available for playback singing opportunities. Classical meets contemporary! 🎵',
      tags: ['Singing', 'Music', 'Playback', 'Classical'],
      creatorAvatar: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20singer%20headshot%2C%20melodious%20expression%2C%20studio%20lighting%2C%20contemporary%20portrait%20photography&width=100&height=100&seq=avatar006&orientation=squarish',
      creatorId: 6
    },
    {
      id: 7,
      type: 'audition',
      title: 'Commercial Ad - Fitness Brand',
      creator: 'Fitness First Productions',
      category: 'Modeling',
      thumbnail: 'https://readdy.ai/api/search-image?query=Fitness%20model%20photoshoot%2C%20athletic%20physique%2C%20gym%20environment%2C%20commercial%20photography%20with%20energetic%20lighting%20and%20motivational%20atmosphere&width=400&height=700&seq=shot007&orientation=portrait',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      likes: 9870,
      comments: 198,
      shares: 87,
      views: '76K',
      description: 'Casting fitness models for national commercial campaign. Athletic build required. Shoot dates: March 15-20, 2024.',
      tags: ['Commercial', 'Fitness', 'Modeling', 'Audition'],
      creatorAvatar: 'https://readdy.ai/api/search-image?query=Fitness%20brand%20logo%2C%20athletic%20design%2C%20modern%20corporate%20branding%20with%20energetic%20styling&width=100&height=100&seq=avatar007&orientation=squarish',
      creatorId: 7
    },
    {
      id: 8,
      type: 'artist',
      title: 'Emotional Monologue',
      creator: 'Priya Sharma',
      category: 'Acting',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20actress%20performing%20emotional%20scene%2C%20dramatic%20expression%2C%20theatrical%20lighting%2C%20intense%20performance%20with%20powerful%20atmosphere&width=400&height=700&seq=shot008&orientation=portrait',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      likes: 19870,
      comments: 456,
      shares: 189,
      views: '167K',
      description: 'Practicing emotional range for upcoming drama auditions. Method acting at its finest! 🎭',
      tags: ['Acting', 'Drama', 'Monologue', 'Emotional'],
      creatorAvatar: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20actress%20headshot%2C%20confident%20expression%2C%20studio%20lighting%2C%20contemporary%20portrait%20photography%20with%20clean%20background&width=100&height=100&seq=avatar001&orientation=squarish',
      creatorId: 1
    }
  ];

  useEffect(() => {
    // Auto-play current video
    if (videoRefs.current[activeShot]) {
      videoRefs.current[activeShot]?.play();
    }
  }, [activeShot]);

  const handleScroll = (e: React.WheelEvent) => {
    if (e.deltaY > 0 && activeShot < shots.length - 1) {
      setActiveShot(activeShot + 1);
    } else if (e.deltaY < 0 && activeShot > 0) {
      setActiveShot(activeShot - 1);
    }
  };

  const handleLike = (shotId: number) => {
    setLikedShots(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(shotId)) {
        newLiked.delete(shotId);
      } else {
        newLiked.add(shotId);
      }
      return newLiked;
    });
  };

  const handleFollow = (creatorId: number) => {
    setFollowedCreators(prev => {
      const newFollowed = new Set(prev);
      if (newFollowed.has(creatorId)) {
        newFollowed.delete(creatorId);
      } else {
        newFollowed.add(creatorId);
      }
      return newFollowed;
    });
  };

  const handleShare = (shot: Shot) => {
    if (navigator.share) {
      navigator.share({
        title: shot.title,
        text: `Check out this shot: ${shot.title} by ${shot.creator}`,
        url: window.location.origin + `/shots/${shot.id}`
      });
    } else {
      navigator.clipboard.writeText(window.location.origin + `/shots/${shot.id}`);
      alert('Shot link copied to clipboard!');
    }
    setShowShare(false);
  };

  const togglePlayPause = () => {
    const video = videoRefs.current[activeShot];
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const currentShot = shots[activeShot];

  return (
    <div className="h-screen bg-black overflow-hidden">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center justify-between px-4 py-3">
          <button 
            onClick={() => navigate('/')}
            className="cursor-pointer flex items-center"
          >
            <img 
              src="https://static.readdy.ai/image/f9554bb0a127440936ab2d922523a178/298fbdfef9c03fe40ef57ca9c08a88b2.png" 
              alt="Media Audition" 
              className="h-8 w-auto"
            />
          </button>
          
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-teal-400 transition-colors cursor-pointer">
              <i className="ri-search-line text-xl w-6 h-6 flex items-center justify-center"></i>
            </button>
            <button className="text-white hover:text-teal-400 transition-colors cursor-pointer">
              <i className="ri-notification-line text-xl w-6 h-6 flex items-center justify-center"></i>
            </button>
            <button 
              onClick={() => navigate('/')}
              className="text-white hover:text-teal-400 transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-2xl w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Shots Container */}
      <div 
        className="relative h-full w-full"
        onWheel={handleScroll}
      >
        {/* Video Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-full h-full max-w-md bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${currentShot.thumbnail})` }}
            onClick={togglePlayPause}
          >
            {/* Play/Pause Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                  <i className="ri-play-fill text-4xl text-black"></i>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end justify-between max-w-md mx-auto">
          {/* Left Side - Info */}
          <div className="flex-1 p-6 pb-24 text-white">
            {/* Creator Info */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                <img src={currentShot.creatorAvatar} alt={currentShot.creator} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{currentShot.creator}</h3>
                <p className="text-sm text-gray-300">{currentShot.views} views</p>
              </div>
              <button
                onClick={() => handleFollow(currentShot.creatorId)}
                className={`px-4 py-1 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  followedCreators.has(currentShot.creatorId)
                    ? 'bg-gray-600 text-white'
                    : 'bg-teal-600 text-white hover:bg-teal-700'
                }`}
              >
                {followedCreators.has(currentShot.creatorId) ? 'Following' : 'Follow'}
              </button>
            </div>

            {/* Title & Description */}
            <h2 className="text-xl font-bold mb-2">{currentShot.title}</h2>
            <p className="text-sm text-gray-200 mb-3 line-clamp-2">{currentShot.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {currentShot.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Category Badge */}
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
              currentShot.type === 'artist' 
                ? 'bg-teal-600 text-white' 
                : 'bg-purple-600 text-white'
            }`}>
              {currentShot.type === 'artist' ? 'Artist Showcase' : 'Audition Opportunity'}
            </span>
          </div>

          {/* Right Side - Actions */}
          <div className="flex flex-col items-center space-y-6 p-6 pb-24">
            {/* Like */}
            <button
              onClick={() => handleLike(currentShot.id)}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                likedShots.has(currentShot.id)
                  ? 'bg-red-600 text-white'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}>
                <i className={`${likedShots.has(currentShot.id) ? 'ri-heart-fill' : 'ri-heart-line'} text-2xl`}></i>
              </div>
              <span className="text-white text-xs mt-1">
                {likedShots.has(currentShot.id) ? currentShot.likes + 1 : currentShot.likes}
              </span>
            </button>

            {/* Comment */}
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="ri-chat-3-line text-2xl text-white"></i>
              </div>
              <span className="text-white text-xs mt-1">{currentShot.comments}</span>
            </button>

            {/* Share */}
            <button
              onClick={() => handleShare(currentShot)}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="ri-share-forward-line text-2xl text-white"></i>
              </div>
              <span className="text-white text-xs mt-1">{currentShot.shares}</span>
            </button>

            {/* View Profile/Details */}
            <button
              onClick={() => {
                if (currentShot.type === 'artist') {
                  navigate(`/artist/${currentShot.creatorId}`);
                } else {
                  navigate(`/audition/${currentShot.id}`);
                }
              }}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="ri-information-line text-2xl text-white"></i>
              </div>
              <span className="text-white text-xs mt-1">Details</span>
            </button>
          </div>
        </div>

        {/* Navigation Indicators */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
          {shots.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveShot(index)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                index === activeShot 
                  ? 'bg-white h-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Scroll Hint */}
        {activeShot === 0 && (
          <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce">
            <i className="ri-arrow-down-line text-2xl"></i>
            <p className="text-xs mt-1">Scroll for more</p>
          </div>
        )}
      </div>

      {/* Comments Modal */}
      {showComments && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end">
          <div className="bg-white w-full max-w-md mx-auto rounded-t-3xl max-h-[70vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                {currentShot.comments} Comments
              </h3>
              <button
                onClick={() => setShowComments(false)}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            
            <div className="p-4 space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <i className="ri-user-line text-gray-500"></i>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">User {i}</p>
                    <p className="text-sm text-gray-600">Amazing performance! Keep it up! 🔥</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span>2h ago</span>
                      <button className="hover:text-teal-600 cursor-pointer">Reply</button>
                      <button className="hover:text-red-600 cursor-pointer">Like</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                />
                <button className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors cursor-pointer">
                  <i className="ri-send-plane-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
