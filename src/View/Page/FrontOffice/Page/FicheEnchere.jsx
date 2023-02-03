import {useEffect, useRef, useState} from "react";
import { getUrl } from "../../../../Data/Url";
import { useParams } from "react-router";
import Header from "../../../Template/Client/Header";

const FicheEnchere = () => {
    const params = useParams();
    const [details, setDetails] = useState(null);
    const [currentPrice, setCurrentPrice] = useState(null);

    const money = useRef(null);

    useEffect(() => {

        let content = {
            method : "GET",
            headers : {
                "Content-Type": "application/json"
            },
        };
  
        fetch(getUrl()+"/encheres/"+params.idEnchere, content)
        .then((response)=>{
            if(response.status===200)
                return response.json();

            else
                throw new Error(response);
        })
        .then((json)=>{
            console.log(json);
            setDetails(json[0]);
            setCurrentPrice(json[2]);
        })
        .catch( (error) =>{
            console.log(error);
            alert(error);
        })
    }, [])

    const rencherir = () => {
        if(localStorage.getItem("tokenClient")===null)
                window.location.href = "/loginClient";

        else{
            let content = {
                method : "POST",
                headers : {
                    "Content-Type": "application/json"
                },
            };
            content.body = JSON.stringify({
                idEnchere : params.idEnchere,
                idClient : localStorage.getItem("idPersonne"),
                price : money.current.value
            })

            fetch(getUrl()+"/clients/bid", content)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error(response);
                    }
                    else if(response.status ===200)
                        alert("Bid réussie");
                })
                .catch(error => {
                    alert("Impossible, veuillez verifier les conditions de cet enchère");
                })
        }
    }    

    if(details!==null) {

        return(
            <>
            <Header></Header>
                <h2>Fiche de l'enchère</h2>

                <h3>{details.description}</h3>
                <h4>De la catégorie : {details.nomCategorie}</h4>

                <p>Démarré : {details.timingStart} </p>
                <p>Durre : {details.duration} h</p>

                <h3>Propriétaire de l'objet : {details.prenom} </h3>

                <h3>Current price : {currentPrice}</h3>

                <label>Votre propostion</label>
                <input type={"number"} ref={money} />
                <button onClick={rencherir} >Renchérir</button>
            </>
        );
    }
}
export default FicheEnchere;