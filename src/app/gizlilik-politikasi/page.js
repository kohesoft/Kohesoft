import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Gizlilik Politikası | Kohezyon Yazılım - KVKK Uyumlu Veri Koruma',
  description: 'Kohezyon Yazılım KVKK uyumlu gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında detaylı bilgi.',
  keywords: 'gizlilik politikası, KVKK, kişisel veri korunması, veri güvenliği, Kohezyon Yazılım',
  openGraph: {
    title: 'Gizlilik Politikası | Kohezyon Yazılım',
    description: 'KVKK uyumlu gizlilik politikamız ile kişisel verilerinizin güvenliği hakkında detaylı bilgi.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Kohezyon Yazılım',
  },
  alternates: {
    canonical: 'https://kohesoft.com/gizlilik-politikasi',
    languages: {
      'tr': 'https://kohesoft.com/gizlilik-politikasi',
      'en': 'https://kohesoft.com/en/privacy-policy',
    },
  },
};

const PrivacyPolicy = () => {
  const lastUpdated = "24 Ekim 2025";

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Gizlilik Politikası
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Kohezyon Yazılım Teknolojileri
            </p>
            <p className="text-sm text-gray-500">
              Son Güncelleme: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Giriş ve Kapsam
              </h2>
              <p className="text-gray-700 mb-4">
                Bu Gizlilik Politikası, Kohezyon Yazılım Teknolojileri ("Şirket", "biz", "bizim") 
                tarafından işletilen kohesoft.com web sitesi ve sunulan hizmetler kapsamında 
                kişisel verilerinizin nasıl toplandığı, işlendiği, saklandığı ve korunduğunu 
                açıklamaktadır.
              </p>
              <p className="text-gray-700">
                Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve 
                ilgili mevzuat uyarınca hazırlanmıştır.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Veri Sorumlusu
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Şirket Unvanı:</strong> Kohezyon Yazılım Teknolojileri</p>
                <p className="text-gray-700 mb-2"><strong>Adres:</strong> Türkiye</p>
                <p className="text-gray-700 mb-2"><strong>E-posta:</strong> info@kohesoft.com</p>
                <p className="text-gray-700"><strong>Web Sitesi:</strong> www.kohesoft.com</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Toplanan Kişisel Veriler
              </h2>
              <p className="text-gray-700 mb-4">
                Web sitemizi ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda 
                aşağıdaki kişisel veriler toplanabilir:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Kimlik Bilgileri</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Ad ve Soyad</li>
                    <li>• E-posta Adresi</li>
                    <li>• Telefon Numarası</li>
                    <li>• Şirket Bilgileri</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Teknik Bilgiler</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• IP Adresi</li>
                    <li>• Tarayıcı Bilgileri</li>
                    <li>• Cihaz Bilgileri</li>
                    <li>• Çerez Verileri</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Veri Toplama Yöntemleri
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">İletişim Formları</h3>
                  <p className="text-gray-700">
                    Web sitemizde yer alan iletişim formları aracılığıyla gönüllü olarak 
                    paylaştığınız bilgiler.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Çerezler</h3>
                  <p className="text-gray-700">
                    Web sitesi performansını artırmak ve kullanıcı deneyimini iyileştirmek 
                    amacıyla çerez teknolojileri kullanılmaktadır.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analitik Araçlar</h3>
                  <p className="text-gray-700">
                    Google Analytics gibi analitik araçlar ile web sitesi kullanımına 
                    ilişkin istatistiksel veriler toplanmaktadır.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Kişisel Verilerin İşlenme Amaçları
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Hizmet Sunumu</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Yazılım geliştirme hizmetleri</li>
                    <li>• Kurumsal portal sistemleri</li>
                    <li>• Teknik destek sağlama</li>
                    <li>• Proje yönetimi</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">İletişim</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Müşteri taleplerine yanıt</li>
                    <li>• Bilgilendirme e-postaları</li>
                    <li>• Pazarlama faaliyetleri</li>
                    <li>• Haber bültenleri</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Kişisel Verilerin Saklanma Süresi
              </h2>
              <p className="text-gray-700 mb-4">
                Kişisel verileriniz, KVKK ve ilgili mevzuat uyarınca belirlenen sürelerde 
                ve işleme amacının gerekli kıldığı süre boyunca saklanmaktadır:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>İletişim Verileri:</strong> 3 yıl</li>
                  <li>• <strong>Müşteri Verileri:</strong> Sözleşme süresi + 10 yıl</li>
                  <li>• <strong>Web Sitesi Logları:</strong> 1 yıl</li>
                  <li>• <strong>Çerez Verileri:</strong> 2 yıl</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. KVKK Kapsamındaki Haklarınız
              </h2>
              <p className="text-gray-700 mb-4">
                KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-gray-700 space-y-2">
                  <li>• Kişisel veri işlenip işlenmediğini öğrenme</li>
                  <li>• İşlenen kişisel veriler hakkında bilgi talep etme</li>
                  <li>• İşleme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                  <li>• Yurt içinde veya yurt dışındaki üçüncü kişileri bilme</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>• Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                  <li>• KVKK'da öngörülen şartlar çerçevesinde kişisel verilerin silinmesini isteme</li>
                  <li>• Düzeltme ve silme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                  <li>• İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi sonucu zarara uğrama durumunda itiraz etme</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Veri Güvenliği
              </h2>
              <p className="text-gray-700 mb-4">
                Kişisel verilerinizin güvenliği için aşağıdaki teknik ve idari tedbirler alınmaktadır:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Teknik Tedbirler</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• SSL şifreleme</li>
                    <li>• Güvenlik duvarları</li>
                    <li>• Düzenli güvenlik testleri</li>
                    <li>• Veri yedekleme</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">İdari Tedbirler</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Erişim kontrolü</li>
                    <li>• Personel eğitimleri</li>
                    <li>• Gizlilik sözleşmeleri</li>
                    <li>• Düzenli denetimler</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Fiziksel Tedbirler</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Güvenli veri merkezleri</li>
                    <li>• Kamerayla izleme</li>
                    <li>• Kilit sistemleri</li>
                    <li>• Ziyaretçi kontrolü</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. İletişim ve Başvuru
              </h2>
              <p className="text-gray-700 mb-4">
                KVKK kapsamındaki haklarınızı kullanmak için aşağıdaki yollardan 
                bizimle iletişime geçebilirsiniz:
              </p>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>E-posta:</strong> kvkk@kohesoft.com</p>
                  <p className="text-gray-700"><strong>Posta Adresi:</strong> Kohezyon Yazılım Teknolojileri, Türkiye</p>
                  <p className="text-gray-700"><strong>Başvuru Süreci:</strong> 30 gün içinde yanıtlanır</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Politika Güncellemeleri
              </h2>
              <p className="text-gray-700 mb-4">
                Bu Gizlilik Politikası, yasal değişiklikler veya hizmet değişiklikleri 
                nedeniyle güncellenebilir. Önemli değişiklikler durumunda web sitemiz 
                üzerinden bilgilendirme yapılacaktır.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  Bu politika {lastUpdated} tarihinde güncellenmiştir ve aynı tarihte yürürlüğe girmiştir.
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

export default PrivacyPolicy;