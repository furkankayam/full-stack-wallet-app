rem Docker Compose hizmetlerini başlat
docker-compose up -d

rem Hizmetlerin başlamasını beklemek için 10 saniye bekle
timeout /t 3

rem Tarayıcıyı aç
start "" "http://localhost"