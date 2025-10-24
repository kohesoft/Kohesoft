// Cookie Policy Page EN
import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy | Kohezyon Software',
  description: 'Kohezyon Software cookie usage policy. Detailed information about cookies used on our website.',
  keywords: 'cookie policy, data protection, privacy, GDPR, KVKK',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://kohesoft.com/en/cookie-policy',
    languages: {
      'en': 'https://kohesoft.com/en/cookie-policy',
      'tr': 'https://kohesoft.com/cerez-politikasi'
    }
  },
  openGraph: {
    title: 'Cookie Policy | Kohezyon Software',
    description: 'Detailed information about cookies used on our website.',
    url: 'https://kohesoft.com/en/cookie-policy',
    siteName: 'Kohezyon Software',
    locale: 'en_US',
    type: 'website',
  }
};

export default function CookiePolicyPageEN() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cookie Policy",
    "description": "Kohezyon Software cookie usage policy",
    "url": "https://kohesoft.com/en/cookie-policy",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Kohezyon Software",
      "url": "https://kohesoft.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Cookie Policy</h1>
              <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString('en-US')}</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link 
                href="/cerez-politikasi"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Türkçe
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
            <h2>What are Cookies?</h2>
            <p>
              Cookies are small text files that websites place on your computer or mobile device. 
              These files allow the website to recognize you and remember your visit preferences.
            </p>

            <h2>What Cookies Do We Use?</h2>
            
            <h3>1. Necessary Cookies</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
              <div>
                <p className="font-medium text-blue-900 mb-2">These cookies are mandatory</p>
                <p className="text-blue-800 text-sm">
                  Cookies that are essential for the basic functionality of the website. 
                  The website cannot function properly without these cookies and they cannot be disabled.
                </p>
                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>• Session management</li>
                  <li>• Security measures</li>
                  <li>• Language preferences</li>
                  <li>• Your cookie preferences</li>
                </ul>
              </div>
            </div>

            <h3>2. Analytics Cookies</h3>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-4">
              <div>
                <p className="font-medium text-green-900 mb-2">Optional - Your consent required</p>
                <p className="text-green-800 text-sm">
                  Cookies that collect analytical data to help us understand how the website is used.
                </p>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• Page view statistics</li>
                  <li>• Visitor behavior analysis</li>
                  <li>• Site performance measurement</li>
                  <li>• Error reporting</li>
                </ul>
                <p className="text-xs text-green-600 mt-2">
                  <strong>Provider:</strong> Google Analytics<br/>
                  <strong>Duration:</strong> 2 years
                </p>
              </div>
            </div>

            <h3>3. Marketing Cookies</h3>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 my-4">
              <div>
                <p className="font-medium text-purple-900 mb-2">Optional - Your consent required</p>
                <p className="text-purple-800 text-sm">
                  Cookies used to show you more relevant advertisements.
                </p>
                <ul className="text-sm text-purple-700 mt-2 space-y-1">
                  <li>• Targeted advertising</li>
                  <li>• Social media integration</li>
                  <li>• Third-party content</li>
                </ul>
                <p className="text-xs text-purple-600 mt-2">
                  <strong>Duration:</strong> 1 year
                </p>
              </div>
            </div>

            <h3>4. Preference Cookies</h3>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 my-4">
              <div>
                <p className="font-medium text-orange-900 mb-2">Optional - Your consent required</p>
                <p className="text-orange-800 text-sm">
                  Cookies used to remember your preferences and provide a better experience.
                </p>
                <ul className="text-sm text-orange-700 mt-2 space-y-1">
                  <li>• Language selection</li>
                  <li>• Theme preferences</li>
                  <li>• Personalized content</li>
                </ul>
                <p className="text-xs text-orange-600 mt-2">
                  <strong>Duration:</strong> 1 year
                </p>
              </div>
            </div>

            <h2>How Can You Manage Your Cookie Preferences?</h2>
            <p>
              You can change your cookie preferences at any time:
            </p>
            <ul>
              <li>By clicking the "Cookie Settings" link at the bottom of our website</li>
              <li>By managing cookies through your browser settings</li>
              <li>By contacting us: <a href="mailto:info@kohesoft.com">info@kohesoft.com</a></li>
            </ul>

            <h2>Third-Party Cookies</h2>
            <p>
              The following third-party service cookies may be used on our website:
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> Site traffic and usage analysis</li>
              <li><strong>Google Fonts:</strong> Web fonts</li>
            </ul>

            <h2>Consequences of Rejecting Cookies</h2>
            <p>
              If you reject non-essential cookies:
            </p>
            <ul>
              <li>The website maintains its basic functionality</li>
              <li>However, personalized experience may be limited</li>
              <li>Some features may not work fully</li>
              <li>Your preferences may not be remembered</li>
            </ul>

            <h2>Changes to Cookie Policy</h2>
            <p>
              We may update this cookie policy from time to time. In case of significant changes, 
              we will notify you through our website.
            </p>

            <h2>Contact</h2>
            <p>
              If you have questions about our cookie policy, you can contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4">
              <p className="font-medium text-gray-900 mb-2">Kohezyon Software</p>
              <p className="text-gray-700 text-sm space-y-1">
                <span className="block">📧 info@kohesoft.com</span>
                <span className="block">📞 +90 XXX XXX XX XX</span>
                <span className="block">🏢 Istanbul, Turkey</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}