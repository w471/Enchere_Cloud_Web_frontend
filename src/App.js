import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import AccueilClient from "./View/Page/FrontOffice/Page/AccueilClient";
import LoginAdmin from "./View/Page/BackOffice/Page/LoginAdmin";
import Rechargement from "./View/Page/BackOffice/Page/Rechargement";
import CategorieStat from "./View/Page/BackOffice/Component/CategorieStat";
import GestionElementAdmin from "./View/Page/BackOffice/Page/GestionElementAdmin";
import Accueil from "./View/Page/BackOffice/Page/Accueil";
import Comment from "./View/Page/FrontOffice/Page/Comment";
import HistoriquesEnchere from "./View/Page/FrontOffice/Page/HistoriquesEnchere";
import EncherePreHistorique from "./View/Page/FrontOffice/Page/EncherePreHistorique";
import FicheEnchere from "./View/Page/FrontOffice/Page/FicheEnchere";
import MainAccueil from "./View/Page/MainAccueil";
import Pivot from "./View/Page/BackOffice/Page/Pivot";
import SituationFinanciere from "./View/Page/FrontOffice/Page/SituationFinanciere";
import LoginClient from "./View/Page/FrontOffice/Page/LoginClient";



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
        <Route path="/" element={<MainAccueil />} />


          {/* Route relative to admin */}  
          <Route path="/pivotA" element={<Pivot />} ></Route>
          <Route path="/loginAdmin" element={<LoginAdmin />} />
          <Route path="/rechargementCheck" element={<Rechargement />} />
          <Route path="/categorieStat" element={<CategorieStat />} />
          <Route path="/gestionAdmin" element={<GestionElementAdmin />} />
          <Route path="/accueil" element={<Accueil />} />

          {/* Route relative to client */}
          <Route path="/homeC" element={<AccueilClient/>} ></Route>
          <Route path="/loginClient" element={<LoginClient />} ></Route>
          <Route path="/sF" element={<SituationFinanciere/>} ></Route>
          <Route path="/fiche/:idEnchere" element={<FicheEnchere/>} ></Route>
          <Route path="/commentaire" element={<Comment/>} />
          <Route path="/roadHistorique" element={<EncherePreHistorique />} ></Route>
          <Route path="/historiques" element={<HistoriquesEnchere />} />

          {/* Testing route */}
        {/* <Route path="/test" element={<EnchereStatus/>} ></Route>
        <Route path="/categorie" element={<EnchereStatus/>} ></Route> */}
        

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
