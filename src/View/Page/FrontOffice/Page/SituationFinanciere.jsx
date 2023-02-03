import Header from "../../../Template/Client/Header";
import {useEffect, useState} from "react";
import {getUrl} from "../../../../Data/Url";

const SituationFinanciere = () => {
    const [situationF,setSituationF] = useState(null);
    useEffect(()=> {
        let content = {
            method : "GET"
        };

        fetch(getUrl()+"/clients/getSolde?idPersonne="+localStorage.getItem("idClient"),content)
            .then( (response) => {
                if(response.status!==200)
                    throw new Error(response);

                else if(response.status===200)
                    return response.json()
                })
                .then((data)=>{
                    setSituationF(data);
                })
        },[])

    if(situationF!==null) {
        return (
            <>
                <Header></Header>
                <h2>Votre situation financière</h2>

                <p>Argent total dépensé : {situationF.totalSpent}</p>
                <p>Argent total gagné : {situationF.totalIncome}</p>
                <p>Votre solde : {situationF.solde} </p>
            </>

        );
    }
}
export default SituationFinanciere;