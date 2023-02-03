import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import AccueilClient from "./View/Page/FrontOffice/Page/AccueilClient";
import Pivot from "./View/Page/BackOffice/Page/Pivot";
import LoginAdmin from "./View/Page/BackOffice/Page/LoginAdmin";
import Rechargement from "./View/Page/BackOffice/Page/Rechargement";
import CategorieStat from "./View/Page/BackOffice/Component/CategorieStat";
import GestionElementAdmin from "./View/Page/BackOffice/Page/GestionElementAdmin";
import Accueil from "./View/Page/BackOffice/Page/Accueil";
import Comment from "./View/Page/FrontOffice/Page/Comment";
import HistoriquesEnchere from "./View/Page/FrontOffice/Page/HistoriquesEnchere";



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
          {/* Route relative to admin */}
          <Route path="/" element={<Pivot />} />
          <Route path="/loginAdmin" element={<LoginAdmin />} />
          <Route path="/rechargementCheck" element={<Rechargement />} />
          <Route path="/categorieStat" element={<CategorieStat />} />
          <Route path="/gestionAdmin" element={<GestionElementAdmin />} />
          <Route path="/accueil" element={<Accueil />} />

          {/* Route relative to client */}
          <Route path="/homeC" element={<AccueilClient/>} ></Route>
          <Route path="/commentaire" element={<Comment/>} />

          {/* Testing route */}
        {/* <Route path="/test" element={<EnchereStatus/>} ></Route>
        <Route path="/categorie" element={<EnchereStatus/>} ></Route> */}
        <Route path="/test" element={<HistoriquesEnchere idEnchere={2} />} />

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
