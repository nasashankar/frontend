import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';


export default function Home() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('all');
  const [showContactForm, setShowContactForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');

  // OTP modal state
const [showOtpModal, setShowOtpModal] = useState(false);
const [otp, setOtp] = useState('');
const [otpLoading, setOtpLoading] = useState(false);
const [otpError, setOtpError] = useState('');
const [otpSuccess, setOtpSuccess] = useState('');
const [registeredUserId, setRegisteredUserId] = useState(null);
const [registeredEmail, setRegisteredEmail] = useState('');
const [resendLoading, setResendLoading] = useState(false);

// Login controlled inputs + UI state
const [loginEmail, setLoginEmail] = useState('');
const [loginPassword, setLoginPassword] = useState('');
const [loginLoading, setLoginLoading] = useState(false);
const [loginError, setLoginError] = useState('');

// Google login state
const [googleLoading, setGoogleLoading] = useState(false);
const [googleError, setGoogleError] = useState('');




  const heroImages = [
    'https://readdy.ai/api/search-image?query=Professional%20casting%20studio%20with%20modern%20lighting%20equipment%2C%20cameras%2C%20and%20audition%20setup%2C%20elegant%20minimalist%20interior%20design%2C%20warm%20ambient%20lighting%2C%20entertainment%20industry%20atmosphere%2C%20clean%20contemporary%20space%20with%20neutral%20tones&width=1920&height=1080&seq=hero001&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Modern%20film%20production%20studio%20with%20professional%20equipment%2C%20director%20chairs%2C%20movie%20cameras%2C%20elegant%20lighting%20setup%2C%20entertainment%20industry%20workspace%2C%20contemporary%20design%20with%20warm%20tones&width=1920&height=1080&seq=hero002&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Professional%20recording%20studio%20with%20soundproof%20booth%2C%20mixing%20console%2C%20entertainment%20industry%20equipment%2C%20modern%20minimalist%20design%2C%20warm%20professional%20lighting%20with%20neutral%20background&width=1920&height=1080&seq=hero003&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Fashion%20photography%20studio%20with%20professional%20lighting%2C%20runway%20setup%2C%20modern%20equipment%2C%20entertainment%20industry%20workspace%2C%20clean%20contemporary%20design%20with%20neutral%20tones&width=1920&height=1080&seq=hero004&orientation=landscape'
  ];

  // Auto-slide hero background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setRegisterError('');
  setRegisterSuccess('');
  setRegisterLoading(true);

  // Basic validation
  if (!firstName || !lastName || !email || !password || !confirmPassword || !accountType) {
    setRegisterError('Please fill all required fields.');
    setRegisterLoading(false);
    return;
  }

  if (password !== confirmPassword) {
    setRegisterError('Passwords do not match.');
    setRegisterLoading(false);
    return;
  }

  try {
    const payload = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      newsletter,
    };

    const res = await axios.post(
      "https://backend-bex4.onrender.com/api/user/register",
      payload,
      { withCredentials: true }
    );

    // -------- ⭐ INSERT THIS SUCCESS CODE HERE ⭐ --------
    setRegisterSuccess(res.data?.message || 'Registration successful. Check your email for OTP.');
    setRegisterLoading(false);

    // Save returned user id/email so OTP verify/resend know which user to target
    const returnedUserId = res.data?.user?.id || res.data?.user?._id || res.data?.userId;
    setRegisteredUserId(returnedUserId || null);
    setRegisteredEmail(email.toLowerCase());

    // open OTP popup
    setShowOtpModal(true);

    // clear passwords
    setPassword('');
    setConfirmPassword('');
    // -------- ⭐ END SUCCESS BLOCK ⭐ --------

  } catch (error) {
      const err = error as any;
    console.error("Registration Error:", err);
    setRegisterError(err.response?.data?.message || "Registration failed");
    setRegisterLoading(false);
  }
};

const handleVerifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
  e?.preventDefault?.();
  if (!otp || !registeredUserId) {
    setOtpError('Please enter the 6-digit code sent to your email.');
    return;
  }

  setOtpError('');
  setOtpSuccess('');
  setOtpLoading(true);

  try {
    const payload = { userId: registeredUserId, otp: String(otp).trim() };

    const res = await axios.post(
      'https://backend-bex4.onrender.com/api/user/verify-otp',
      payload,
      { withCredentials: true }
    );

    setOtpSuccess(res.data?.message || 'Account verified successfully.');
    setOtpLoading(false);

    // close OTP modal and optionally navigate
    setTimeout(() => {
      setShowOtpModal(false);
      setOtp('');
      setOtpSuccess('');
      // navigate to dashboard or login
      navigate('/dashboard-selection'); // change as needed
    }, 1000);
  } catch (error) {
      const err = error as any;
    console.error('Verify OTP error', err);
    const message =
      err.response?.data?.message ||
      (err.response?.data ? JSON.stringify(err.response.data) : err.message) ||
      'Failed to verify OTP';
    setOtpError(message);
    setOtpLoading(false);
  }
};

// Resend OTP
const handleResendOtp = async () => {
  if (!registeredEmail) {
    setOtpError('Email not available to resend OTP. Please register or try again.');
    return;
  }

  setOtpError('');
  setOtpSuccess('');
  setResendLoading(true);

  try {
    const res = await axios.post(
      'https://backend-bex4.onrender.com/api/user/resend-otp',
      { email: registeredEmail },
      { withCredentials: true }
    );

    setOtpSuccess(res.data?.message || 'New OTP sent to your email.');
    setResendLoading(false);
  } catch (error) {
      const err = error as any;
    console.error('Resend OTP error', err);
    const message =
      err.response?.data?.message ||
      (err.response?.data ? JSON.stringify(err.response.data) : err.message) ||
      'Failed to resend OTP';
    setOtpError(message);
    setResendLoading(false);
  }
};

const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoginError('');
  setLoginLoading(true);

  if (!loginEmail || !loginPassword) {
    setLoginError('Please enter email and password.');
    setLoginLoading(false);
    return;
  }

  try {
    const payload = {
      email: loginEmail.trim().toLowerCase(),
      password: loginPassword,
    };

    const res = await axios.post(
      'https://backend-bex4.onrender.com/api/user/login',
      payload,
      { withCredentials: true } // keep true if server sets cookies; OK if server doesn't
    );

    // If server responds that user needs OTP verification:
    if (res.data?.needsVerification) {
      // Save info and open OTP modal
      setRegisteredUserId(res.data?.userId || res.data?.user?._id || null);
      setRegisteredEmail(res.data?.email || payload.email);
      setShowOtpModal(true);
      setLoginLoading(false);
      return;
    }

    // SUCCESS: server returned token and user
    const token = res.data?.token;
    const user = res.data?.user;

    // If token is returned, save it locally (or rely on HttpOnly cookie if server set it)
    if (token) {
      localStorage.setItem('token', token);
      // set default axios auth header for subsequent requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    // Optional: save user profile locally
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }

    setLoginLoading(false);

    // Close login modal and navigate
    setShowLoginForm(false);
    setLoginEmail('');
    setLoginPassword('');

    navigate('/dashboard-selection'); 

  } catch (error) {
      const err = error as any;

    console.error('Login error:', err);
    const message =
      err.response?.data?.message ||
      (err.response?.data ? JSON.stringify(err.response.data) : err.message) ||
      'Login failed';
    setLoginError(message);
    setLoginLoading(false);

    // If backend responds with needsVerification in error payload, support it:
    if (err.response?.data?.needsVerification) {
      setRegisteredUserId(err.response.data?.userId || null);
      setRegisteredEmail(err.response.data?.email || loginEmail.trim().toLowerCase());
      setShowOtpModal(true);
    }
  }
};

