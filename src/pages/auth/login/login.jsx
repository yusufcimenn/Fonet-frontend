import { useState } from "react";
import { loginUser } from "../../../api/auth";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const user = await loginUser(form);

      // Kullanıcı bilgilerini kaydet
      localStorage.setItem("user", JSON.stringify(user));

      alert("Giriş başarılı!");

      // Role göre yönlendirme:
      if (user.role === "SELLER") {
        window.location.href = "/home";
      } else {
        window.location.href = "/home";
      }

    } catch (err) {
      console.error(err);
      setError("E-posta veya şifre yanlış!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "380px" }}>
        <h3 className="text-center mb-4">Giriş Yap</h3>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="btn btn-primary w-100">
            Giriş Yap
          </button>
        </form>

        <div className="text-center mt-3">
          <p>Hesabınız yok mu?</p>

          <a href="/register/customer">Müşteri Olarak Kayıt Ol</a> <br />
          <a href="/register/seller">Satıcı Olarak Kayıt Ol</a>
        </div>
      </div>
    </div>
  );
}
