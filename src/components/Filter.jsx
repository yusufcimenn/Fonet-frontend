export default function Filters({ filters, onChange, onFilter }) {
  return (
    <div className="p-3 border rounded shadow-sm bg-white" style={{ width: "260px" }}>
      <h5 className="mb-3 fw-bold">Filtreler</h5>

      {/* TÜR */}
      <label className="form-label">Tür</label>
      <select name="type" className="form-select mb-3" value={filters.type} onChange={onChange}>
        <option value="">Hepsi</option>
        <option value="Konut">Konut</option>
        <option value="İşyeri">İşyeri</option>
        <option value="Arsa">Arsa</option>
      </select>

      {/* KATEGORİ */}
      <label className="form-label">Kategori</label>
      <select name="category" className="form-select mb-3" value={filters.category} onChange={onChange}>
        <option value="">Hepsi</option>
        <option value="Satılık">Satılık</option>
        <option value="Kiralık">Kiralık</option>
      </select>

      {/* ALAN (min/max) */}
      <label className="form-label">Min Alan (m²)</label>
      <input
        type="number"
        name="minArea"
        value={filters.minArea}
        onChange={onChange}
        className="form-control mb-3"
      />

      <label className="form-label">Max Alan (m²)</label>
      <input
        type="number"
        name="maxArea"
        value={filters.maxArea}
        onChange={onChange}
        className="form-control mb-3"
      />

      {/* FİYAT */}
      <label className="form-label">Min Fiyat (TL)</label>
      <input
        type="number"
        name="minPrice"
        value={filters.minPrice}
        onChange={onChange}
        className="form-control mb-3"
      />

      <label className="form-label">Max Fiyat (TL)</label>
      <input
        type="number"
        name="maxPrice"
        value={filters.maxPrice}
        onChange={onChange}
        className="form-control mb-3"
      />

      {/* ODA */}
      <label className="form-label">Oda Sayısı</label>
      <select name="rooms" className="form-select mb-3" value={filters.rooms} onChange={onChange}>
        <option value="">Hepsi</option>
        <option value="1+1">1+1</option>
        <option value="2+1">2+1</option>
        <option value="3+1">3+1</option>
        <option value="4+1">4+1</option>
      </select>

      {/* KAT */}
      <label className="form-label">Kat</label>
      <input
        type="number"
        name="floor"
        value={filters.floor}
        onChange={onChange}
        className="form-control mb-3"
      />

      {/* TOPLAM KAT */}
      <label className="form-label">Toplam Kat</label>
      <input
        type="number"
        name="totalFloor"
        value={filters.totalFloor}
        onChange={onChange}
        className="form-control mb-3"
      />

      {/* ISINMA */}
      <label className="form-label">Isınma</label>
      <select name="heating" className="form-select mb-3" value={filters.heating} onChange={onChange}>
        <option value="">Hepsi</option>
        <option value="Doğalgaz">Doğalgaz</option>
        <option value="Soba">Soba</option>
        <option value="Klima">Klima</option>
      </select>

      <button className="btn btn-primary w-100" onClick={onFilter}>
        Filtrele
      </button>
    </div>
  );
}
