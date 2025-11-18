import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import ProductList from "./components/ProductList";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminPage from "./pages/AdminPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />

        <main className="flex-grow">
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <Routes>
              {/* --- Rotte Pubbliche --- */}
              <Route path="/" element={<ProductList />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              {/* Rotta Dettaglio Prodotto (con slug dinamico) */}

              {/* Rotta per le categorie (riutilizza la lista prodotti filtrata per categoria) */}
              {/* <Route path="/category/:slug" element={<CategoryPage />} /> */}

              {/* --- Rotte Protette --- */}
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
