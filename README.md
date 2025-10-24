# Kohezyon Yazılım | Corporate Website

Modern ve responsive kurumsal web sitesi - Modern teknolojiler ile geliştirilmiştir.

## 🚀 Özellikler

- ✅ **Modern Framework** yapısı
- ✅ **Responsive Styling** (Yerel kurulum)
- ✅ **Smooth Animations** 
- ✅ **Mobile-First Design**
- ✅ **Multi-language** desteği (TR/EN)
- ✅ **SEO Optimized**
- ✅ **SOLID Principles** uygulaması
- ✅ **Modular Component** yapısı
- ✅ **Modern UI/UX** tasarım

## 📋 Sayfalar & Bölümler

- 🏠 Ana Sayfa (Hero, İstatistikler)
- 🔧 Hizmetlerimiz (Web Geliştirme, Mobil App, E-ticaret, Danışmanlık)
- 🏢 Hakkımızda (Şirket bilgileri, İstatistikler)
- 💼 Projelerimiz (Portfolio, Galeri)
- 👥 Ekibimiz (Team member kartları)
- 📞 İletişim (Form, Bilgiler)
- 📝 Blog/Haberler (Gelecek sürüm)

## 🛠️ Teknoloji Stack

### Frontend
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS (Local)
- **Animations**: Framer Motion
- **State Management**: React Context + Zustand
- **Language**: JavaScript (TypeScript değil)

### Backend (Planlanan)
- **API**: Spring Boot
- **Database**: PostgreSQL
- **Authentication**: OAuth2
- **Hosting**: VM

## 🏗️ Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout
│   ├── page.js            # Ana sayfa
│   └── globals.css        # Global stiller
├── components/
│   ├── layout/            # Layout componentleri
│   │   ├── Header.js      
│   │   ├── Navigation.js  
│   │   ├── MobileMenu.js  
│   │   └── Footer.js      
│   ├── sections/          # Sayfa bölümleri
│   │   ├── Hero.js        
│   │   ├── Services.js    
│   │   ├── About.js       
│   │   ├── Portfolio.js   
│   │   ├── Team.js        
│   │   └── Contact.js     
│   └── ui/                # UI componentleri
│       ├── LanguageToggle.js
│       └── Toaster.js     
├── context/               # React Context
│   └── LanguageContext.js 
└── lib/                   # Utilities (gelecek)
```

## 🚦 Kurulum & Çalıştırma

### Hızlı Kurulum (Windows):
```bash
.\setup.bat
```

### Manuel Kurulum:
1. **Bağımlılıkları yükle:**
   ```bash
   npm install
   ```

2. **CSS build (ilk defa):**
   ```bash
   npm run tailwind-build
   ```

3. **Geliştirme sunucusunu başlat:**
   ```bash
   npm run dev
   ```

4. **Tarayıcıda aç:**
   ```
   http://localhost:3000
   ```

## 📝 Geliştirme Kuralları

Bu proje `.github/prompts/rule.prompt.md` dosyasındaki kurallara uygun geliştirilmelidir:

### ✅ Zorunlu Prensipler
- **SOLID** principles uygulanır
- **DRY** - Kod/bilgi tekrarı yapılmaz  
- **KISS** - En basit çözüm seçilir
- **CDN kullanılmaz** - Tüm kütüphaneler yerel
- **Tailwind CSS** - Styling için
- **Tamamen responsive** tasarım
- **Modular yapı** - Tek sorumluluk prensibi
- **Kullanıcı onayı** - Değişiklikler öncesi

### 🎯 Kod Kalitesi
- Dosya boyutları makul tutulur
- Mevcut bileşenler kontrol edilir
- Yeniden kullanılabilir yapılar tercih edilir
- Modern ES6+ JavaScript

## 🎨 Tasarım Sistemi

### Renkler
- **Primary**: Blue tones (#3b82f6)
- **Secondary**: Gray tones (#64748b)  
- **Accent**: Purple tones (#e54dff)

### Tipografi
- **Font**: Inter (Google Fonts)
- **Responsive text sizes**
- **Hierarchy**: h1-h6 + p styles

### Componentler
- **Button variants**: Primary, Secondary, Outline
- **Cards**: Shadow + hover effects
- **Forms**: Focus states + validation
- **Animations**: Subtle + performant

## 📱 Responsive Breakpoints

- **xs**: 475px (Extra small)
- **sm**: 640px (Small)  
- **md**: 768px (Medium)
- **lg**: 1024px (Large)
- **xl**: 1280px (Extra large)

## 🌐 Multi-Language

Desteklenen diller:
- 🇹🇷 **Türkçe** (Varsayılan)
- 🇺🇸 **English**

Çeviriler `src/context/LanguageContext.js` dosyasında yönetilir.

## 🧪 Test & Build

```bash
# Production build
npm run build

# Lint check
npm run lint

# Start production
npm start
```

## 📄 Lisans

Bu proje Kohezyon Yazılım'a aittir ve private lisans altındadır.

## 👥 Katkı

Geliştirme kurallarına uygun olarak katkıda bulunmak için:
1. Mevcut component yapısını kontrol et
2. SOLID principles'a uy
3. Kullanıcı onayı al
4. `*ruleprompt*` ile tamamla

---

**Kohezyon Yazılım** - Modern çözümler ile dijital dönüşümünüzü gerçekleştirin.