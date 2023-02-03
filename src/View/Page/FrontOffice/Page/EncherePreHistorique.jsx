import { useState,useEffect } from "react";
import EnchereStatus from "../Component/EnchereStatus";
import { useNavigate } from "react-router-dom";
import { getUrl } from "../../../../Data/Url";
import Header from "../../../Template/Client/Header";
const EncherePreHistorique = () => {
    const [allEnchere, setAllEnchere] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let content = {
            method : "GET",
            headers : {
                "Content-Type": "application/json"
            },
        };
  
        fetch(getUrl()+"/clients/getPossesed?idPersonne="+localStorage.getItem("idClient"), content)
        .then((response)=>{
            if(response.status===200)
                return response.json();

            else
                throw new Error(response);
        })
        .then((json)=>{
            console.log(json);
            setAllEnchere(json);
        })
        .catch( (error) =>{
            console.log(error);
            alert(error);
        })
    }, [])

    const seeHistorique = (idEnchere) =>{
        navigate('/historiques',{state:{idEnchere}});
    }
    
    
    return(
        <>
        <Header></Header>
            <h2>Liste des ses propres encheres</h2>
            {
                allEnchere.map( (element,index) =>(
                    <div key={index} >
                        <EnchereStatus description={element.description} timingStart={element.timingStart} duration={element.duration} price={element.price} image={element.image} />
                        <button onClick={()=>{seeHistorique(element.idEnchere)}} >Voir Historique</button>
                    </div>
                ))
            }
        </>
    );
}
export default EncherePreHistorique;