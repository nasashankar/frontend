import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
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
              Media Audition ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using Media Audition, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our Services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Information We Collect</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">2.1 Information You Provide</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information that you voluntarily provide when using our Services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Account Information:</strong> Name, email address, phone number, password, date of birth, and account type</li>
              <li><strong>Profile Information:</strong> Professional headshots, portfolio images, demo reels, audition videos, resume/CV, skills, experience, physical characteristics, and biographical information</li>
              <li><strong>Audition Applications:</strong> Cover letters, application materials, and responses to audition requirements</li>
              <li><strong>Payment Information:</strong> Billing address and payment method details (processed securely through third-party payment processors)</li>
              <li><strong>Communications:</strong> Messages, comments, feedback, and correspondence with us or other users</li>
              <li><strong>Casting Information:</strong> For casting directors - company information, project details, and audition postings</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you access our Services, we automatically collect certain information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers, and mobile network information</li>
              <li><strong>Usage Data:</strong> Pages viewed, features used, search queries, click patterns, and time spent on pages</li>
              <li><strong>Location Data:</strong> General geographic location based on IP address</li>
              <li><strong>Cookies and Tracking:</strong> Information collected through cookies, web beacons, and similar technologies</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">2.3 Information from Third Parties</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may receive information about you from third parties:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Social media platforms if you connect your account</li>
              <li>Payment processors for transaction verification</li>
              <li>Analytics providers for usage statistics</li>
              <li>Public databases and industry directories</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the collected information for various purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Service Provision:</strong> To create and manage your account, process audition applications, facilitate connections between talent and casting directors</li>
              <li><strong>Communication:</strong> To send notifications about auditions, application status, platform updates, and respond to inquiries</li>
              <li><strong>Personalization:</strong> To recommend relevant auditions, customize your experience, and improve our matching algorithms</li>
              <li><strong>Payment Processing:</strong> To process transactions and manage billing</li>
              <li><strong>Platform Improvement:</strong> To analyze usage patterns, develop new features, and enhance user experience</li>
              <li><strong>Security:</strong> To detect and prevent fraud, abuse, and security incidents</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our Terms of Service</li>
              <li><strong>Marketing:</strong> To send promotional materials about new features and opportunities (with your consent)</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. How We Share Your Information</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">4.1 With Other Users</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your profile information, portfolio materials, and audition applications are visible to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Casting directors and producers when you apply for auditions</li>
              <li>Other users browsing talent profiles (for public profiles)</li>
              <li>Agents and managers you authorize to represent you</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">4.2 With Service Providers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We share information with third-party service providers who assist us:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Cloud hosting and storage providers</li>
              <li>Payment processors and financial institutions</li>
              <li>Email and communication service providers</li>
              <li>Analytics and data analysis services</li>
              <li>Customer support platforms</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">4.3 For Legal Reasons</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may disclose your information when required by law or to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Comply with legal processes, court orders, or government requests</li>
              <li>Enforce our Terms of Service and other agreements</li>
              <li>Protect our rights, property, or safety, or that of our users</li>
              <li>Investigate fraud, security issues, or technical problems</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">4.4 Business Transfers</h3>
            <p className="text-gray-700 leading-relaxed">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity. We will notify you of any such change in ownership or control of your personal information.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure authentication and access controls</li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Your Rights and Choices</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">6.1 Access and Update</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can access and update your account information and profile at any time through your account settings.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">6.2 Data Portability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to request a copy of your personal information in a structured, commonly used format.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">6.3 Deletion</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can request deletion of your account and personal information by contacting us. Some information may be retained as required by law or for legitimate business purposes.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">6.4 Marketing Communications</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can opt out of promotional emails by clicking the unsubscribe link in any marketing email or adjusting your notification preferences in your account settings.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">6.5 Cookies</h3>
            <p className="text-gray-700 leading-relaxed">
              You can control cookies through your browser settings. Note that disabling cookies may affect the functionality of our Services.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Provide our Services and maintain your account</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Maintain business records and analytics</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              When you delete your account, we will delete or anonymize your personal information within a reasonable timeframe, except where retention is required by law.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. Users between 13-17 years old must have parental or guardian consent to use our Services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If we become aware that we have collected personal information from a child under 13 without parental consent, we will take steps to delete that information promptly.
            </p>
          </section>

          {/* International Data Transfers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws than your jurisdiction.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When we transfer your information internationally, we implement appropriate safeguards to protect your data in accordance with this Privacy Policy and applicable laws.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Third-Party Links and Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Services may contain links to third-party websites, applications, or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          {/* California Privacy Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. California Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Right to know what personal information we collect, use, and disclose</li>
              <li>Right to request deletion of your personal information</li>
              <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
              <li>Right to non-discrimination for exercising your privacy rights</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          {/* GDPR Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">12. European Privacy Rights (GDPR)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Right of access to your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You also have the right to lodge a complaint with your local data protection authority.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">13. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Posting the updated policy on our website</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending you an email notification (for significant changes)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Your continued use of our Services after any changes indicates your acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">14. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2"><strong>Media Audition - Privacy Team</strong></p>
              <p className="text-gray-700 mb-2">Plot-9, Puthu Thambi Nagar 3rd Street</p>
              <p className="text-gray-700 mb-2">Chennai-70, Tamil Nadu, India</p>
              <p className="text-gray-700 mb-2">Email: privacy@mediaaudition.com</p>
              <p className="text-gray-700 mb-2">General Inquiries: info@mediaaudition.com</p>
              <p className="text-gray-700">Phone: +91 8939993389</p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="bg-teal-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Your Consent</h3>
            <p className="text-gray-700 leading-relaxed">
              By using Media Audition, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein. If you do not agree with this Privacy Policy, please do not use our Services.
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
