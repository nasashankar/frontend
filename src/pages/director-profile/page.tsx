import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function DirectorProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [profileData, setProfileData] = useState({
    name: 'Michael Anderson',
    email: 'michael.anderson@example.com',
    phone: '+1 (555) 123-4567',
    location: 'Los Angeles, CA',
    company: 'Stellar Productions',
    position: 'Casting Director',
    experience: '15 years',
    bio: 'Award-winning casting director with over 15 years of experience in film, television, and theater. Specialized in discovering fresh talent and matching the perfect actors to roles. Worked on numerous blockbuster films and critically acclaimed TV series.',
    website: 'www.stellarproductions.com',
    imdb: 'www.imdb.com/name/nm1234567',
    linkedin: 'linkedin.com/in/michaelanderson',
    specialization: 'Film & Television Casting',
    notableProjects: 'The Last Stand, City Lights, Breaking Dawn',
    awards: 'Emmy Award for Outstanding Casting (2020)',
    memberSince: 'January 2020'
  });

  const [formData, setFormData] = useState(profileData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateProfile = () => {
    setProfileData(formData);
    setShowUpdateModal(false);
  };

  const stats = [
    { label: 'Active Auditions', value: '12', icon: 'ri-movie-2-line', color: 'purple' },
    { label: 'Total Applications', value: '248', icon: 'ri-file-list-3-line', color: 'blue' },
    { label: 'Shortlisted', value: '45', icon: 'ri-star-line', color: 'yellow' },
    { label: 'Projects Completed', value: '38', icon: 'ri-checkbox-circle-line', color: 'green' }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string } } = {
      purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600' }
    };
    return colorMap[color] || { bg: 'bg-gray-100', text: 'text-gray-600' };
  };

  const recentAuditions = [
    {
      id: 1,
      title: 'Lead Role - Action Thriller',
      project: 'The Last Stand',
      applications: 45,
      status: 'Active',
      deadline: '2024-02-15'
    },
    {
      id: 2,
      title: 'Supporting Actor - Drama Series',
      project: 'City Lights',
      applications: 32,
      status: 'Review',
      deadline: '2024-02-20'
    },
    {
      id: 3,
      title: 'Voice Actor - Animation',
      project: 'Dreamscape',
      applications: 28,
      status: 'Active',
      deadline: '2024-02-25'
    }
  ];

  const recentActivity = [
    { action: 'Shortlisted 3 candidates for "The Last Stand"', time: '2 hours ago', icon: 'ri-star-line' },
    { action: 'Created new audition "City Lights - Episode 5"', time: '5 hours ago', icon: 'ri-add-circle-line' },
    { action: 'Reviewed 12 applications', time: '1 day ago', icon: 'ri-eye-line' },
    { action: 'Updated audition requirements', time: '2 days ago', icon: 'ri-edit-line' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
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

      {/* Profile Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20male%20casting%20director%20with%20warm%20smile%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20business%20attire%2C%20contemporary%20portrait%20photography%20style&width=150&height=150&seq=dirprofile001&orientation=squarish"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">{profileData.name}</h1>
              <p className="text-xl text-purple-100 mb-4">{profileData.position} at {profileData.company}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                <div className="flex items-center">
                  <i className="ri-map-pin-line mr-2"></i>
                  {profileData.location}
                </div>
                <div className="flex items-center">
                  <i className="ri-briefcase-line mr-2"></i>
                  {profileData.experience} Experience
                </div>
                <div className="flex items-center">
                  <i className="ri-calendar-line mr-2"></i>
                  Member since {profileData.memberSince}
                </div>
              </div>
            </div>
            <button 
              onClick={() => setShowUpdateModal(true)}
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-edit-line mr-2"></i>
              Update Profile
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const colorClasses = getColorClasses(stat.color);
            return (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center`}>
                    <i className={`${stat.icon} text-2xl ${colorClasses.text}`}></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md mb-6">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm cursor-pointer whitespace-nowrap ${
                  activeTab === 'overview'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('auditions')}
                className={`py-4 px-1 border-b-2 font-medium text-sm cursor-pointer whitespace-nowrap ${
                  activeTab === 'auditions'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Recent Auditions
              </button>
              <button
                onClick={() => setActiveTab('activity')}
                className={`py-4 px-1 border-b-2 font-medium text-sm cursor-pointer whitespace-nowrap ${
                  activeTab === 'activity'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Activity
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                  <p className="text-gray-600 leading-relaxed">{profileData.bio}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <i className="ri-mail-line mr-3 text-purple-600 w-5 h-5 flex items-center justify-center"></i>
                        {profileData.email}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <i className="ri-phone-line mr-3 text-purple-600 w-5 h-5 flex items-center justify-center"></i>
                        {profileData.phone}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <i className="ri-global-line mr-3 text-purple-600 w-5 h-5 flex items-center justify-center"></i>
                        {profileData.website}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Professional Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <i className="ri-building-line mr-3 text-purple-600 w-5 h-5 flex items-center justify-center"></i>
                        {profileData.company}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <i className="ri-focus-line mr-3 text-purple-600 w-5 h-5 flex items-center justify-center"></i>
                        {profileData.specialization}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <i className="ri-award-line mr-3 text-purple-600 w-5 h-5 flex items-center justify-center"></i>
                        {profileData.awards}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Notable Projects</h4>
                  <p className="text-gray-600 text-sm">{profileData.notableProjects}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Social Links</h4>
                  <div className="flex space-x-4">
                    <a href={`https://${profileData.linkedin}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center hover:bg-purple-200 transition-colors cursor-pointer">
                      <i className="ri-linkedin-fill text-purple-600"></i>
                    </a>
                    <a href={`https://${profileData.imdb}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center hover:bg-purple-200 transition-colors cursor-pointer">
                      <i className="ri-movie-line text-purple-600"></i>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'auditions' && (
              <div className="space-y-4">
                {recentAuditions.map((audition) => (
                  <div key={audition.id} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{audition.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{audition.project}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <i className="ri-file-list-line mr-1"></i>
                            {audition.applications} applications
                          </span>
                          <span className="flex items-center">
                            <i className="ri-calendar-line mr-1"></i>
                            Deadline: {audition.deadline}
                          </span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                        audition.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {audition.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 pb-4 border-b border-gray-100 last:border-0">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className={`${activity.icon} text-purple-600`}></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Update Profile Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">Update Profile</h3>
              <button 
                onClick={() => setShowUpdateModal(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer w-8 h-8 flex items-center justify-center"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Basic Information */}
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-4">Basic Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-4">Professional Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
                    <input
                      type="text"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Notable Projects</label>
                    <input
                      type="text"
                      name="notableProjects"
                      value={formData.notableProjects}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Awards & Recognition</label>
                    <input
                      type="text"
                      name="awards"
                      value={formData.awards}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-4">Biography</h4>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  placeholder="Tell us about your experience and expertise..."
                />
                <p className="text-xs text-gray-500 mt-2">{formData.bio.length}/500 characters</p>
              </div>

              {/* Online Presence */}
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-4">Online Presence</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">IMDb Profile</label>
                    <input
                      type="text"
                      name="imdb"
                      value={formData.imdb}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
                    <input
                      type="text"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gray-50 px-6 py-4 flex justify-end space-x-4 border-t border-gray-200">
              <button 
                onClick={() => setShowUpdateModal(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                Cancel
              </button>
              <button 
                onClick={handleUpdateProfile}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Save Changes
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
