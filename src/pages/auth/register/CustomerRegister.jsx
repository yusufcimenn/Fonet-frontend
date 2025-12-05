import { useState } from "react";
import { registerCustomer } from "../../../api/auth";

export default function CustomerRegister() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await registerCustomer(form);
    alert("Müşteri kaydı başarılı!");
    window.location.href = "/login";
  } catch (err) {
    console.error(err);
    alert("Kayıt başarısız oldu!");
  }
};


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "420px" }}>
        <h3 className="text-center mb-4">Müşteri Kayıt</h3>

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

          <button type="submit" className="btn btn-primary w-100">
            Kayıt Ol
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="/login">Giriş Yap</a>
        </div>
      </div>
    </div>
  );
}
