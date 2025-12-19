import { useNavigate } from 'react-router-dom';

export default function TermsOfService() {
  const navigate = useNavigate();

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
                Find Auditions
              </button>
              <button 
                onClick={() => navigate('/artists')}
                className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer"
              >
                Find Artists
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-white/90">Last Updated: January 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Media Audition. These Terms of Service ("Terms") govern your access to and use of our platform, services, and website (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you do not agree to these Terms, please do not use our Services. We reserve the right to modify these Terms at any time, and your continued use of the Services constitutes acceptance of any changes.
            </p>
          </section>

          {/* Eligibility */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Eligibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use Media Audition, you must:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Be at least 18 years of age, or have parental/guardian consent if you are between 13-17 years old</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Not be prohibited from using our Services under applicable laws</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
            </ul>
          </section>

          {/* User Accounts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. User Accounts</h2>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">3.1 Account Registration</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When creating an account, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">3.2 Account Types</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Media Audition offers different account types including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Performer/Talent Accounts:</strong> For actors, models, voice artists, and musicians seeking audition opportunities</li>
              <li><strong>Casting Director Accounts:</strong> For professionals posting auditions and reviewing talent</li>
              <li><strong>Agent/Manager Accounts:</strong> For talent representatives managing multiple performers</li>
              <li><strong>Producer Accounts:</strong> For production companies and content creators</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">3.3 Account Security</h3>
            <p className="text-gray-700 leading-relaxed">
              You must immediately notify us of any unauthorized use of your account or any other security breach. We are not liable for any loss or damage arising from your failure to protect your account credentials.
            </p>
          </section>

          {/* User Content */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. User Content and Conduct</h2>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">4.1 Content Ownership</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain ownership of all content you submit to Media Audition, including profiles, portfolios, audition videos, and other materials ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, display, and distribute your content for the purpose of providing our Services.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">4.2 Content Standards</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree that your User Content will not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Violate any intellectual property rights or other proprietary rights</li>
              <li>Contain false, misleading, or fraudulent information</li>
              <li>Include offensive, defamatory, or inappropriate material</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Contain viruses, malware, or other harmful code</li>
              <li>Infringe upon the privacy or publicity rights of others</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">4.3 Prohibited Conduct</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Users are prohibited from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Impersonating others or providing false information</li>
              <li>Harassing, threatening, or abusing other users</li>
              <li>Posting spam or unsolicited commercial content</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Using automated systems to access the Services</li>
              <li>Interfering with the proper functioning of the platform</li>
            </ul>
          </section>

          {/* Auditions and Casting */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Auditions and Casting Services</h2>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">5.1 Audition Postings</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Casting directors and producers posting auditions must provide accurate information about roles, requirements, compensation, and working conditions. All audition postings must comply with applicable employment and anti-discrimination laws.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">5.2 Audition Applications</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Performers applying for auditions must submit truthful information and materials that accurately represent their skills and experience. Misrepresentation may result in account termination.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">5.3 No Employment Relationship</h3>
            <p className="text-gray-700 leading-relaxed">
              Media Audition is a platform connecting talent with opportunities. We are not a party to any agreements between users and do not create an employment relationship between performers and casting directors. All contractual arrangements are solely between the parties involved.
            </p>
          </section>

          {/* Payments and Fees */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Payments and Fees</h2>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">6.1 Service Fees</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Media Audition may charge fees for certain premium features and services. All fees will be clearly disclosed before you incur any charges. Fees are non-refundable except as required by law.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">6.2 Payment Processing</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payments are processed through secure third-party payment processors. You agree to provide accurate payment information and authorize us to charge your payment method for applicable fees.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">6.3 Compensation Arrangements</h3>
            <p className="text-gray-700 leading-relaxed">
              Any compensation arrangements between performers and casting directors are independent of Media Audition. We are not responsible for payment disputes between users.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Intellectual Property Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Media Audition platform, including its design, features, functionality, and content (excluding User Content), is owned by us and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our trademarks, logos, and service marks may not be used without prior written consent. All other trademarks appearing on the platform are the property of their respective owners.
            </p>
          </section>

          {/* Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Privacy and Data Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Services, you consent to our data practices as described in the Privacy Policy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We implement reasonable security measures to protect your information, but cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account information.
            </p>
          </section>

          {/* Disclaimers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Disclaimers and Limitations of Liability</h2>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">9.1 Service Availability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Services are provided "as is" and "as available" without warranties of any kind. We do not guarantee uninterrupted, secure, or error-free service. We reserve the right to modify, suspend, or discontinue any part of the Services at any time.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">9.2 User Interactions</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are not responsible for the conduct of users or the accuracy of information posted by users. You are solely responsible for your interactions with other users and any resulting agreements or disputes.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">9.3 Limitation of Liability</h3>
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, Media Audition shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or opportunities, arising from your use of the Services.
            </p>
          </section>

          {/* Indemnification */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Media Audition, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of the Services, violation of these Terms, or infringement of any rights of another party.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to suspend or terminate your account at any time for violation of these Terms or for any other reason at our sole discretion. You may terminate your account at any time by contacting us.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, your right to use the Services will immediately cease. Provisions that by their nature should survive termination shall remain in effect, including ownership provisions, warranty disclaimers, and limitations of liability.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Dispute Resolution</h2>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">12.1 Governing Law</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">12.2 Arbitration</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Any disputes arising from these Terms or your use of the Services shall be resolved through binding arbitration in Chennai, Tamil Nadu, India, except where prohibited by law.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">12.3 Class Action Waiver</h3>
            <p className="text-gray-700 leading-relaxed">
              You agree to resolve disputes on an individual basis and waive any right to participate in class action lawsuits or class-wide arbitration.
            </p>
          </section>

          {/* General Provisions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">13. General Provisions</h2>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">13.1 Entire Agreement</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Media Audition regarding the use of our Services.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">13.2 Severability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">13.3 Waiver</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">13.4 Assignment</h3>
            <p className="text-gray-700 leading-relaxed">
              You may not assign or transfer these Terms or your account without our prior written consent. We may assign these Terms without restriction.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">14. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2"><strong>Media Audition</strong></p>
              <p className="text-gray-700 mb-2">Plot-9, Puthu Thambi Nagar 3rd Street</p>
              <p className="text-gray-700 mb-2">Chennai-70, Tamil Nadu, India</p>
              <p className="text-gray-700 mb-2">Email: info@mediaaudition.com</p>
              <p className="text-gray-700">Phone: +91 8939993389</p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="bg-teal-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Acknowledgment</h3>
            <p className="text-gray-700 leading-relaxed">
              By using Media Audition, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these Terms, please discontinue use of our Services immediately.
            </p>
          </section>
        </div>
      </div>

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
