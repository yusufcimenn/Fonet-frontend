import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPropertyById } from "../../api/property";
import Header from "../../components/Header";

export default function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    loadProperty();
  }, []);

  const loadProperty = async () => {
    try {
      const data = await getPropertyById(id);
      setProperty(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!property) return <p className="text-center mt-5">Yükleniyor...</p>;

  return (
    <>
      <Header />

      <div className="container mt-4">
        <div className="row">

          {/* Sol tarafta büyük görsel */}
          <div className="col-md-6">
            <img
              src={`https://picsum.photos/seed/${property.id}/800/500`}
              alt="property"
              className="img-fluid rounded shadow-sm"
            />
          </div>

          {/* Sağ tarafta ilan bilgileri */}
          <div className="col-md-6">
            <div className="card shadow-sm p-4">

              <h3 className="fw-bold">
                {property.category} – {property.type}
              </h3>

              <h2 className="text-primary fw-bold mb-3">
                {property.price.toLocaleString()} TL
              </h2>

              <p className="mb-2"><strong>Alan:</strong> {property.area} m²</p>
              <p className="mb-2"><strong>Oda Sayısı:</strong> {property.rooms}</p>
              <p className="mb-2">
                <strong>Kat:</strong> {property.floor}/{property.totalFloor}
              </p>
              <p className="mb-2"><strong>Isınma:</strong> {property.heating}</p>

              <hr />

              <p className="mb-1"><strong>Satıcı:</strong> {property.sellerName}</p>
              <p className="mb-1"><strong>ID:</strong> {property.sellerId}</p>

              <button className="btn btn-outline-primary mt-3 w-100">
                Satıcıyla İletişime Geç
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
