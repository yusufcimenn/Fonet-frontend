import { useState } from "react";
import { registerSeller } from "../../../api/auth";


export default function SellerRegister() {
 const [form, setForm] = useState({
  fullName: "",
  email: "",
  phone: "",
  password: "",
  taxNumber: ""
});


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await registerSeller(form);
    alert("Satıcı kaydı başarılı!");
    window.location.href = "/login";
  } catch (err) {
    console.error(err);
    alert("Kayıt hatası oluştu");
  }
};


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "450px" }}>
        <h3 className="text-center mb-4">Satıcı Kayıt</h3>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Ad Soyad</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              onChange={handleChange}
              placeholder="Adınız Soyadınız"
            />
          </div>

          

         

          <div className="mb-3">
            <label className="form-label">E-posta</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              placeholder="ornek@gmail.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Şifre</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
              placeholder="*******"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Telefon</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              onChange={handleChange}
              placeholder="05xx xxx xx xx"
            />
          </div>
           <div className="mb-3">
            <label className="form-label">Vergi Numarası</label>
            <input
              type="text"
              className="form-control"
              name="taxNumber"
              onChange={handleChange}
              placeholder="1234567890"
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Satıcı Olarak Kayıt Ol
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="/login">Giriş Yap</a>
        </div>
      </div>
    </div>
  );
}