const googleLogin = useGoogleLogin({
  onSuccess: async (tokenResponse) => {
    try {
      setGoogleLoading(true);
      setGoogleError("");

      // tokenResponse.access_token (ya29...) → send to backend
      const res = await axios.post(
        "https://backend-bex4.onrender.com/api/user/google",
        { token: tokenResponse.access_token }
      );

      // Save JWT
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Close modal + navigate
      setShowLoginForm(false);
      setShowRegisterForm(false);

      navigate("/dashboard-selection");
    } catch (error) {
        const err = error as any;
      console.error("Google login error:", err.response?.data || err);
      setGoogleError(err.response?.data?.message || "Google login failed.");
    } finally {
      setGoogleLoading(false);
    }
  },

  onError: () => {
    setGoogleError("Google login was cancelled or failed.");
  },
});

  const services = [
    {
      id: 'acting',
      title: 'Acting Auditions',
      description: 'Professional casting for film, TV, and theater productions',
      icon: 'ri-movie-line',
      image: 'https://readdy.ai/api/search-image?query=Professional%20acting%20audition%20studio%20with%20modern%20lighting%20setup%2C%20casting%20director%20reviewing%20headshots%2C%20clean%20minimalist%20interior%20design%20with%20warm%20lighting%2C%20contemporary%20furniture%2C%20professional%20atmosphere%20for%20film%20and%20television%20casting&width=400&height=300&seq=act001&orientation=landscape'
    },
    {
      id: 'modeling',
      title: 'Modeling Casting',
      description: 'Fashion, commercial, and editorial modeling opportunities',
      icon: 'ri-camera-line',
      image: 'https://readdy.ai/api/search-image?query=Fashion%20modeling%20casting%20studio%20with%20professional%20photography%20equipment%2C%20runway%20setup%2C%20bright%20clean%20lighting%2C%20modern%20minimalist%20design%2C%20fashion%20industry%20professional%20environment%20with%20neutral%20background&width=400&height=300&seq=mod001&orientation=landscape'
    },
    {
      id: 'voice',
      title: 'Voice Acting',
      description: 'Voice-over work for commercials, animation, and audiobooks',
      icon: 'ri-mic-line',
      image: 'https://readdy.ai/api/search-image?query=Professional%20voice%20acting%20recording%20studio%20with%20soundproof%20booth%2C%20high-end%20microphone%20equipment%2C%20audio%20mixing%20console%2C%20modern%20acoustic%20treatment%2C%20clean%20minimalist%20design%20with%20warm%20ambient%20lighting&width=400&height=300&seq=voi001&orientation=landscape'
    },
    {
      id: 'music',
      title: 'Music Auditions',
      description: 'Opportunities for singers, musicians, and performers',
      icon: 'ri-music-line',
      image: 'https://readdy.ai/api/search-image?query=Music%20audition%20studio%20with%20professional%20instruments%2C%20recording%20equipment%2C%20acoustic%20panels%2C%20modern%20design%2C%20warm%20lighting%2C%20musical%20instruments%20displayed%2C%20professional%20music%20industry%20environment&width=400&height=300&seq=mus001&orientation=landscape'
    }
  ];

  const featuredAuditions = [
    {
      id: 1,
      title: 'Lead Role - Independent Film',
      type: 'Acting',
      location: 'Los Angeles, CA',
      deadline: '2024-02-15',
      description: 'Seeking talented actors for lead roles in upcoming independent drama film.',
      requirements: 'Age 25-35, Previous film experience preferred',
      compensation: '$5,000 - $15,000',
      image: 'https://readdy.ai/api/search-image?query=Professional%20film%20audition%20scene%20with%20actor%20performing%20dramatic%20scene%2C%20modern%20casting%20studio%20with%20professional%20lighting%20equipment%2C%20cinematic%20atmosphere%2C%20clean%20contemporary%20interior%20design%20with%20warm%20tones&width=600&height=400&seq=aud001&orientation=landscape'
    },
    {
      id: 2,
      title: 'Fashion Week Model',
      type: 'Modeling',
      location: 'New York, NY',
      deadline: '2024-02-20',
      description: 'High-fashion runway models needed for upcoming Fashion Week shows.',
      requirements: 'Height 5\'8" minimum, Professional portfolio required',
      compensation: '$2,000 - $8,000',
      image: 'https://readdy.ai/api/search-image?query=Fashion%20runway%20model%20walking%20on%20professional%20catwalk%2C%20elegant%20fashion%20show%20setup%20with%20bright%20lighting%2C%20modern%20minimalist%20design%2C%20high-end%20fashion%20industry%20atmosphere%20with%20clean%20background&width=600&height=400&seq=aud002&orientation=landscape'
    },
    {
      id: 3,
      title: 'Commercial Voice Over',
      type: 'Voice Acting',
      location: 'Remote',
      deadline: '2024-02-10',
      description: 'National commercial campaign seeking distinctive voice talent.',
      requirements: 'Professional demo reel, Home studio setup',
      compensation: '$3,000 - $10,000',
      image: 'https://readdy.ai/api/search-image?query=Professional%20voice%20actor%20recording%20in%20soundproof%20booth%20with%20high-end%20microphone%2C%20modern%20recording%20studio%20equipment%2C%20acoustic%20treatment%20panels%2C%20warm%20ambient%20lighting%20with%20clean%20minimalist%20design&width=600&height=400&seq=aud003&orientation=landscape'
    },
    {
      id: 4,
      title: 'Broadway Musical Ensemble',
      type: 'Music',
      location: 'New York, NY',
      deadline: '2024-02-25',
      description: 'Ensemble performers needed for new Broadway musical production.',
      requirements: 'Strong vocals, Dance experience, Theater background',
      compensation: '$1,500 - $3,000/week',
      image: 'https://readdy.ai/api/search-image?query=Broadway%20theater%20stage%20with%20performers%20rehearsing%20musical%20number%2C%20professional%20stage%20lighting%2C%20elegant%20theater%20interior%2C%20entertainment%20industry%20atmosphere%20with%20warm%20dramatic%20lighting&width=600&height=400&seq=aud004&orientation=landscape'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Actress',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20young%20actress%20with%20warm%20smile%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20makeup%20and%20styling%2C%20contemporary%20portrait%20photography%20style&width=80&height=80&seq=test001&orientation=squarish',
      quote: 'Media Audition helped me land my first major film role. Their casting process is professional and efficient.'
    },
    {
      name: 'Marcus Johnson',
      role: 'Voice Actor',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20male%20voice%20actor%2C%20warm%20expression%2C%20studio%20lighting%2C%20neutral%20background%2C%20professional%20styling%2C%20contemporary%20portrait%20photography&width=80&height=80&seq=test002&orientation=squarish',
      quote: 'The voice acting opportunities here are incredible. I\'ve worked on three major campaigns this year.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Model',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20elegant%20female%20model%2C%20confident%20expression%2C%20studio%20lighting%2C%20neutral%20background%2C%20fashion%20industry%20styling%2C%20contemporary%20portrait%20photography&width=80&height=80&seq=test003&orientation=squarish',
      quote: 'From runway to commercial work, Media Audition connects me with the best opportunities in the industry.'
    }
  ];

  const filteredAuditions = selectedService === 'all' 
    ? featuredAuditions 
    : featuredAuditions.filter(audition => audition.type.toLowerCase().includes(selectedService));

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{
        backgroundColor: isScrolled ? 'white' : 'transparent',
        boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Left Side */}
            <button 
              onClick={() => navigate('/')}
              className="cursor-pointer flex items-center"
            >
              <img 
                src="https://static.readdy.ai/image/f9554bb0a127440936ab2d922523a178/298fbdfef9c03fe40ef57ca9c08a88b2.png" 
                alt="Media Audition" 
                className="h-10 w-auto"
              />
            </button>

            {/* Right Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => navigate('/auditions')}
                className="text-sm font-medium transition-colors cursor-pointer"
                style={{ color: isScrolled ? '#4B5563' : 'white' }}
              >
                Find Auditions
              </button>
              <button 
                onClick={() => navigate('/artists')}
                className="text-sm font-medium transition-colors cursor-pointer"
                style={{ color: isScrolled ? '#4B5563' : 'white' }}
              >
                Find Artists
              </button>
              <button 
                onClick={() => navigate('/shots')}
                className="text-sm font-medium transition-colors cursor-pointer"
                style={{ color: isScrolled ? '#4B5563' : 'white' }}
              >
                Shots
              </button>
              <button 
                onClick={() => setShowRegisterForm(true)}
                className="text-sm font-medium transition-colors cursor-pointer"
                style={{ color: isScrolled ? '#4B5563' : 'white' }}
              >
                Register
              </button>
              <button 
                onClick={() => setShowLoginForm(true)}
                className="text-sm font-medium transition-colors cursor-pointer"
                style={{ color: isScrolled ? '#4B5563' : 'white' }}
              >
                Login
              </button>
              <button 
                onClick={() => setShowContactForm(true)}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Create Audition
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:text-gray-900 cursor-pointer w-6 h-6 flex items-center justify-center"
                style={{ color: isScrolled ? '#4B5563' : 'white' }}
              >
                <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <button 
                onClick={() => {
                  navigate('/auditions');
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 block px-3 py-2 text-base font-medium cursor-pointer w-full text-left"
              >
                Find Auditions
              </button>
              <button 
                onClick={() => {
                  navigate('/artists');
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 block px-3 py-2 text-base font-medium cursor-pointer w-full text-left"
              >
                Find Artists
              </button>
              <button 
                onClick={() => {
                  navigate('/shots');
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 block px-3 py-2 text-base font-medium cursor-pointer w-full text-left"
              >
                Shots
              </button>
              <button 
                onClick={() => {
                  setShowRegisterForm(true);
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 block px-3 py-2 text-base font-medium cursor-pointer w-full text-left"
              >
                Register
              </button>
              <button 
                onClick={() => {
                  setShowLoginForm(true);
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 block px-3 py-2 text-base font-medium cursor-pointer w-full text-left"
              >
                Login
              </button>
              <button 
                onClick={() => {
                  setShowContactForm(true);
                  setIsMenuOpen(false);
                }}
                className="w-full text-left bg-teal-600 text-white px-3 py-2 text-base font-medium hover:bg-teal-700 transition-colors cursor-pointer"
              >
                Create Audition
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center overflow-hidden"
      >
        {/* Sliding Background Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentHeroImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${image}')`
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-center text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Gateway to
              <span className="block text-teal-400">Media Success</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with top casting directors, discover exclusive audition opportunities, and launch your career in entertainment industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Start Your Journey
              </button>
              <a 
                href="#auditions"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer"
              >
                Browse Auditions
              </a>
            </div>
          </div>
        </div>

        {/* Background Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHeroImage(index)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  index === currentHeroImage 
                    ? 'bg-white' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Casting Services</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in connecting talented performers with industry professionals across multiple entertainment sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}></div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <i className={`${service.icon} text-2xl text-teal-600`}></i>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Auditions Section */}
      <section id="auditions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Featured Auditions</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover exclusive casting opportunities from top production companies and agencies
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setSelectedService('all')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  selectedService === 'all' 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All Auditions
              </button>
              <button
                onClick={() => setSelectedService('acting')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  selectedService === 'acting' 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Acting
              </button>
              <button
                onClick={() => setSelectedService('modeling')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  selectedService === 'modeling' 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Modeling
              </button>
              <button
                onClick={() => setSelectedService('voice')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  selectedService === 'voice' 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Voice Acting
              </button>
              <button
                onClick={() => setSelectedService('music')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  selectedService === 'music' 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Music
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredAuditions.map((audition) => (
              <div key={audition.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${audition.image})` }}></div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                        {audition.type}
                      </span>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{audition.title}</h4>
                      <div className="flex items-center text-gray-600 text-sm mb-1">
                        <i className="ri-map-pin-line mr-2"></i>
                        {audition.location}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <i className="ri-calendar-line mr-2"></i>
                        Deadline: {audition.deadline}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{audition.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="font-medium text-gray-900">Requirements: </span>
                      <span className="text-gray-600">{audition.requirements}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Compensation: </span>
                      <span className="text-teal-600 font-semibold">{audition.compensation}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Featured Artists</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exceptional talent across acting, modeling, voice acting, and music
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: 'Priya Sharma',
                category: 'Acting',
                location: 'Mumbai, Maharashtra',
                age: 28,
                gender: 'Female',
                languages: ['Hindi', 'English', 'Marathi'],
                skills: ['Method Acting', 'Classical Dance', 'Singing'],
                profileImage: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20actress%20headshot%2C%20confident%20expression%2C%20studio%20lighting%2C%20contemporary%20portrait%20photography%20with%20clean%20background%20and%20elegant%20styling&width=300&height=400&seq=art001&orientation=portrait',
                bio: 'Versatile actress with 8 years of experience in Bollywood and regional cinema.',
                experience: 'Professional'
              },
              {
                id: 2,
                name: 'Arjun Reddy',
                category: 'Acting',
                location: 'Hyderabad, Telangana',
                age: 32,
                gender: 'Male',
                languages: ['Telugu', 'Tamil', 'Hindi', 'English'],
                skills: ['Action Sequences', 'Emotional Acting', 'Martial Arts'],
                profileImage: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20actor%20headshot%2C%20strong%20confident%20expression%2C%20studio%20lighting%2C%20contemporary%20portrait%20photography%20with%20clean%20background%20and%20masculine%20styling&width=300&height=400&seq=art002&orientation=portrait',
                bio: 'Dynamic actor known for intense performances in Telugu and Tamil cinema.',
                experience: 'Professional'
              },
              {
                id: 3,
                name: 'Sophia Williams',
                category: 'Modeling',
                location: 'Delhi, India',
                age: 24,
                gender: 'Female',
                languages: ['English', 'Hindi', 'French'],
                skills: ['Runway Modeling', 'Fashion Photography', 'Commercial Modeling'],
                profileImage: 'https://readdy.ai/api/search-image?query=Professional%20fashion%20model%20headshot%2C%20elegant%20expression%2C%20high-end%20studio%20lighting%2C%20contemporary%20portrait%20photography%20with%20clean%20background%20and%20sophisticated%20styling&width=300&height=400&seq=art003&orientation=portrait',
                bio: 'International fashion model with experience in Paris, Milan, and New York Fashion Weeks.',
                experience: 'Professional'
              },
              {
                id: 4,
                name: 'Rajesh Kumar',
                category: 'Voice Acting',
                location: 'Chennai, Tamil Nadu',
                age: 35,
                gender: 'Male',
                languages: ['Tamil', 'Telugu', 'Malayalam', 'Hindi', 'English'],
                skills: ['Character Voices', 'Narration', 'Commercial Voice Over'],
                profileImage: 'https://readdy.ai/api/search-image?query=Professional%20voice%20actor%20headshot%2C%20warm%20confident%20expression%2C%20studio%20lighting%2C%20contemporary%20portrait%20photography%20with%20clean%20background%20and%20professional%20styling&width=300&height=400&seq=art004&orientation=portrait',
                bio: 'Versatile voice artist with 12 years of experience in dubbing, commercials, and audiobooks.',
                experience: 'Professional'
              },
              {
                id: 5,
                name: 'Meera Nair',
                category: 'Music',
                location: 'Kochi, Kerala',
                age: 26,
                gender: 'Female',
                languages: ['Malayalam', 'Tamil', 'Hindi', 'English'],
                skills: ['Classical Singing', 'Playback Singing', 'Music Composition'],
                profileImage: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20singer%20headshot%2C%20melodious%20expression%2C%20studio%20lighting%2C%20contemporary%20portrait%20photography%20with%20clean%20background%20and%20artistic%20styling&width=300&height=400&seq=art005&orientation=portrait',
                bio: 'Acclaimed playback singer and music composer with a melodious voice that touches hearts.',
                experience: 'Professional'
              },
              {
                id: 6,
                name: 'David Thompson',
                category: 'Modeling',
                location: 'Bangalore, Karnataka',
                age: 29,
                gender: 'Male',
                languages: ['English', 'Hindi', 'Kannada'],
                skills: ['Fashion Modeling', 'Fitness Modeling', 'Commercial Photography'],
                profileImage: 'https://readdy.ai/api/search-image?query=Professional%20male%20fashion%20model%20headshot%2C%20confident%20expression%2C%20studio%20lighting%2C%20contemporary%20portrait%20photography%20with%20clean%20background%20and%20stylish%20appearance&width=300&height=400&seq=art006&orientation=portrait',
                bio: 'International male model specializing in fashion and fitness campaigns.',
                experience: 'Professional'
              }
            ].map((artist) => (
              <div key={artist.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-cover bg-center bg-top" style={{ backgroundImage: `url(${artist.profileImage})` }}></div>
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

          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('/artists')}
              className="bg-white text-teal-600 border-2 border-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              View All Artists
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from talented performers who found their breakthrough opportunities through Media Audition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-teal-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">About Media Audition</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over 15 years of experience in the entertainment industry, Media Audition has become the premier platform connecting talented performers with top casting directors and production companies.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our comprehensive casting services span across film, television, theater, fashion, and digital media, ensuring that every performer finds the perfect opportunity to showcase their talent.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">5,000+</div>
                  <div className="text-gray-600">Successful Placements</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
                  <div className="text-gray-600">Industry Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20casting%20director%20reviewing%20headshots%20and%20portfolios%20in%20modern%20office%2C%20entertainment%20industry%20workspace%2C%20warm%20lighting%2C%20contemporary%20interior%20design%2C%20film%20and%20television%20industry%20atmosphere&width=600&height=500&seq=about001&orientation=landscape"
                alt="About Media Audition"
                className="rounded-xl shadow-lg object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Get Started Today</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to take the next step in your entertainment career? Contact us to learn more about our casting services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-map-pin-line text-xl text-teal-600"></i>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Office Location</h5>
                    <p className="text-gray-600">Plot-9, Puthu Thambi Nagar 3rd Street<br />Chennai-70, Tamil Nadu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-phone-line text-xl text-teal-600"></i>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Phone</h5>
                    <p className="text-gray-600">+91 8939993389</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-mail-line text-xl text-teal-600"></i>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Email</h5>
                    <p className="text-gray-600">info@mediaaudition.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-time-line text-xl text-teal-600"></i>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Office Hours</h5>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h4>
              <button 
                onClick={() => setShowContactForm(true)}
                className="w-full bg-teal-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Open Contact Form
              </button>
            </div>
          </div>
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

      {/* Forgot Password Form Modal */}
      {showForgotPasswordForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Reset Password</h3>
                <button 
                  onClick={() => setShowForgotPasswordForm(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer w-6 h-6 flex items-center justify-center"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">
                Enter your email address and we'll send you a link to reset your password.
              </p>
              
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                alert('Password reset link has been sent to your email address.');
                setShowForgotPasswordForm(false);
              }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Send Reset Link
                </button>
                
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setShowForgotPasswordForm(false);
                      setShowLoginForm(true);
                    }}
                    className="text-sm text-teal-600 hover:text-teal-700 cursor-pointer"
                  >
                    Back to Login
                  </button>
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
              {/* Google Login Button */}
<button
 type="button"
    onClick={() => googleLogin()}
  className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors mb-6 cursor-pointer"
>
  {googleLoading ? (
    "Connecting..."
  ) : (
    <>
      <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
      Continue with Google
    </>
  )}
</button>

{googleError && (
  <div className="text-sm text-red-600 mt-2">{googleError}</div>
)}

   

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                </div>
              </div>
              <form className="space-y-4" onSubmit={handleLoginSubmit}>
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
    <input
      type="email"
      name="email"
      value={loginEmail}
      onChange={(e) => setLoginEmail(e.target.value)}
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
      value={loginPassword}
      onChange={(e) => setLoginPassword(e.target.value)}
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
      onClick={() => {
        setShowLoginForm(false);
        setShowForgotPasswordForm(true);
      }}
      className="text-sm text-teal-600 hover:text-teal-700 cursor-pointer"
    >
      Forgot password?
    </button>
  </div>

  {loginError && <div className="text-sm text-red-600">{loginError}</div>}

  <button
    type="submit"
    disabled={loginLoading}
    className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
  >
    {loginLoading ? 'Signing in...' : 'Sign In'}
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
              
              {/* Google Login Button */}
<button
type="button"
    onClick={() => googleLogin()}
  className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors mb-6 cursor-pointer"
>
  {googleLoading ? (
    "Connecting..."
  ) : (
    <>
      <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
      Continue with Google
    </>
  )}
</button>

{googleError && (
  <div className="text-sm text-red-600 mt-2">{googleError}</div>
)}

    
              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or create account with email</span>
                </div>
              </div>
              
              <form className="space-y-4" onSubmit={handleRegisterSubmit}> 
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
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
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Type</label>
                  <select 
                    name="accountType"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
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
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 mt-1" 
                  />
                  <label className="ml-2 text-sm text-gray-600">
                    Send me updates about new audition opportunities and industry news
                  </label>
                </div>
                {registerError && <div className="text-sm text-red-600">{registerError}</div>}
                {registerSuccess && <div className="text-sm text-green-600">{registerSuccess}</div>}
                
                <button 
                  type="submit"
                   disabled={registerLoading}
                  className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  {registerLoading ? 'Creating account...' : 'Create Account'}
                </button>
                <div className="text-center">
    <p className="text-sm text-gray-600">Already have an account?
      <button type="button" onClick={() => { setShowRegisterForm(false); setShowLoginForm(true); }} className="text-teal-600 hover:text-teal-700 ml-1 cursor-pointer">Sign in here</button>
    </p>
  </div>
                
              </form>
            </div>
          </div>
        </div>
      )}

      {/* OTP Verification Modal */}
{showOtpModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">Verify Your Account</h3>
          <button
            onClick={() => {
              setShowOtpModal(false);
              setOtp('');
              setOtpError('');
              setOtpSuccess('');
            }}
            className="text-gray-400 hover:text-gray-600 cursor-pointer w-6 h-6 flex items-center justify-center"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        <p className="text-gray-600 mb-4">
          We sent a 6-digit code to <span className="font-medium text-gray-900">{registeredEmail}</span>. Enter it below to verify your account.
        </p>

        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">OTP Code</label>
            <input
              type="text"
              inputMode="numeric"
              pattern="\d*"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              placeholder="Enter 6-digit code"
              required
            />
          </div>

          {otpError && <div className="text-sm text-red-600">{otpError}</div>}
          {otpSuccess && <div className="text-sm text-green-600">{otpSuccess}</div>}

          <button
            type="submit"
            disabled={otpLoading}
            className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            {otpLoading ? 'Verifying...' : 'Verify Account'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 mb-2">Didn't receive the code?</p>
          <button
            onClick={handleResendOtp}
            disabled={resendLoading}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
          >
            {resendLoading ? 'Sending...' : 'Resend OTP'}
          </button>
        </div>
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
