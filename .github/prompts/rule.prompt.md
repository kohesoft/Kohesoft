---
mode: agent
---
# Geliştirme Kuralları

Aşağıdaki kurallar tüm geliştirme, düzeltme ve ekleme çalışmalarında zorunludur.

## Temel Prensipler
1. SOLID uygulanır:
    - S: Her sınıf / modül tek sorumluluk.
    - O: Genişletmeye açık, değiştirmeye kapalı.
    - L: Alt sınıflar üst sınıfın yerine sorunsuz geçebilmeli.
    - I: Gereksiz metot içeren geniş arayüz yok.
    - D: Yüksek seviye düşük seviyeye değil; ikisi de soyutlamaya bağımlı.
2. DRY: Kod / bilgi tekrar edilmez.
3. KISS: Mümkün olan en basit çözüm seçilir.

## Kaynak Kullanımı
4. CDN kullanılmaz; tüm kütüphaneler yerel eklenir (örn. Tailwind yerel kurulmalı).

## Arayüz ve Tasarım
5. Tasarım Tailwind CSS ile yapılır.
6. Uygulama tamamen responsive olmalıdır.

## Modülerlik
7. Tek dosyada çok fazla sorumluluk biriktirilmez.
8. Dosya boyutları makul tutulur; gereksiz şişkinlik engellenir.

## Kod Tekrarını Önleme
9. Yeni bileşen eklemeden önce mevcut tekrar eden yapı kontrol edilir ve yeniden kullanılır.

## Süreç
10. Tespit edilen hata / iyileştirme fırsatı kurallara göre ele alınır.
11. Kullanıcı onayı alınmadan değişiklik yapılmaz.

## Onay ve İşaretleme
12. Tüm kurallara uyulmuşsa verilen cevabın sonuna mutlaka *ruleprompt* eklenir.

const techStack = {
  frontend: {
    framework: "Next.js 16",
    styling: "Tailwind CSS",
    language: "JavaScript", 
    animations: "Framer Motion",
    routing: "App Router",
    stateManagement: "React Context/Zustand"
  },
  backend: {
    api: "Spring Boot",
    database: "PostgreSQL",
    auth: "OAuth2",
    hosting: "VM"
  },
  features: [
    "Modern ve responsive tasarım",
    "Hizmetler sayfası",
    "Portföy/Projeler galerisi",
    "Hakkımızda ve ekip tanıtımı",
    "İletişim formu",
    "Blog/Haberler bölümü",
    "SEO optimizasyonu",
    "Çoklu dil desteği",
    "Admin paneli",
    "Sosyal medya entegrasyonu"
  ]
};

> Kurallar dışına çıkılamaz.