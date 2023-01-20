import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LoginAdmin from "./View/Page/Employe/Page/LoginAdmin";
import Accueil from "./View/Page/Employe/Page/Accueil";
import Pivot from "./View/Page/Employe/Page/Pivot";
import GestionElementAdmin from "./View/Page/Employe/Page/GestionElementAdmin";
import CategorieStat from "./View/Page/Employe/Component/CategorieStat";
import Rechargement from "./View/Page/Employe/Page/Rechargement";


function App() {
  return (
    <div
      id="main-wrapper"
      data-theme="light"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
      data-boxed-layout="full"
    >
      <BrowserRouter>
        <Routes>
          {/* Route relative to client */}
          <Route path="/" element={<Pivot />} />
          <Route path="/loginAdmin" element={<LoginAdmin />} />
          <Route path="/rechargementCheck" element={<Rechargement />} />
          <Route path="/categorieStat" element={<CategorieStat />} />
          <Route path="/gestionAdmin" element={<GestionElementAdmin />} />
          <Route path="/accueil" element={<Accueil />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
