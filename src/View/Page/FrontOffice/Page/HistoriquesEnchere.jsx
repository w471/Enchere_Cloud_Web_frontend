import HistoriqueEnchere from "../Component/HistoriqueEnchere";
import { useEffect,useState } from "react";
import { getUrl } from "../../../../Data/Url";
const HistoriquesEnchere = (props) => {
    const [theHistorique, setTheHistorique] = useState([]);
    
    useEffect(() => {
        let content = {
            method : "GET",
            headers : {
                "Content-Type": "application/json"
            },
        };
  
        fetch(getUrl()+"/encheres/"+props.idEnchere, content)
        .then((response)=>{
            if(response.status===200)
                return response.json();

            else
                throw new Error(response);
        })
        .then((json)=>{
            setTheHistorique(json[1]);
        })
        .catch( (error) =>{
            console.log(error);
            alert(error);
        })
    }, [props.idEnchere])
    

    return(
        <>
        <h2>Historique pour l'enchère</h2>
        {
            theHistorique.map( (element,index) =>(
                <HistoriqueEnchere key={index} nom={element.nom} price={element.price} prenom={element.prenom} />
            ))
        }
        </>
    );
}
export default HistoriquesEnchere;