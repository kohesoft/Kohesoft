# Kohezyon Yazılım - Docker Deployment

## Docker ile Çalıştırma

### Gereksinimler
- Docker Desktop
- Docker Compose

### Hızlı Başlangıç

#### Windows:
```bash
# Docker kurulum scripti çalıştır
docker-setup.bat
```

#### Linux/Mac:
```bash
# Script'i çalıştırılabilir yap
chmod +x docker-setup.sh

# Docker kurulum scripti çalıştır
./docker-setup.sh
```

#### Manuel Kurulum:

1. **Environment dosyasını hazırla:**
```bash
cp .env.example .env.local
# .env.local dosyasını düzenle
```

2. **Docker image'ı build et:**
```bash
docker-compose build
```

3. **Konteyneri başlat:**
```bash
docker-compose up -d
```

4. **Uygulama çalışıyor:**
```
http://localhost:3000
```

### Docker Komutları

```bash
# Logları izle
docker-compose logs -f

# Konteyneri durdur
docker-compose stop

# Konteyneri yeniden başlat
docker-compose restart

# Konteyneri kaldır
docker-compose down

# Build ile birlikte restart
docker-compose up --build -d

# Sistem kaynaklarını temizle
docker system prune -f
```

### Environment Variables

`.env.local` dosyasında aşağıdaki değişkenleri ayarlayın:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-SXJFNCX43C

# Email Configuration (Hostinger SMTP)
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=admin@kohesoft.com
SMTP_PASS=your_email_password_here

# Email Settings
EMAIL_FROM=admin@kohesoft.com
EMAIL_TO=info@kohesoft.com
```

### Production Deployment

#### Docker Hub'a Push:
```bash
# Image'ı tag'le
docker tag kohesoft_kohesoft-web:latest kohesoft/web:latest

# Docker Hub'a push et
docker push kohesoft/web:latest
```

#### Production Server'da Çalıştır:
```bash
# Production compose dosyası ile çalıştır
docker-compose -f docker-compose.prod.yml up -d
```

### Güvenlik

- Container non-root user (nextjs) ile çalışır
- Port sadece 3000 expose edilir
- Environment variables güvenli şekilde inject edilir
- Health check mekanizması aktif

### Troubleshooting

#### Container başlamıyor:
```bash
# Logları kontrol et
docker-compose logs kohesoft-web

# Container'ı yeniden başlat
docker-compose restart kohesoft-web
```

#### Port conflict:
```bash
# Farklı port kullan
docker-compose up -d --scale kohesoft-web=1 -p 3001:3000
```

#### Memory issues:
```bash
# Docker resources'ları artır
# Docker Desktop -> Settings -> Resources
```

### Monitoring

#### Health Check:
```bash
curl http://localhost:3000/api/health
```

#### Container Stats:
```bash
docker stats kohesoft_kohesoft-web_1
```