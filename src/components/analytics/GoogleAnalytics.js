'use client';

import Script from 'next/script';

const GoogleAnalytics = ({ gaId }) => {
  if (!gaId) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Function to initialize analytics based on consent
            function initializeAnalytics() {
              const hasConsent = window.hasAnalyticsConsent && window.hasAnalyticsConsent();
              
              if (hasConsent) {
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_title: document.title,
                  page_location: window.location.href,
                  anonymize_ip: true,
                  cookie_flags: 'max-age=7776000;secure;samesite=none'
                });
              } else {
                // Disable Google Analytics cookies
                gtag('config', '${gaId}', {
                  'client_storage': 'none',
                  'anonymize_ip': true,
                });
              }
            }

            // Wait for consent function to be available, then initialize
            if (typeof window.hasAnalyticsConsent === 'function') {
              initializeAnalytics();
            } else {
              const checkConsent = setInterval(() => {
                if (typeof window.hasAnalyticsConsent === 'function') {
                  clearInterval(checkConsent);
                  initializeAnalytics();
                }
              }, 100);
            }
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;