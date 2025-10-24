# E-posta Sistemi Kurulum Rehberi

Kohezyon Yazılım iletişim formu için e-posta sistemi kurulumu:

## 📧 SMTP Konfigürasyonu

### 1. Gmail ile Kurulum (Önerilen)

1. **Gmail hesabınızda 2FA aktif olmalı**
2. **App Password oluşturun:**
   - Google hesabınıza gidin
   - Güvenlik > 2 Adımlı Doğrulama > Uygulama şifreleri
   - "Mail" seçin ve cihazınızı seçin
   - Oluşturulan 16 haneli şifreyi kopyalayın

3. **.env.local dosyasını güncelleyin:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-digit-app-password
CONTACT_EMAIL=info@kohesoft.com
```

### 2. Diğer E-posta Sağlayıcıları

#### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

#### Yahoo Mail
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
```

## 🔧 Kurulum Adımları

1. **Environment dosyasını oluşturun:**
```bash
cp .env.example .env.local
```

2. **SMTP bilgilerinizi güncelleyin**
3. **Uygulamayı yeniden başlatın:**
```bash
npm run dev
```

## ✅ Test Etme

1. http://localhost:3000 adresine gidin
2. İletişim formunu doldurun
3. Gönder butonuna tıklayın
4. Başarılı mesajını bekleyin

## 📬 E-posta Şablonları

Sistem otomatik olarak 2 e-posta gönderir:

1. **Şirkete:** Form verilerini içeren detaylı e-posta
2. **Kullanıcıya:** Otomatik teşekkür e-postası

## 🛡️ Güvenlik

- Form verileri server-side doğrulanır
- E-posta validation yapılır
- Spam koruması mevcuttur
- Rate limiting önerilir (production için)

## 🚀 Production Ayarları

Production ortamında aşağıdaki environment variables'ları ayarlayın:

```env
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
CONTACT_EMAIL=info@kohesoft.com
SITE_URL=https://www.kohesoft.com
```

## 📝 Notlar

- Gmail App Password kullanımı zorunludur
- SMTP bilgilerini kimseyle paylaşmayın
- .env.local dosyası Git'e commit edilmez
- Production'da ayrı SMTP servisi kullanın (SendGrid, AWS SES, etc.)