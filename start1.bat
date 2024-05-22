@echo off

rem Gerekli dosyaları git repository'den çek
if not exist wallet-app (
    echo Gerekli dosyalar indiriliyor...
    git clone https://github.com/Satoshi-Labs/wallet-app.git
)
    

rem Docker Compose hizmetlerini başlat
cd wallet-app
docker-compose up -d

rem Hizmetlerin başlamasını beklemek için 10 saniye bekle
timeout /t 3

rem Tarayıcıyı aç
start "" "http://localhost"
