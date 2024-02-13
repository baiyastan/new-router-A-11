import { Routes, Route, Link } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePages from "./pages/HomePages";
import NotFound from "./pages/NotFound";
import AboutProduct from "./pages/AboutProduct";
import ServicePage from "./pages/ServicePage";
import CreateService from "./Components/Service/CreateService";
import "./App.css";
import UpdateService from "./Components/Service/UpdateService";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePages />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/product/:id" element={<AboutProduct />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/create-service" element={<CreateService />} />
          <Route path="/update-service/:id" element={<UpdateService />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
