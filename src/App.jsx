import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/login";
import CustomerRegister from "./pages/auth/register/CustomerRegister";
import SellerRegister from "./pages/auth/register/SellerRegister";
import Home from "./pages/home/Home";
import PropertyDetail from "./pages/home/PropertyDetail";

function App() {
  return (
     <Routes>

       <Route path="/login" element={<Login />} />
       <Route path="/home" element={<Home />} />
       <Route path="/register/customer" element={<CustomerRegister />} />
       <Route path="/register/seller" element={<SellerRegister />} />
       <Route path="/properties/:id" element={<PropertyDetail />} />

       {/* <Route path="/property/create" element={<CreateProperty />} />
       <Route path="/properties/:id" element={<PropertyDetail />} /> */}

     </Routes>

  );
}

export default App;
