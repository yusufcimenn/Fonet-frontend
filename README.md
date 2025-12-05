#  FonetTask — Full Stack Emlak Yönetim Sistemi

Bu proje, satıcıların emlak ilanı oluşturabildiği, müşterilerin ilanları filtreleyerek görüntüleyebildiği **full-stack bir web uygulamasıdır.**  
Aşağıdaki teknolojiler kullanılarak geliştirilmiştir:

---

#  Kullanılan Teknolojiler

## 🖥️ Frontend (React)
- React (Vite)
- React Router
- Axios
- Bootstrap 5
- Component-Based Architecture
- LocalStorage Authentication

## ⚙ Backend (Spring Boot)
- Spring Boot 3.x
- Spring Web (REST Controller)
- Spring Data JPA
- **H2 In-Memory Database**
- Lombok (Opsiyonel alanlarda)
- Katmanlı Mimari (Controller → Service → Repository)

## 🗄 Veritabanı
- **H2 Database (In-Memory / Console Mode)**
- Uygulama her başlatıldığında tablo yapısı otomatik oluşur
- Web konsolu aktiftir:

### Öne çıkan özellikler:
- Role-based UI (SELLER → ilan oluşturabilir)
- Popup modal ile ilan oluşturma
- URLSearchParams kullanılarak dinamik filtreleme
- Responsive tasarım
- Axios ile API katmanı soyutlama

---

#  Özellikler

### ✔ Kullanıcı Kayıt & Giriş
- Müşteri ve satıcı için ayrı kayıt ekranları
- LocalStorage üzerinden oturum saklama
- Login sonrası rol tabanlı yönlendirme

### ✔ İlan Listeleme
- Modern kart tasarımı
- Filtre paneli (alan, fiyat, oda, ısınma, kategori, tür…)
- Backend ile anlık senkronizasyon

### ✔ İlan Oluşturma (Seller)
- Popup modal üzerinde ilan formu
- Başarılı işlem → modal kapanır + liste yenilenir

### ✔ İlan Detayı
- Her ilana tıklayarak detayına gidilir

---

#  Kurulum Talimatları

##  Backend Kurulumu

