import { useState } from "react";
import { createProperty } from "../api/property";

export default function CreatePropertyModal({ onClose, onCreated }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    sellerId: user.id,
    type: "",
    category: "",
    minArea: "",
    maxArea: "",
    area: "",
    rooms: "",
    floor: "",
    totalFloor: "",
    heating: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await createProperty(form);

    alert("İlan oluşturuldu!");

    if (onCreated) onCreated();  // Listeyi yenile
    if (onClose) onClose();      // Modalı kapat
  } catch (err) {
    console.error(err);
    alert("İlan oluşturulamadı!");
  }
};


  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Yeni İlan Oluştur</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit}>

              <div className="row">
                <div className="col-md-6">
                  <label>Tür</label>
                  <select name="type" className="form-select" onChange={handleChange}>
                    <option value="">Seçiniz</option>
                    <option value="Konut">Konut</option>
                    <option value="İşyeri">İşyeri</option>
                    <option value="Arsa">Arsa</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label>Kategori</label>
                  <select name="category" className="form-select" onChange={handleChange}>
                    <option value="">Seçiniz</option>
                    <option value="Satılık">Satılık</option>
                    <option value="Kiralık">Kiralık</option>
                  </select>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-4">
                  <label>Alan (m²)</label>
                  <input name="area" type="number" className="form-control" onChange={handleChange}/>
                </div>

                <div className="col-md-4">
                  <label>Oda</label>
                  <input name="rooms" className="form-control" onChange={handleChange}/>
                </div>

                <div className="col-md-4">
                  <label>Isınma</label>
                  <select name="heating" className="form-select" onChange={handleChange}>
                    <option value="">Seçiniz</option>
                    <option value="Doğalgaz">Doğalgaz</option>
                    <option value="Soba">Soba</option>
                    <option value="Klima">Klima</option>
                  </select>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6">
                  <label>Kat</label>
                  <input name="floor" type="number" className="form-control" onChange={handleChange}/>
                </div>

                <div className="col-md-6">
                  <label>Toplam Kat</label>
                  <input name="totalFloor" type="number" className="form-control" onChange={handleChange}/>
                </div>
              </div>

              <div className="mt-3">
                <label>Fiyat</label>
                <input name="price" type="number" className="form-control" onChange={handleChange}/>
              </div>

              <button className="btn btn-primary w-100 mt-4" type="submit">
                Oluştur
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
