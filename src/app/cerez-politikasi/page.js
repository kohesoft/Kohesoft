// Cookie Policy Page
import Link from 'next/link';

export const metadata = {
  title: 'Çerez Politikası | Kohezyon Yazılım',
  description: 'Kohezyon Yazılım çerez kullanım politikası. Web sitemizde kullanılan çerezler hakkında detaylı bilgi.',
  keywords: 'çerez politikası, cookie policy, veri koruma, gizlilik, KVKK, GDPR',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://kohesoft.com/cerez-politikasi',
    languages: {
      'en': 'https://kohesoft.com/en/cookie-policy',
      'tr': 'https://kohesoft.com/cerez-politikasi'
    }
  },
  openGraph: {
    title: 'Çerez Politikası | Kohezyon Yazılım',
    description: 'Web sitemizde kullanılan çerezler hakkında detaylı bilgi.',
    url: 'https://kohesoft.com/cerez-politikasi',
    siteName: 'Kohezyon Yazılım',
    locale: 'tr_TR',
    type: 'website',
  }
};

export default function CookiePolicyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Çerez Politikası",
    "description": "Kohezyon Yazılım çerez kullanım politikası",
    "url": "https://kohesoft.com/cerez-politikasi",
    "inLanguage": "tr-TR",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Kohezyon Yazılım",
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
              <h1 className="text-3xl font-bold text-gray-900">Çerez Politikası</h1>
              <p className="text-gray-600 mt-2">Son güncellenme: {new Date().toLocaleDateString('tr-TR')}</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link 
                href="/en/cookie-policy"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                English
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
            <h2>Çerezler Nedir?</h2>
            <p>
              Çerezler, web sitelerinin sizin bilgisayarınıza veya mobil cihazınıza yerleştirdiği küçük metin dosyalarıdır. 
              Bu dosyalar, web sitesinin sizi tanımasını ve ziyaret tercihlerinizi hatırlamasını sağlar.
            </p>

            <h2>Hangi Çerezleri Kullanıyoruz?</h2>
            
            <h3>1. Gerekli Çerezler</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
              <div>
                <p className="font-medium text-blue-900 mb-2">Bu çerezler zorunludur</p>
                <p className="text-blue-800 text-sm">
                  Web sitesinin temel işlevselliği için gerekli olan çerezlerdir. Bu çerezler olmadan 
                  web sitesi düzgün çalışamaz ve devre dışı bırakılamazlar.
                </p>
                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>• Oturum yönetimi</li>
                  <li>• Güvenlik önlemleri</li>
                  <li>• Dil tercihleri</li>
                  <li>• Çerez tercihleriniz</li>
                </ul>
              </div>
            </div>

            <h3>2. Analitik Çerezler</h3>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-4">
              <div>
                <p className="font-medium text-green-900 mb-2">İsteğe bağlı - İzniniz gerekiyor</p>
                <p className="text-green-800 text-sm">
                  Web sitesinin nasıl kullanıldığını anlamamız için analitik veriler toplayan çerezlerdir.
                </p>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• Sayfa görüntüleme istatistikleri</li>
                  <li>• Ziyaretçi davranış analizi</li>
                  <li>• Site performans ölçümü</li>
                  <li>• Hata raporlama</li>
                </ul>
                <p className="text-xs text-green-600 mt-2">
                  <strong>Sağlayıcı:</strong> Google Analytics<br/>
                  <strong>Süre:</strong> 2 yıl
                </p>
              </div>
            </div>

            <h3>3. Pazarlama Çerezleri</h3>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 my-4">
              <div>
                <p className="font-medium text-purple-900 mb-2">İsteğe bağlı - İzniniz gerekiyor</p>
                <p className="text-purple-800 text-sm">
                  Size daha alakalı reklamlar gösterebilmek için kullanılan çerezlerdir.
                </p>
                <ul className="text-sm text-purple-700 mt-2 space-y-1">
                  <li>• Hedefli reklamcılık</li>
                  <li>• Sosyal medya entegrasyonu</li>
                  <li>• Üçüncü taraf içerikler</li>
                </ul>
                <p className="text-xs text-purple-600 mt-2">
                  <strong>Süre:</strong> 1 yıl
                </p>
              </div>
            </div>

            <h3>4. Tercih Çerezleri</h3>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 my-4">
              <div>
                <p className="font-medium text-orange-900 mb-2">İsteğe bağlı - İzniniz gerekiyor</p>
                <p className="text-orange-800 text-sm">
                  Tercihlerinizi hatırlayarak daha iyi bir deneyim sunmak için kullanılan çerezlerdir.
                </p>
                <ul className="text-sm text-orange-700 mt-2 space-y-1">
                  <li>• Dil seçimi</li>
                  <li>• Tema tercihleri</li>
                  <li>• Kişiselleştirilmiş içerik</li>
                </ul>
                <p className="text-xs text-orange-600 mt-2">
                  <strong>Süre:</strong> 1 yıl
                </p>
              </div>
            </div>

            <h2>Çerez Tercihlerinizi Nasıl Yönetebilirsiniz?</h2>
            <p>
              Çerez tercihlerinizi istediğiniz zaman değiştirebilirsiniz:
            </p>
            <ul>
              <li>Web sitemizin alt kısmındaki "Çerez Ayarları" linkine tıklayarak</li>
              <li>Tarayıcınızın ayarlarından çerezleri yöneterek</li>
              <li>Bizimle iletişime geçerek: <a href="mailto:info@kohesoft.com">info@kohesoft.com</a></li>
            </ul>

            <h2>Üçüncü Taraf Çerezler</h2>
            <p>
              Web sitemizde aşağıdaki üçüncü taraf servislerinin çerezleri kullanılabilir:
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> Site trafiği ve kullanım analizi</li>
              <li><strong>Google Fonts:</strong> Web yazı tipleri</li>
            </ul>

            <h2>Çerezleri Reddetmenin Sonuçları</h2>
            <p>
              Gerekli olmayan çerezleri reddetmeniz durumunda:
            </p>
            <ul>
              <li>Web sitesi temel işlevselliğini sürdürür</li>
              <li>Ancak kişiselleştirilmiş deneyim sınırlı olabilir</li>
              <li>Bazı özellikler tam olarak çalışmayabilir</li>
              <li>Tercihleriniz hatırlanmayabilir</li>
            </ul>

            <h2>Çerez Politikasındaki Değişiklikler</h2>
            <p>
              Bu çerez politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler olması durumunda 
              sizi web sitemiz üzerinden bilgilendireceğiz.
            </p>

            <h2>İletişim</h2>
            <p>
              Çerez politikamız hakkında sorularınız varsa bizimle iletişime geçebilirsiniz:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4">
              <p className="font-medium text-gray-900 mb-2">Kohezyon Yazılım</p>
              <p className="text-gray-700 text-sm space-y-1">
                <span className="block">📧 info@kohesoft.com</span>
                <span className="block">📞 +90 XXX XXX XX XX</span>
                <span className="block">🏢 İstanbul, Türkiye</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}