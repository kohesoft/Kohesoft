import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Kullanım Şartları | Kohezyon Yazılım - Hizmet Kullanım Koşulları',
  description: 'Kohezyon Yazılım hizmetlerinin kullanım şartları ve koşulları. Yazılım geliştirme, kurumsal portal sistemleri ve teknik destek hizmetleri kullanım kuralları.',
  keywords: 'kullanım şartları, hizmet koşulları, yazılım lisansı, Kohezyon Yazılım, yasal şartlar',
  openGraph: {
    title: 'Kullanım Şartları | Kohezyon Yazılım',
    description: 'Hizmetlerimizi kullanırken uymanız gereken şartlar ve koşullar hakkında detaylı bilgi.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Kohezyon Yazılım',
  },
  alternates: {
    canonical: 'https://kohesoft.com/kullanim-sartlari',
    languages: {
      'tr': 'https://kohesoft.com/kullanim-sartlari',
      'en': 'https://kohesoft.com/en/terms-of-service',
    },
  },
};

const TermsOfService = () => {
  const lastUpdated = "24 Ekim 2025";
  const effectiveDate = "24 Ekim 2025";

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kullanım Şartları
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Kohezyon Yazılım Teknolojileri
            </p>
            <p className="text-sm text-gray-500">
              Son Güncelleme: {lastUpdated} | Yürürlük Tarihi: {effectiveDate}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Genel Hükümler
              </h2>
              <p className="text-gray-700 mb-4">
                Bu Kullanım Şartları ("Şartlar"), Kohezyon Yazılım Teknolojileri 
                ("Şirket", "biz", "bizim") tarafından sunulan tüm hizmetlerin kullanımını 
                düzenlemektedir. Bu şartlar, web sitemizi ziyaret ettiğinizde veya 
                hizmetlerimizi kullandığınızda geçerli olur.
              </p>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Önemli:</strong> Bu hizmetleri kullanarak, bu kullanım şartlarını 
                  okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan etmiş olursunuz.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Şirket Bilgileri
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Ticaret Unvanı:</strong> Kohezyon Yazılım Teknolojileri</p>
                    <p className="text-gray-700 mb-2"><strong>Web Sitesi:</strong> www.kohesoft.com</p>
                    <p className="text-gray-700"><strong>E-posta:</strong> info@kohesoft.com</p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Adres:</strong> Türkiye</p>
                    <p className="text-gray-700 mb-2"><strong>Telefon:</strong> +90 XXX XXX XX XX</p>
                    <p className="text-gray-700"><strong>Faaliyet Alanı:</strong> Yazılım Geliştirme</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Hizmet Kapsamı
              </h2>
              <p className="text-gray-700 mb-4">
                Kohezyon Yazılım aşağıdaki hizmetleri sunmaktadır:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Yazılım Geliştirme</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Web uygulaması geliştirme</li>
                    <li>• Mobil uygulama geliştirme</li>
                    <li>• Masaüstü yazılım geliştirme</li>
                    <li>• API geliştirme ve entegrasyon</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Kurumsal Çözümler</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Kurumsal portal sistemleri</li>
                    <li>• E-ticaret çözümleri</li>
                    <li>• İçerik yönetim sistemleri</li>
                    <li>• Özel yazılım çözümleri</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Kullanıcı Yükümlülükleri
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4.1 Genel Yükümlülükler</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Hizmetleri yalnızca yasal amaçlar için kullanmak</li>
                    <li>• Doğru ve güncel bilgiler sağlamak</li>
                    <li>• Üçüncü taraf haklarına saygı göstermek</li>
                    <li>• Sistem güvenliğini tehlikeye atmamak</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4.2 Yasak Faaliyetler</h3>
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <ul className="text-gray-700 space-y-2">
                      <li>• Telif hakkı ihlali yapan içerik paylaşmak</li>
                      <li>• Zararlı yazılım yaymak</li>
                      <li>• Sistem güvenliğini test etmek veya ihlal etmek</li>
                      <li>• Hizmetleri kötüye kullanmak</li>
                      <li>• Spam veya istenmeyen içerik göndermek</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Fikri Mülkiyet Hakları
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5.1 Şirket Hakları</h3>
                  <p className="text-gray-700 mb-2">
                    Web sitesinde yer alan tüm içerik, tasarım, kod ve materyaller 
                    Kohezyon Yazılım'ın fikri mülkiyeti olup, telif hakkı ve diğer 
                    yasal korumalar altındadır.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5.2 Özel Yazılım Hakları</h3>
                  <p className="text-gray-700">
                    Müşteriler için geliştirilen özel yazılımların hakları, 
                    imzalanan sözleşmelerde belirtilen şartlar çerçevesinde belirlenir.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Sorumluluk Sınırlamaları
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">6.1 Hizmet Kullanılabilirliği</h3>
                  <p className="text-gray-700">
                    Web sitemiz ve hizmetlerimiz "olduğu gibi" sunulmaktadır. 
                    Kesintisiz veya hatasız çalışma garantisi verilmemektedir.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">6.2 Dolaylı Zararlar</h3>
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm">
                      Şirket, hizmet kullanımından kaynaklanan dolaylı, özel, tesadüfi 
                      veya sonuçsal zararlardan sorumlu değildir. Toplam sorumluluk, 
                      ödenen hizmet bedelini aşmayacaktır.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Ödeme ve Faturalama
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Ödeme Şartları</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Fiyatlar Türk Lirası cinsindendir</li>
                    <li>• KDV dahil fiyatlar geçerlidir</li>
                    <li>• Ödeme vadesi 30 gündür</li>
                    <li>• Gecikme faizi uygulanabilir</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">İptal ve İade</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• İptal şartları sözleşmede belirtilir</li>
                    <li>• Başlayan projeler için iade sınırlıdır</li>
                    <li>• Tamamlanan hizmetler iade edilmez</li>
                    <li>• Özel durumlar değerlendirilir</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Gizlilik ve Veri Koruma
              </h2>
              <p className="text-gray-700 mb-4">
                Kişisel verilerinizin işlenmesi, 
                <a href="/gizlilik-politikasi" className="text-blue-600 hover:text-blue-800 underline ml-1">
                  Gizlilik Politikamız
                </a> 
                kapsamında düzenlenmektedir. Bu hizmetleri kullanarak, 
                gizlilik politikasını kabul etmiş olursunuz.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Müşteri Verileri</h3>
                <p className="text-gray-700 text-sm">
                  Projeler kapsamında işlenen müşteri verileri, sözleşmede belirlenen 
                  gizlilik şartları çerçevesinde korunmaktadır.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Uyuşmazlık Çözümü
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">9.1 Dostane Çözüm</h3>
                  <p className="text-gray-700">
                    Tüm uyuşmazlıklar öncelikle karşılıklı görüşme ile çözülmeye çalışılır.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">9.2 Yasal Süreç</h3>
                  <p className="text-gray-700">
                    Çözülemeyen uyuşmazlıklar için Türkiye Cumhuriyeti mahkemeleri yetkilidir. 
                    Türk Hukuku uygulanır.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Sözleşme Değişiklikleri
              </h2>
              <p className="text-gray-700 mb-4">
                Bu kullanım şartları, yasal değişiklikler veya hizmet güncellemeleri 
                nedeniyle değiştirilebilir. Önemli değişiklikler:
              </p>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <ul className="text-gray-700 space-y-2">
                  <li>• Web sitesinde yayınlanır</li>
                  <li>• E-posta ile bildirilir</li>
                  <li>• 30 gün önceden duyurulur</li>
                  <li>• Yürürlük tarihi belirtilir</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. İletişim Bilgileri
              </h2>
              <p className="text-gray-700 mb-4">
                Bu kullanım şartları ile ilgili sorularınız için bizimle iletişime geçebilirsiniz:
              </p>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Genel Bilgi:</strong> info@kohesoft.com</p>
                    <p className="text-gray-700 mb-2"><strong>Hukuki İşler:</strong> legal@kohesoft.com</p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Teknik Destek:</strong> support@kohesoft.com</p>
                    <p className="text-gray-700"><strong>Posta Adresi:</strong> Kohezyon Yazılım, Türkiye</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Yürürlük
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  Bu Kullanım Şartları <strong>{effectiveDate}</strong> tarihinde yürürlüğe girmiştir.
                </p>
                <p className="text-gray-700 text-sm">
                  Son güncelleme: {lastUpdated}
                </p>
              </div>
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Önemli Not:</strong> Bu hizmetleri kullanmaya devam ederek, 
                  bu kullanım şartlarının güncel halini kabul etmiş olursunuz.
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

export default TermsOfService;