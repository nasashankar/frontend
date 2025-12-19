import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function AuditionDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const auditions = [
    {
      id: 1,
      // Basic Audition Details
      projectTitle: 'Kantara 3',
      productionCompany: 'Pix Rock Entertainment',
      mediaType: 'Movie',
      directorName: 'Ram',
      category: 'Acting',
      shootDates: '10–15 May 2026',
      auditionType: 'Open',
      shootLocation: 'Coimbatore',
      
      // Role Requirements
      referenceVideo: 'https://www.youtube.com/watch?v=example',
      roleName: 'Lead Actor',
      gender: 'Male',
      ageRange: '18–30',
      languageRequirement: 'Tamil / English',
      skillsRequired: 'Dancing, Singing, Martial Arts',
      experienceLevel: 'Intermediate',
      description: 'Confident male actor for emotional short film scene.',
      
      // Location & Contact
      location: 'Chennai, Tamil Nadu',
      address: 'No.12, Mount Road, Chennai',
      googleMapLink: 'https://maps.google.com/example',
      contactName: 'Mr. Arun, Casting Director',
      contactNumber: '+91 9876543210',
      email: 'info@casting.com',
      
      // Audition Schedule
      auditionPostedDate: '25-Jan-2026',
      auditionTime: '10:00 AM – 4:00 PM',
      lastDateToApply: '20-Mar-2025',
      
      // Privacy Type
      privacyType: 'public',
      
      // Legacy fields for compatibility
      type: 'Acting',
      deadline: '20-Mar-2025',
      compensation: '$5,000 - $15,000',
      image: 'https://readdy.ai/api/search-image?query=Professional%20film%20set%20with%20director%20and%20actors%2C%20cinematic%20lighting%2C%20movie%20production%20environment%2C%20cameras%20and%20equipment%2C%20dramatic%20scene%20setup%20with%20warm%20lighting%20and%20contemporary%20atmosphere&width=800&height=400&seq=detail001&orientation=landscape',
      fullDescription: 'We are casting for the lead roles in "Kantara 3," an upcoming movie that explores themes of family, tradition, and modern conflicts. This is a character-driven story that requires actors who can bring depth and authenticity to complex emotional scenes. The film will be shot over 6 days in Coimbatore and surrounding areas.',
      auditionDate: '20-Mar-2025',
      auditionLocation: 'No.12, Mount Road, Chennai'
    },
    {
      id: 2,
      // Basic Audition Details
      projectTitle: 'Fashion Week Model',
      productionCompany: 'Elite Fashion Agency',
      mediaType: 'Fashion Show',
      directorName: 'Marcus Chen',
      category: 'Modeling',
      shootDates: 'March 1 - March 8, 2024',
      auditionType: 'Selective',
      shootLocation: 'New York, NY',
      
      // Role Requirements
      referenceVideo: 'https://www.youtube.com/watch?v=fashion-example',
      roleName: 'Runway Model',
      gender: 'Female',
      ageRange: '18–28',
      languageRequirement: 'English',
      skillsRequired: 'Runway Walking, Professional Posing',
      experienceLevel: 'Professional',
      description: 'High-fashion runway models needed for upcoming Fashion Week shows.',
      
      // Location & Contact
      location: 'New York, NY',
      address: '789 7th Avenue, New York, NY',
      googleMapLink: 'https://maps.google.com/fashion-studio',
      contactName: 'Ms. Sarah, Fashion Director',
      contactNumber: '+1 555-0123',
      email: 'casting@elitefashion.com',
      
      // Audition Schedule
      auditionPostedDate: '15-Jan-2024',
      auditionTime: '9:00 AM – 6:00 PM',
      lastDateToApply: '20-Feb-2024',
      
      // Privacy Type
      privacyType: 'live',
      
      // Legacy fields
      type: 'Modeling',
      deadline: '2024-02-20',
      compensation: '$2,000 - $8,000',
      image: 'https://readdy.ai/api/search-image?query=Fashion%20runway%20show%20with%20professional%20models%2C%20bright%20stage%20lighting%2C%20elegant%20fashion%20week%20atmosphere%2C%20contemporary%20fashion%20industry%20setting%20with%20clean%20minimalist%20design&width=800&height=400&seq=detail002&orientation=landscape',
      fullDescription: 'Join the most prestigious fashion week in New York! We are seeking professional runway models for multiple high-end designer shows during Fashion Week 2024.',
      auditionDate: 'February 25, 2024',
      auditionLocation: 'Fashion District Studio, 789 7th Avenue, New York, NY'
    },
    {
      id: 3,
      // Basic Audition Details
      projectTitle: 'Tech Brand Commercial',
      productionCompany: 'VoiceCraft Productions',
      mediaType: 'Commercial',
      directorName: 'Jennifer Walsh',
      category: 'Voice Acting',
      shootDates: 'February 15 - February 20, 2024',
      auditionType: 'Remote',
      shootLocation: 'Remote',
      
      // Role Requirements
      referenceVideo: 'https://www.youtube.com/watch?v=voice-example',
      roleName: 'Commercial Voice Talent',
      gender: 'Any',
      ageRange: '25–45',
      languageRequirement: 'English (Native)',
      skillsRequired: 'Voice Acting, Commercial Reading',
      experienceLevel: 'Professional',
      description: 'National commercial campaign seeking distinctive voice talent.',
      
      // Location & Contact
      location: 'Remote',
      address: 'Remote audition via online platform',
      googleMapLink: '',
      contactName: 'Ms. Jennifer Walsh, Voice Director',
      contactNumber: '+1 555-0456',
      email: 'voice@voicecraft.com',
      
      // Audition Schedule
      auditionPostedDate: '01-Feb-2024',
      auditionTime: 'Flexible',
      lastDateToApply: '10-Feb-2024',
      
      // Privacy Type
      privacyType: 'private',
      
      // Legacy fields
      type: 'Voice Acting',
      deadline: '2024-02-10',
      compensation: '$3,000 - $10,000',
      image: 'https://readdy.ai/api/search-image?query=Professional%20voice%20recording%20studio%20with%20high-end%20microphone%2C%20soundproof%20booth%2C%20audio%20equipment%2C%20warm%20lighting%2C%20modern%20recording%20setup%20for%20voice%20acting%20and%20commercial%20work&width=800&height=400&seq=detail003&orientation=landscape',
      fullDescription: 'We are casting voice talent for a major national commercial campaign for a leading technology brand.',
      auditionDate: 'February 12, 2024',
      auditionLocation: 'Remote audition via online platform'
    },
    {
      id: 4,
      // Basic Audition Details
      projectTitle: 'Midnight Dreams',
      productionCompany: 'Broadway Productions Inc.',
      mediaType: 'Musical Theater',
      directorName: 'Robert Thompson',
      category: 'Music',
      shootDates: 'April 1, 2024 - December 31, 2024',
      auditionType: 'Live',
      shootLocation: 'New York, NY',
      
      // Role Requirements
      referenceVideo: 'https://www.youtube.com/watch?v=broadway-example',
      roleName: 'Ensemble Performer',
      gender: 'Any',
      ageRange: '20–35',
      languageRequirement: 'English',
      skillsRequired: 'Singing, Dancing, Acting',
      experienceLevel: 'Professional',
      description: 'Ensemble performers needed for new Broadway musical production.',
      
      // Location & Contact
      location: 'New York, NY',
      address: '225 W 44th St, New York, NY',
      googleMapLink: 'https://maps.google.com/shubert-theatre',
      contactName: 'Mr. Robert Thompson, Musical Director',
      contactNumber: '+1 555-0789',
      email: 'casting@broadwayproductions.com',
      
      // Audition Schedule
      auditionPostedDate: '10-Feb-2024',
      auditionTime: '10:00 AM – 6:00 PM',
      lastDateToApply: '25-Feb-2024',
      
      // Privacy Type
      privacyType: 'public',
      
      // Legacy fields
      type: 'Music',
      deadline: '2024-02-25',
      compensation: '$1,500 - $3,000/week',
      image: 'https://readdy.ai/api/search-image?query=Broadway%20theater%20stage%20with%20musical%20performers%2C%20dramatic%20stage%20lighting%2C%20theater%20auditorium%2C%20musical%20production%20environment%20with%20warm%20spotlights%20and%20elegant%20theater%20atmosphere&width=800&height=400&seq=detail004&orientation=landscape',
      fullDescription: 'Join the cast of "Midnight Dreams," a new Broadway musical that tells the story of love, loss, and hope in 1940s New York.',
      auditionDate: 'March 1, 2024',
      auditionLocation: 'Shubert Theatre, 225 W 44th St, New York, NY'
    },
    {
      id: 5,
      // Basic Audition Details
      projectTitle: 'Southern Secrets',
      productionCompany: 'Netflix Originals',
      mediaType: 'TV Series',
      directorName: 'Amanda Rodriguez',
      category: 'Acting',
      shootDates: 'May 1 - October 31, 2024',
      auditionType: 'Callback',
      shootLocation: 'Atlanta, GA',
      
      // Role Requirements
      referenceVideo: 'https://www.youtube.com/watch?v=netflix-example',
      roleName: 'Series Regular',
      gender: 'Any',
      ageRange: '20–40',
      languageRequirement: 'English',
      skillsRequired: 'Dramatic Acting, Southern Dialect',
      experienceLevel: 'Professional',
      description: 'Seeking actors for regular roles in new Netflix drama series.',
      
      // Location & Contact
      location: 'Atlanta, GA',
      address: '461 Sandy Creek Rd, Fayetteville, GA',
      googleMapLink: 'https://maps.google.com/pinewood-studios',
      contactName: 'Ms. Amanda Rodriguez, Series Director',
      contactNumber: '+1 555-0321',
      email: 'casting@netflix.com',
      
      // Audition Schedule
      auditionPostedDate: '05-Feb-2024',
      auditionTime: '9:00 AM – 5:00 PM',
      lastDateToApply: '18-Feb-2024',
      
      // Privacy Type
      privacyType: 'private',
      
      // Legacy fields
      type: 'Acting',
      deadline: '2024-02-18',
      compensation: '$15,000 - $25,000 per episode',
      image: 'https://readdy.ai/api/search-image?query=Television%20production%20set%20with%20professional%20cameras%2C%20lighting%20equipment%2C%20TV%20series%20filming%20environment%2C%20modern%20studio%20setup%20with%20dramatic%20lighting%20and%20contemporary%20atmosphere&width=800&height=400&seq=detail005&orientation=landscape',
      fullDescription: 'Netflix is casting for regular roles in "Southern Secrets," a new drama series set in modern-day Georgia.',
      auditionDate: 'February 22, 2024',
      auditionLocation: 'Pinewood Studios, 461 Sandy Creek Rd, Fayetteville, GA'
    },
    {
      id: 6,
      // Basic Audition Details
      projectTitle: 'Lifestyle Brand Campaign',
      productionCompany: 'Lifestyle Media Group',
      mediaType: 'Commercial Photography',
      directorName: 'Michael Park',
      category: 'Modeling',
      shootDates: 'February 20 - February 22, 2024',
      auditionType: 'Open',
      shootLocation: 'Chicago, IL',
      
      // Role Requirements
      referenceVideo: 'https://www.youtube.com/watch?v=lifestyle-example',
      roleName: 'Print Model',
      gender: 'Any',
      ageRange: 'All ages',
      languageRequirement: 'English',
      skillsRequired: 'Natural Posing, Commercial Modeling',
      experienceLevel: 'Beginner to Professional',
      description: 'Print models needed for lifestyle brand commercial campaign.',
      
      // Location & Contact
      location: 'Chicago, IL',
      address: '1520 N Fremont St, Chicago, IL',
      googleMapLink: 'https://maps.google.com/studio-chicago',
      contactName: 'Mr. Michael Park, Photography Director',
      contactNumber: '+1 555-0654',
      email: 'casting@lifestylemedia.com',
      
      // Audition Schedule
      auditionPostedDate: '01-Feb-2024',
      auditionTime: '10:00 AM – 4:00 PM',
      lastDateToApply: '12-Feb-2024',
      
      // Privacy Type
      privacyType: 'live',
      
      // Legacy fields
      type: 'Modeling',
      deadline: '2024-02-12',
      compensation: '$1,000 - $3,000',
      image: 'https://readdy.ai/api/search-image?query=Commercial%20photography%20studio%20with%20professional%20lighting%20setup%2C%20lifestyle%20brand%20photoshoot%20environment%2C%20clean%20modern%20studio%20with%20natural%20lighting%20and%20contemporary%20commercial%20atmosphere&width=800&height=400&seq=detail006&orientation=landscape',
      fullDescription: 'We are casting diverse models for a major lifestyle brand\'s spring campaign.',
      auditionDate: 'February 15, 2024',
      auditionLocation: 'Studio Chicago, 1520 N Fremont St, Chicago, IL'
    }
  ];

  const audition = auditions.find(a => a.id === parseInt(id || '1'));

  if (!audition) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Audition Not Found</h1>
          <button 
            onClick={() => navigate('/auditions')}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors cursor-pointer"
          >
            Back to Auditions
          </button>
        </div>
      </div>
    );
  }

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

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <button onClick={() => navigate('/')} className="hover:text-teal-600 cursor-pointer">Home</button>
            <i className="ri-arrow-right-s-line"></i>
            <button onClick={() => navigate('/auditions')} className="hover:text-teal-600 cursor-pointer">Auditions</button>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-gray-900">{audition.projectTitle}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="h-96 bg-cover bg-center relative" style={{ backgroundImage: `url(${audition.image})` }}>
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Privacy Type Badge */}
        <div className="absolute top-6 left-6">
          {audition.privacyType === 'private' && (
            <span className="inline-flex items-center bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-full">
              <i className="ri-lock-line mr-2 w-4 h-4 flex items-center justify-center"></i>
              Private Audition
            </span>
          )}
          {audition.privacyType === 'public' && (
            <span className="inline-flex items-center bg-green-600 text-white text-sm font-medium px-3 py-2 rounded-full">
              <i className="ri-global-line mr-2 w-4 h-4 flex items-center justify-center"></i>
              Public Audition
            </span>
          )}
          {audition.privacyType === 'live' && (
            <span className="inline-flex items-center bg-red-600 text-white text-sm font-medium px-3 py-2 rounded-full animate-pulse">
              <i className="ri-live-line mr-2 w-4 h-4 flex items-center justify-center"></i>
              Live Stream Audition
            </span>
          )}
        </div>
        <div className="absolute bottom-8 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block bg-teal-600 text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
              {audition.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{audition.projectTitle}</h1>
            <p className="text-xl text-white/90">{audition.productionCompany}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Basic Audition Details */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Basic Audition Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Project Title</h4>
                  <p className="text-gray-700">{audition.projectTitle}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Production Company</h4>
                  <p className="text-gray-700">{audition.productionCompany}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Media Type</h4>
                  <p className="text-gray-700">{audition.mediaType}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Director Name</h4>
                  <p className="text-gray-700">{audition.directorName}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Category</h4>
                  <p className="text-gray-700">{audition.category}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Shoot Dates</h4>
                  <p className="text-gray-700">{audition.shootDates}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Audition Type</h4>
                  <p className="text-gray-700">{audition.auditionType}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Shoot Location</h4>
                  <p className="text-gray-700">{audition.shootLocation}</p>
                </div>
              </div>
            </div>

            {/* Role Requirements */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Role Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Role Name</h4>
                  <p className="text-gray-700">"{audition.roleName}"</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Gender</h4>
                  <p className="text-gray-700">{audition.gender}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Age Range</h4>
                  <p className="text-gray-700">{audition.ageRange}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Language Requirement</h4>
                  <p className="text-gray-700">{audition.languageRequirement}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Skills Required</h4>
                  <p className="text-gray-700">{audition.skillsRequired}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Experience Level</h4>
                  <p className="text-gray-700">{audition.experienceLevel}</p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-700">"{audition.description}"</p>
                </div>
                {audition.referenceVideo && (
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-2">Reference Video</h4>
                    <a href={audition.referenceVideo} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 cursor-pointer">
                      View Reference Video
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Location & Contact */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Location & Contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-700">{audition.location}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-700">{audition.address}</p>
                </div>
                {audition.googleMapLink && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Google Map Link</h4>
                    <a href={audition.googleMapLink} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 cursor-pointer">
                      View on Google Maps
                    </a>
                  </div>
                )}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contact Name</h4>
                  <p className="text-gray-700">"{audition.contactName}"</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contact Number</h4>
                  <p className="text-gray-700">{audition.contactNumber}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-700">{audition.email}</p>
                </div>
              </div>
            </div>

            {/* Audition Schedule */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Audition Schedule</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Audition Posted Date</h4>
                  <p className="text-gray-700">{audition.auditionPostedDate}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Audition Time</h4>
                  <p className="text-gray-700">{audition.auditionTime}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Last Date to Apply</h4>
                  <p className="text-gray-700 font-semibold text-red-600">{audition.lastDateToApply}</p>
                </div>
              </div>
            </div>

            {/* Audition Privacy Type */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Audition Privacy</h2>
              <div className="space-y-4">
                {audition.privacyType === 'private' && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4">
                        <i className="ri-lock-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">Private Audition</h4>
                        <p className="text-sm text-gray-600">Confidential submission</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Your audition video will be kept completely private. Only the casting director and production team can view your submission. 
                      No public voting or likes - your performance is evaluated solely by the professionals.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-600">
                      <i className="ri-shield-check-line mr-2 w-4 h-4 flex items-center justify-center text-green-600"></i>
                      Your video is protected and confidential
                    </div>
                  </div>
                )}
                {audition.privacyType === 'public' && (
                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                        <i className="ri-global-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">Public Audition</h4>
                        <p className="text-sm text-gray-600">Open for audience engagement</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Your audition video will be visible to the public. Audiences can watch, like, and comment on your performance. 
                      This is a great opportunity to gain exposure and build your fan base while showcasing your talent.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <i className="ri-heart-line mr-2 w-4 h-4 flex items-center justify-center text-red-500"></i>
                        Public can like
                      </div>
                      <div className="flex items-center">
                        <i className="ri-chat-3-line mr-2 w-4 h-4 flex items-center justify-center text-blue-500"></i>
                        Comments enabled
                      </div>
                      <div className="flex items-center">
                        <i className="ri-share-line mr-2 w-4 h-4 flex items-center justify-center text-green-500"></i>
                        Shareable
                      </div>
                    </div>
                  </div>
                )}
                {audition.privacyType === 'live' && (
                  <div className="bg-red-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                        <i className="ri-live-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">Live Stream Audition</h4>
                        <p className="text-sm text-gray-600">Real-time performance</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      This is a live streaming audition where you'll perform in real-time. The director and selected panel members will watch your 
                      audition live and may provide immediate feedback. Be prepared to perform at the scheduled time.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <i className="ri-video-line mr-2 w-4 h-4 flex items-center justify-center text-red-500"></i>
                        Live streaming
                      </div>
                      <div className="flex items-center">
                        <i className="ri-user-star-line mr-2 w-4 h-4 flex items-center justify-center text-purple-500"></i>
                        Director watches live
                      </div>
                      <div className="flex items-center">
                        <i className="ri-feedback-line mr-2 w-4 h-4 flex items-center justify-center text-orange-500"></i>
                        Instant feedback
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-8 sticky top-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quick Details</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <i className="ri-calendar-line text-teal-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                    <span className="font-medium text-gray-900">Application Deadline</span>
                  </div>
                  <p className="text-gray-700 ml-8">{audition.lastDateToApply}</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <i className="ri-calendar-event-line text-teal-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                    <span className="font-medium text-gray-900">Audition Time</span>
                  </div>
                  <p className="text-gray-700 ml-8">{audition.auditionTime}</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <i className="ri-map-pin-line text-teal-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                    <span className="font-medium text-gray-900">Location</span>
                  </div>
                  <p className="text-gray-700 ml-8">{audition.address}</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <i className="ri-film-line text-teal-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                    <span className="font-medium text-gray-900">Shooting Dates</span>
                  </div>
                  <p className="text-gray-700 ml-8">{audition.shootDates}</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <i className="ri-user-line text-teal-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                    <span className="font-medium text-gray-900">Director</span>
                  </div>
                  <p className="text-gray-700 ml-8">{audition.directorName}</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <i className="ri-money-dollar-circle-line text-teal-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                    <span className="font-medium text-gray-900">Compensation</span>
                  </div>
                  <p className="text-gray-700 ml-8 font-semibold">{audition.compensation}</p>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    {audition.privacyType === 'private' && (
                      <i className="ri-lock-line text-teal-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                    )}
                    {audition.privacyType === 'public' && (
                      <i className="ri-global-line text-teal-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                    )}
                    {audition.privacyType === 'live' && (
                      <i className="ri-live-line text-teal-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                    )}
                    <span className="font-medium text-gray-900">Privacy Type</span>
                  </div>
                  <p className="text-gray-700 ml-8 capitalize">{audition.privacyType === 'live' ? 'Live Stream' : audition.privacyType}</p>
                </div>
              </div>
              
              <button 
                onClick={() => setShowApplicationForm(true)}
                className="w-full bg-teal-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors mt-8 whitespace-nowrap cursor-pointer"
              >
                Apply Now
              </button>
              
              {audition.privacyType === 'public' && (
                <button 
                  onClick={() => navigate(`/public-audition/${audition.id}`)}
                  className="w-full bg-green-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors mt-4 whitespace-nowrap cursor-pointer flex items-center justify-center"
                >
                  <i className="ri-global-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                  Open Audition
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

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
