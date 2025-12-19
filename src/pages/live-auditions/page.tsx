import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LiveAuditions() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const liveAuditions = [
    {
      id: 1,
      title: 'Broadway Musical Callbacks',
      company: 'Broadway Productions Inc.',
      type: 'Music',
      category: 'Musical Theater',
      location: 'New York, NY',
      viewers: 2847,
      status: 'live',
      startTime: 'Now',
      duration: '2 hours',
      host: 'Robert Thompson',
      hostImage: 'https://readdy.ai/api/search-image?query=Professional%20theater%20director%20headshot%2C%20confident%20male%20director%20in%20his%2040s%2C%20professional%20portrait%20with%20warm%20lighting%20and%20contemporary%20style&width=100&height=100&seq=host001&orientation=squarish',
      thumbnail: 'https://readdy.ai/api/search-image?query=Broadway%20theater%20stage%20with%20musical%20performers%2C%20dramatic%20stage%20lighting%2C%20theater%20auditorium%2C%20musical%20production%20environment%20with%20warm%20spotlights%20and%20elegant%20theater%20atmosphere&width=600&height=400&seq=live001&orientation=landscape',
      description: 'Live callbacks for Midnight Dreams musical. Performers will audition in real-time with instant feedback from the director.',
      requirements: 'Singing, Dancing, Acting',
      compensation: '$1,500 - $3,000/week'
    },
    {
      id: 2,
      title: 'Fashion Week Model Casting',
      company: 'Elite Fashion Agency',
      type: 'Modeling',
      category: 'Fashion Show',
      location: 'New York, NY',
      viewers: 5234,
      status: 'live',
      startTime: 'Now',
      duration: '3 hours',
      host: 'Marcus Chen',
      hostImage: 'https://readdy.ai/api/search-image?query=Professional%20fashion%20director%20headshot%2C%20stylish%20Asian%20male%20in%20his%2030s%2C%20professional%20portrait%20with%20modern%20lighting%20and%20contemporary%20fashion%20style&width=100&height=100&seq=host002&orientation=squarish',
      thumbnail: 'https://readdy.ai/api/search-image?query=Fashion%20runway%20show%20with%20professional%20models%2C%20bright%20stage%20lighting%2C%20elegant%20fashion%20week%20atmosphere%2C%20contemporary%20fashion%20industry%20setting%20with%20clean%20minimalist%20design&width=600&height=400&seq=live002&orientation=landscape',
      description: 'Live runway auditions for Fashion Week 2024. Models will walk the runway and receive immediate feedback.',
      requirements: 'Runway Walking, Professional Posing',
      compensation: '$2,000 - $8,000'
    },
    {
      id: 3,
      title: 'Action Movie Stunt Auditions',
      company: 'Action Films Studio',
      type: 'Acting',
      category: 'Movie',
      location: 'Los Angeles, CA',
      viewers: 3891,
      status: 'upcoming',
      startTime: 'In 30 minutes',
      duration: '4 hours',
      host: 'Sarah Martinez',
      hostImage: 'https://readdy.ai/api/search-image?query=Professional%20female%20film%20director%20headshot%2C%20confident%20Hispanic%20woman%20in%20her%2030s%2C%20professional%20portrait%20with%20cinematic%20lighting%20and%20contemporary%20style&width=100&height=100&seq=host003&orientation=squarish',
      thumbnail: 'https://readdy.ai/api/search-image?query=Action%20movie%20set%20with%20stunt%20performers%2C%20dramatic%20lighting%2C%20film%20production%20environment%20with%20cameras%20and%20equipment%2C%20intense%20action%20scene%20setup&width=600&height=400&seq=live003&orientation=landscape',
      description: 'Live stunt auditions for upcoming action blockbuster. Performers will demonstrate martial arts and action sequences.',
      requirements: 'Martial Arts, Stunt Experience, Physical Fitness',
      compensation: '$10,000 - $30,000'
    },
    {
      id: 4,
      title: 'TV Commercial Voice Casting',
      company: 'VoiceCraft Productions',
      type: 'Voice Acting',
      category: 'Commercial',
      location: 'Remote',
      viewers: 1567,
      status: 'upcoming',
      startTime: 'In 1 hour',
      duration: '2 hours',
      host: 'Jennifer Walsh',
      hostImage: 'https://readdy.ai/api/search-image?query=Professional%20female%20voice%20director%20headshot%2C%20confident%20woman%20in%20her%2040s%2C%20professional%20portrait%20with%20warm%20lighting%20and%20contemporary%20style&width=100&height=100&seq=host004&orientation=squarish',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20voice%20recording%20studio%20with%20high-end%20microphone%2C%20soundproof%20booth%2C%20audio%20equipment%2C%20warm%20lighting%2C%20modern%20recording%20setup%20for%20voice%20acting&width=600&height=400&seq=live004&orientation=landscape',
      description: 'Live voice auditions for national commercial campaign. Voice actors will perform scripts and receive instant direction.',
      requirements: 'Voice Acting, Commercial Reading',
      compensation: '$3,000 - $10,000'
    },
    {
      id: 5,
      title: 'Dance Competition Finals',
      company: 'Dance Masters International',
      type: 'Dance',
      category: 'Competition',
      location: 'Miami, FL',
      viewers: 8923,
      status: 'live',
      startTime: 'Now',
      duration: '5 hours',
      host: 'Carlos Rodriguez',
      hostImage: 'https://readdy.ai/api/search-image?query=Professional%20male%20dance%20choreographer%20headshot%2C%20energetic%20Latino%20man%20in%20his%2030s%2C%20professional%20portrait%20with%20dynamic%20lighting%20and%20contemporary%20style&width=100&height=100&seq=host005&orientation=squarish',
      thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20dance%20studio%20with%20dancers%20performing%2C%20dramatic%20stage%20lighting%2C%20contemporary%20dance%20environment%20with%20mirrors%20and%20modern%20atmosphere&width=600&height=400&seq=live005&orientation=landscape',
      description: 'Live finals for international dance competition. Dancers will perform choreographed routines with live judging.',
      requirements: 'Contemporary Dance, Hip Hop, Ballet',
      compensation: '$5,000 - $20,000 prize'
    },
    {
      id: 6,
      title: 'Comedy Stand-Up Showcase',
      company: 'Laugh Factory Productions',
      type: 'Comedy',
      category: 'Stand-Up',
      location: 'Chicago, IL',
      viewers: 4521,
      status: 'upcoming',
      startTime: 'In 2 hours',
      duration: '3 hours',
      host: 'Mike Johnson',
      hostImage: 'https://readdy.ai/api/search-image?query=Professional%20male%20comedy%20director%20headshot%2C%20friendly%20man%20in%20his%2040s%2C%20professional%20portrait%20with%20warm%20lighting%20and%20approachable%20style&width=100&height=100&seq=host006&orientation=squarish',
      thumbnail: 'https://readdy.ai/api/search-image?query=Comedy%20club%20stage%20with%20microphone%2C%20spotlight%2C%20intimate%20performance%20venue%2C%20warm%20lighting%20and%20contemporary%20comedy%20club%20atmosphere&width=600&height=400&seq=live006&orientation=landscape',
      description: 'Live stand-up comedy auditions for new comedy special. Comedians will perform 5-minute sets with live audience feedback.',
      requirements: 'Stand-Up Comedy, Original Material',
      compensation: '$2,000 - $5,000'
    }
  ];

  const filteredAuditions = liveAuditions.filter(audition => {
    return selectedCategory === 'all' || audition.type.toLowerCase() === selectedCategory.toLowerCase();
  });

  const liveNow = filteredAuditions.filter(a => a.status === 'live');
  const upcoming = filteredAuditions.filter(a => a.status === 'upcoming');

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
                style={{ fontFamily: '"Pacifico", serif' }}
              >
                Media Audition
              </button>
            </div>
            
            <div className="flex items-center space-x-8">
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
              <button 
                onClick={() => navigate('/live-auditions')}
                className="text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Live Auditions
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 animate-pulse">
              <div className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></div>
              <span className="font-semibold">LIVE NOW</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Live Auditions</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Watch and participate in real-time auditions. Get instant feedback from directors and casting professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Live
            </button>
            <button
              onClick={() => setSelectedCategory('acting')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'acting' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Acting
            </button>
            <button
              onClick={() => setSelectedCategory('modeling')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'modeling' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Modeling
            </button>
            <button
              onClick={() => setSelectedCategory('voice acting')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'voice acting' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Voice Acting
            </button>
            <button
              onClick={() => setSelectedCategory('music')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'music' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Music
            </button>
            <button
              onClick={() => setSelectedCategory('dance')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'dance' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Dance
            </button>
            <button
              onClick={() => setSelectedCategory('comedy')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'comedy' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Comedy
            </button>
          </div>
        </div>
      </section>

      {/* Live Now Section */}
      {liveNow.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Live Now</h2>
              <div className="flex items-center text-red-600">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-2 animate-pulse"></div>
                <span className="font-semibold">{liveNow.length} Live</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {liveNow.map((audition) => (
                <div key={audition.id} className="bg-white border-2 border-red-500 rounded-xl overflow-hidden hover:shadow-2xl transition-shadow relative">
                  {/* Live Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      LIVE
                    </span>
                  </div>
                  
                  {/* Viewers Count */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full flex items-center">
                      <i className="ri-eye-line mr-1 w-3 h-3 flex items-center justify-center"></i>
                      {audition.viewers.toLocaleString()}
                    </div>
                  </div>

                  <div className="relative h-56 bg-cover bg-center" style={{ backgroundImage: `url(${audition.thumbnail})` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={audition.hostImage} 
                        alt={audition.host}
                        className="w-12 h-12 rounded-full object-cover mr-3"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{audition.title}</h3>
                        <p className="text-sm text-gray-600">Hosted by {audition.host}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed line-clamp-2">{audition.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <i className="ri-building-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                        {audition.company}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <i className="ri-map-pin-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                        {audition.location}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <i className="ri-time-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                        Duration: {audition.duration}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => navigate(`/live-audition/${audition.id}`)}
                      className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
                    >
                      <i className="ri-play-circle-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                      Watch Live
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Section */}
      {upcoming.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Coming Up Next</h2>
              <span className="text-gray-600 font-medium">{upcoming.length} Scheduled</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcoming.map((audition) => (
                <div key={audition.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Upcoming Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      <i className="ri-calendar-line mr-1 w-3 h-3 flex items-center justify-center"></i>
                      {audition.startTime}
                    </span>
                  </div>

                  <div className="relative h-56 bg-cover bg-center" style={{ backgroundImage: `url(${audition.thumbnail})` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={audition.hostImage} 
                        alt={audition.host}
                        className="w-12 h-12 rounded-full object-cover mr-3"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{audition.title}</h3>
                        <p className="text-sm text-gray-600">Hosted by {audition.host}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed line-clamp-2">{audition.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <i className="ri-building-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                        {audition.company}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <i className="ri-map-pin-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                        {audition.location}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <i className="ri-time-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                        Duration: {audition.duration}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => navigate(`/live-audition/${audition.id}`)}
                      className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
                    >
                      <i className="ri-notification-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                      Set Reminder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Live Auditions Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience real-time auditions with instant feedback from industry professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-live-line text-3xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Join Live Stream</h3>
              <p className="text-gray-600 leading-relaxed">
                Click "Watch Live" to join the real-time audition stream. No downloads required.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-video-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Perform Live</h3>
              <p className="text-gray-600 leading-relaxed">
                When it's your turn, perform your audition piece in real-time for the casting team.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-feedback-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Instant Feedback</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive immediate feedback and direction from the casting director and panel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <button 
                onClick={() => navigate('/dashboard-selection')}
                className="cursor-pointer mb-4"
              >
                <img 
                  src="https://static.readdy.ai/image/f9554bb0a127440936ab2d922523a178/ec4d58932c64d6ee3d7b08e503ba65d2.png"
                  alt="Media Audition"
                  className="h-10"
                />
              </button>
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
                <li><button onClick={() => navigate('/')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</button></li>
                <li><button onClick={() => navigate('/auditions')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Current Auditions</button></li>
                <li><button onClick={() => navigate('/artists')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Find Artists</button></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a></li>
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
