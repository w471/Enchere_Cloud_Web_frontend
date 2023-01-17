import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ListeEnchere from "./View/Page/Employe/Page/ListeEnchere";
import HistoriqueEnchere from "./View/Page/Employe/Page/HistoriqueEnchere";
import LoginClient from "./View/Page/Employe/Page/LoginClient";

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
          <Route path="/aClient" element={<ListeEnchere />} />
          <Route path="/hEnchere" element={<HistoriqueEnchere />}></Route>
          <Route path="/loginClient" element={<LoginClient />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
