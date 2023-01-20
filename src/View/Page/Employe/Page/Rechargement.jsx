import Header from "../../../Template/Admin/Header";
import { useState,useEffect } from "react";

const Rechargement = () => {
    const [allPending, setAllPending] = useState([]);

    useEffect(() => {
        let content = {
            method : "GET"
        }
        fetch("http://encherecloudws-production.up.railway.app/admins",content)
        .then( (response) =>{
            return response.json();
        })
        .then( (json) => {
            setAllPending(json);
        })
    }, [])

    const myChoice =(choice,idRefill) => {
        let content = {
            method : "GET"
        }
        fetch("http://encherecloudws-production.up.railway.app/admins/choice/"+choice+"?idRefill="+idRefill,content)
    }
    

    return(
        <>
            <Header></Header>
            <section className="newsletter-subscribe">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">Rechargement account</h2>
                        <p className="text-center"></p>
                    </div>
                    <table border={1} className="d-flex justify-content-center flex-wrap">
                        <tr>
                            <th>idClient</th>
                            <th>Montant</th>
                            <th>Action</th>
                        </tr>
                        {
                        allPending.map( (element,index) => (
                            <tr key={index}>
                                <td className="mb-3"> : {element.idClient}</td>
                                <td className="mb-3">Montant : {element.vola}</td>
                                <td className="mb-3"><button onClick={ ()=>{myChoice(2,element.idRefill)} } className="btn btn-primary">Accepter</button></td>
                                <td className="mb-3"><button onClick={ ()=>{myChoice(1,element.idRefill)} } className="btn btn-primary">Refuser</button></td>
                            </tr>        
                        ))
                            }
                    </table>
                </div>
            </section>
        </>
    );
}
export default Rechargement;