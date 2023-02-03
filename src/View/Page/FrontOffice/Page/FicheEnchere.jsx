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
            <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-9 col-lg-12 col-xl-10">
                <h2>Fiche de l'enchère</h2>
                    <div className="card-body">
                        <div className="row align-items-center no-gutters">
                            <div className="col me-2">
                                <div className="text-uppercase text-primary fw-bold text-xs mb-1"><span>{details.description}</span></div>
                                <p><div className="text-dark fw-bold h5 mb-0">De la catégorie</div> : {details.nomCategorie}</p>
                                <p><div className="text-dark fw-bold h5 mb-0">Durée </div>: {details.duration} h </p>
                                <p><div className="text-dark fw-bold h5 mb-0">Propriétaire de l'objet </div>: {details.prenom}</p>
                                <p><div className="text-dark fw-bold h5 mb-0">Current price </div>: {currentPrice}</p>
                            </div>
                            <label className="text-dark fw-bold h5 mb-0" >Votre propostion</label>
                            <div className="row" >
                                <input type={"number"} ref={money} />
                            </div>

                            <div className="row" >
                                <button className="btn btn-primary d-block btn-user w-100" onClick={rencherir} >Renchérir</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </>
        );
    }
}
export default FicheEnchere;