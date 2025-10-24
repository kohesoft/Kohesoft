import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Privacy Policy | Kohezyon Software - GDPR Compliant Data Protection',
  description: 'Kohezyon Software GDPR compliant privacy policy. Detailed information about how your personal data is collected, processed and protected.',
  keywords: 'privacy policy, GDPR, personal data protection, data security, Kohezyon Software',
  openGraph: {
    title: 'Privacy Policy | Kohezyon Software',
    description: 'Detailed information about the security of your personal data with our GDPR compliant privacy policy.',
    type: 'article',
    locale: 'en_US',
    siteName: 'Kohezyon Software',
  },
  alternates: {
    canonical: 'https://kohesoft.com/en/privacy-policy',
    languages: {
      'tr': 'https://kohesoft.com/gizlilik-politikasi',
      'en': 'https://kohesoft.com/en/privacy-policy',
    },
  },
};

const PrivacyPolicyEN = () => {
  const lastUpdated = "October 24, 2025";

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Kohezyon Software Technologies
            </p>
            <p className="text-sm text-gray-500">
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introduction and Scope
              </h2>
              <p className="text-gray-700 mb-4">
                This Privacy Policy explains how Kohezyon Software Technologies ("Company", "we", "our") 
                collects, processes, stores and protects your personal data within the scope of 
                the kohesoft.com website and services provided.
              </p>
              <p className="text-gray-700">
                This policy has been prepared in accordance with GDPR and related legislation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Data Controller
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Company Name:</strong> Kohezyon Software Technologies</p>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> Turkey</p>
                <p className="text-gray-700 mb-2"><strong>Email:</strong> info@kohesoft.com</p>
                <p className="text-gray-700"><strong>Website:</strong> www.kohesoft.com</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Personal Data Collected
              </h2>
              <p className="text-gray-700 mb-4">
                When you visit our website and use our services, the following 
                personal data may be collected:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Identity Information</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Name and Surname</li>
                    <li>• Email Address</li>
                    <li>• Phone Number</li>
                    <li>• Company Information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Information</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• IP Address</li>
                    <li>• Browser Information</li>
                    <li>• Device Information</li>
                    <li>• Cookie Data</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Data Collection Methods
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Forms</h3>
                  <p className="text-gray-700">
                    Information you voluntarily share through contact forms on our website.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookies</h3>
                  <p className="text-gray-700">
                    Cookie technologies are used to improve website performance and user experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Tools</h3>
                  <p className="text-gray-700">
                    Statistical data related to website usage is collected with analytics tools like Google Analytics.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Purposes of Processing Personal Data
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Delivery</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Software development services</li>
                    <li>• Corporate portal systems</li>
                    <li>• Technical support</li>
                    <li>• Project management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Response to customer requests</li>
                    <li>• Informational emails</li>
                    <li>• Marketing activities</li>
                    <li>• Newsletters</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Data Retention Period
              </h2>
              <p className="text-gray-700 mb-4">
                Your personal data is stored for the periods determined in accordance with 
                GDPR and related legislation and for the time required by the processing purpose:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Contact Data:</strong> 3 years</li>
                  <li>• <strong>Customer Data:</strong> Contract period + 10 years</li>
                  <li>• <strong>Website Logs:</strong> 1 year</li>
                  <li>• <strong>Cookie Data:</strong> 2 years</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Your Rights Under GDPR
              </h2>
              <p className="text-gray-700 mb-4">
                Under GDPR Article 15-22, you have the following rights:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-gray-700 space-y-2">
                  <li>• Right to be informed about data processing</li>
                  <li>• Right to access your personal data</li>
                  <li>• Right to know the purpose of processing</li>
                  <li>• Right to know third parties data is shared with</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>• Right to rectification of inaccurate data</li>
                  <li>• Right to erasure ("right to be forgotten")</li>
                  <li>• Right to restrict processing</li>
                  <li>• Right to data portability</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                The following technical and administrative measures are taken for the security of your personal data:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Technical Measures</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• SSL encryption</li>
                    <li>• Firewalls</li>
                    <li>• Regular security testing</li>
                    <li>• Data backup</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Administrative Measures</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Access control</li>
                    <li>• Staff training</li>
                    <li>• Confidentiality agreements</li>
                    <li>• Regular audits</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Physical Measures</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Secure data centers</li>
                    <li>• Camera monitoring</li>
                    <li>• Lock systems</li>
                    <li>• Visitor control</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Contact and Application
              </h2>
              <p className="text-gray-700 mb-4">
                You can contact us through the following ways to exercise your rights under GDPR:
              </p>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Email:</strong> privacy@kohesoft.com</p>
                  <p className="text-gray-700"><strong>Postal Address:</strong> Kohezyon Software Technologies, Turkey</p>
                  <p className="text-gray-700"><strong>Response Time:</strong> Within 30 days</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Policy Updates
              </h2>
              <p className="text-gray-700 mb-4">
                This Privacy Policy may be updated due to legal changes or service changes. 
                In case of significant changes, notification will be made through our website.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  This policy was updated on {lastUpdated} and entered into force on the same date.
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

export default PrivacyPolicyEN;