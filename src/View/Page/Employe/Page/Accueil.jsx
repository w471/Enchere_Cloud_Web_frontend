import CategorieStat from "../Component/CategorieStat";
import { useState,useEffect } from "react";
import Header from "../../../Template/Admin/Header";

const Accueil = () => {
  const [pourentage, setPourentage] = useState([]);
  const [trend, setTrend] = useState([]);
  const [rentabilite, setRentabilite] = useState([]);

  useEffect(() => {
    let content = {
      method : "GET"
    };

    fetch("https://127.0.0.1:8080/categories/stat1",content)
    .then( response => {
      return response.json();
    })
    .then( (json) => {
        setPourentage(json);
    });

    fetch("https://127.0.0.1:8080/categories/stat2",content)
    .then( response => {
      return response.json();
    })
    .then( (json) => {
        setTrend(json);
    });

    fetch("https://127.0.0.1:8080/categories/stat3",content)
    .then( response => {
      return response.json();
    })
    .then( (json) => {
        setRentabilite(json);
    });
  
    
  }, [])
  

    return (
      <div>      
         <Header></Header>
        < CategorieStat tableName={"Categorie utilisées en pourcentage"} unite={"%"} statType={"Pourcentage"} data={pourentage} />
        <CategorieStat tableName={"Nombre renchérir par catégorie"} unite={"fois"} statType={"Apréciation"} data={trend} />
        <CategorieStat tableName={"Catégorie ayant le plus rapporté d argent en une enchère"} unite={"Ar"} statType={"Money"} data={rentabilite} />
  </div>

    );
  }

export default Accueil;
