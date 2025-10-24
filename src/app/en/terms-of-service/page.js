import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Terms of Service | Kohezyon Software - Service Usage Conditions',
  description: 'Kohezyon Software service terms and conditions. Usage rules for software development, corporate portal systems and technical support services.',
  keywords: 'terms of service, service conditions, software license, Kohezyon Software, legal terms',
  openGraph: {
    title: 'Terms of Service | Kohezyon Software',
    description: 'Detailed information about the terms and conditions you must comply with when using our services.',
    type: 'article',
    locale: 'en_US',
    siteName: 'Kohezyon Software',
  },
  alternates: {
    canonical: 'https://kohesoft.com/en/terms-of-service',
    languages: {
      'tr': 'https://kohesoft.com/kullanim-sartlari',
      'en': 'https://kohesoft.com/en/terms-of-service',
    },
  },
};

const TermsOfServiceEN = () => {
  const lastUpdated = "October 24, 2025";
  const effectiveDate = "October 24, 2025";

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Kohezyon Software Technologies
            </p>
            <p className="text-sm text-gray-500">
              Last Updated: {lastUpdated} | Effective Date: {effectiveDate}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. General Provisions
              </h2>
              <p className="text-gray-700 mb-4">
                These Terms of Service ("Terms") govern the use of all services provided by 
                Kohezyon Software Technologies ("Company", "we", "our"). These terms apply 
                when you visit our website or use our services.
              </p>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Important:</strong> By using these services, you declare that you have 
                  read, understood and accepted these terms of use.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Company Information
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Trade Name:</strong> Kohezyon Software Technologies</p>
                    <p className="text-gray-700 mb-2"><strong>Website:</strong> www.kohesoft.com</p>
                    <p className="text-gray-700"><strong>Email:</strong> info@kohesoft.com</p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Address:</strong> Turkey</p>
                    <p className="text-gray-700 mb-2"><strong>Phone:</strong> +90 XXX XXX XX XX</p>
                    <p className="text-gray-700"><strong>Field of Activity:</strong> Software Development</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Service Scope
              </h2>
              <p className="text-gray-700 mb-4">
                Kohezyon Software provides the following services:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Software Development</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Web application development</li>
                    <li>• Mobile application development</li>
                    <li>• Desktop software development</li>
                    <li>• API development and integration</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Enterprise Solutions</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Corporate portal systems</li>
                    <li>• E-commerce solutions</li>
                    <li>• Content management systems</li>
                    <li>• Custom software solutions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. User Obligations
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4.1 General Obligations</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Use services only for legal purposes</li>
                    <li>• Provide accurate and up-to-date information</li>
                    <li>• Respect third party rights</li>
                    <li>• Not compromise system security</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4.2 Prohibited Activities</h3>
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <ul className="text-gray-700 space-y-2">
                      <li>• Sharing copyrighted content</li>
                      <li>• Distributing malicious software</li>
                      <li>• Testing or violating system security</li>
                      <li>• Misusing services</li>
                      <li>• Sending spam or unwanted content</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Intellectual Property Rights
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5.1 Company Rights</h3>
                  <p className="text-gray-700 mb-2">
                    All content, design, code and materials on the website are the intellectual 
                    property of Kohezyon Software and are protected by copyright and other legal protections.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5.2 Custom Software Rights</h3>
                  <p className="text-gray-700">
                    The rights of custom software developed for customers are determined within 
                    the framework of the terms specified in the signed contracts.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Liability Limitations
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">6.1 Service Availability</h3>
                  <p className="text-gray-700">
                    Our website and services are provided "as is". No guarantee is given 
                    for uninterrupted or error-free operation.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">6.2 Indirect Damages</h3>
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm">
                      The company is not liable for indirect, special, incidental or consequential 
                      damages arising from the use of the service. Total liability shall not exceed 
                      the service fee paid.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Payment and Billing
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Terms</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Prices are in Turkish Lira</li>
                    <li>• VAT inclusive prices apply</li>
                    <li>• Payment term is 30 days</li>
                    <li>• Late payment interest may apply</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Cancellation and Refund</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Cancellation terms are specified in contract</li>
                    <li>• Refunds are limited for started projects</li>
                    <li>• Completed services are not refundable</li>
                    <li>• Special cases are evaluated</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Privacy and Data Protection
              </h2>
              <p className="text-gray-700 mb-4">
                The processing of your personal data is regulated under our 
                <a href="/en/privacy-policy" className="text-blue-600 hover:text-blue-800 underline ml-1">
                  Privacy Policy
                </a>. 
                By using these services, you accept the privacy policy.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Data</h3>
                <p className="text-gray-700 text-sm">
                  Customer data processed within the scope of projects is protected within 
                  the framework of confidentiality terms determined in the contract.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Dispute Resolution
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">9.1 Amicable Settlement</h3>
                  <p className="text-gray-700">
                    All disputes are first attempted to be resolved through mutual discussion.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">9.2 Legal Process</h3>
                  <p className="text-gray-700">
                    The courts of the Republic of Turkey are authorized for unresolved disputes. 
                    Turkish Law applies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Contract Changes
              </h2>
              <p className="text-gray-700 mb-4">
                These terms of use may be changed due to legal changes or service updates. 
                Important changes:
              </p>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <ul className="text-gray-700 space-y-2">
                  <li>• Published on the website</li>
                  <li>• Notified by email</li>
                  <li>• Announced 30 days in advance</li>
                  <li>• Effective date is specified</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Contact Information
              </h2>
              <p className="text-gray-700 mb-4">
                For questions about these terms of use, you can contact us:
              </p>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>General Information:</strong> info@kohesoft.com</p>
                    <p className="text-gray-700 mb-2"><strong>Legal Affairs:</strong> legal@kohesoft.com</p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Technical Support:</strong> support@kohesoft.com</p>
                    <p className="text-gray-700"><strong>Postal Address:</strong> Kohezyon Software, Turkey</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Effectiveness
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  These Terms of Service entered into force on <strong>{effectiveDate}</strong>.
                </p>
                <p className="text-gray-700 text-sm">
                  Last update: {lastUpdated}
                </p>
              </div>
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Important Note:</strong> By continuing to use these services, 
                  you accept the current version of these terms of use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfServiceEN;