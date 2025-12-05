import { useState } from "react";
import CreatePropertyModal from "./CreatePropertyModal";

export default function Header({ onCreated }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light shadow-sm px-4 mb-4">
        <a className="navbar-brand fw-bold" href="/">
          Fonet Emlak
        </a>

        <div>
          {/* SELLER İÇİN İLAN VER BUTONU */}
          {user?.role === "SELLER" && (
            <button
              type="button"
              className="btn btn-success me-3"
              onClick={() => setShowModal(true)}
            >
              İlan Ver
            </button>
          )}

          {user ? (
            <>
              <span className="me-3">{user.fullName}</span>
              <button className="btn btn-outline-danger" onClick={handleLogout}>
                Çıkış Yap
              </button>
            </>
          ) : (
            <a href="/login" className="btn btn-primary">
              Giriş Yap
            </a>
          )}
        </div>
      </nav>

      {/* POP-UP */}
      {showModal && (
        <CreatePropertyModal
          onClose={() => setShowModal(false)}
          onCreated={onCreated}
        />
      )}
    </>
  );
}
