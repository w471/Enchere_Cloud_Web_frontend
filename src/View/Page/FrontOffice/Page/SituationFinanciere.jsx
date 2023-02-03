import Header from "../../../Template/Client/Header";
import {useEffect, useState} from "react";
import {getUrl} from "../../../../Data/Url";

const SituationFinanciere = () => {
    const [situationF,setSituationF] = useState(null);
    useEffect(()=> {
        let content = {
            method : "GET"
        };

        if(localStorage.getItem("tokenClient")!==null){
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
        }
        },[])

    if(situationF!==null) {
        return (
            <>
                <Header></Header>
                <h2>Votre situation financière</h2>

                

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-12 col-xl-10">
                    <div className="card shadow border-start-primary py-2">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-3" ></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h4 className="text-dark mb-4">Login admin side</h4>
                                            </div>
                                                <div className="mb-3">Argent total dépensé : {situationF.totalSpent}</div>
                                                <div className="mb-3">Argent total gagné : {situationF.totalIncome}</div>
                                                <div className="mb-3">Votre solde : {situationF.solde}</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" ></div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </>

        );

        }else{
            return(
                <>
                    <Header></Header>
                    <div className="card shadow border-start-primary py-2">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-3" ></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <a className="text-dark mb-4" href="/loginClient"><button className="btn btn-primary"  >Connectez vous pour voir votre solde</button></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" ></div>
                                </div>
                            </div>
                        </div>
                </>
            );
        }
}
export default SituationFinanciere;