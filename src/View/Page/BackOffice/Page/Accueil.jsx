import CategorieStat from "../Component/CategorieStat";
import { useState,useEffect } from "react";
import Header from "../../../Template/Admin/Header";
import { getUrl } from "../../../../Data/Url";

const Accueil = () => {
  const [pourentage, setPourentage] = useState([]);
  const [trend, setTrend] = useState([]);
  const [rentabilite, setRentabilite] = useState([]);

  useEffect(() => {
    let content = {
      method : "GET"
    };

    fetch(getUrl()+"/categories/stat1",content)
    .then( response => {
      return response.json();
    })
    .then( (json) => {
        setPourentage(json);
    });

    fetch(getUrl()+"/categories/stat2",content)
    .then( response => {
      return response.json();
    })
    .then( (json) => {
        setTrend(json);
    });

    fetch(getUrl()+"/categories/stat3",content)
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
