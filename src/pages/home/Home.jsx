import { useEffect, useState } from "react";
import { listProperties} from "../../api/property";
import { searchProperties} from "../../api/property";
import Header from "../../components/Header";
import Filters from "../../components/Filter";

export default function Home() {
  const [properties, setProperties] = useState([]);

  const [filters, setFilters] = useState({
  type: "",
  category: "",
  minArea: "",
  maxArea: "",
  minPrice: "",
  maxPrice: "",
  rooms: "",
  floor: "",
  totalFloor: "",
  heating: "",
  sellerId: ""
});


  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const data = await listProperties();
      setProperties(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFilterChange = (e) => {
     setFilters({ ...filters, [e.target.name]: e.target.value });
   };

   const handleFilterSubmit = async () => {
  try {
    const data = await searchProperties(filters);
    setProperties(data);
  } catch (err) {
    console.error(err);
  }
};


  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row">

          {/* Sol Filtre Paneli */}
          <div className="col-md-3">
            <Filters
            filters={filters}
            onChange={handleFilterChange}
            onFilter={handleFilterSubmit}
            />

          </div>

          {/* İlanlar */}
          <div className="col-md-9">
            <h4 className="mb-3">Tüm İlanlar</h4>

            

            {properties.map((p) => (
              <div key={p.id} className="card mb-3 shadow-sm">
                <div className="row g-0">

                  {/* GÖRSEL */}
                  <div className="col-md-4">
                    <img
                      src={`https://picsum.photos/seed/${p.id}/400/300`}
                      className="img-fluid rounded-start"
                      alt="ilan"
                    />
                  </div>

                  {/* BİLGİLER */}
                  <div className="col-md-8">
                    <div className="card-body">

                      <h5 className="card-title">
                        {p.category} – {p.type}
                      </h5>

                      <h4 className="text-primary fw-bold">
                        {p.price.toLocaleString()} TL
                      </h4>

                      <p className="card-text mb-1">Oda: {p.rooms}</p>
                      <p className="card-text mb-1">Alan: {p.area} m²</p>
                      <p className="card-text mb-1">
                        Kat: {p.floor}/{p.totalFloor}
                      </p>
                      <p className="text-muted">Isınma: {p.heating}</p>

                      <p className="text-muted">
                        <strong>Satıcı:</strong> {p.sellerName}
                      </p>

                      <a href={`/properties/${p.id}`} className="btn btn-outline-primary mt-2">
                        Detay
                      </a>

                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
}
