import {useEffect, useRef, useState} from "react";
// import {getUrl} from ".Data/Url";
import Choose from "../Component/Choose";
import { getUrl } from "../../../../Data/Url";
import EnchereStatus from "../Component/EnchereStatus";
import Header from "../../../Template/Admin/Header";


const AccueilClient = () => {
    const [allCategorie, setAllCategorie] = useState([]);
    const [researchResult, setResearchResult] = useState(null);
    const [initialList, setInitialList] = useState([]);

    const word = useRef([]);
    const sign = useRef([]);

    // const status = useRef(null);
    // const statusSign = useRef(null);

    // const timingStart = useRef(null);
    // const timingStartSign = useRef(null);

    // const price = useRef(null);
    // const priceSign = useRef(null);

    // const description = useRef(null);
    // const descriptionSign = useRef(null);

    useEffect(() => {
        let content = {
            method : "GET",
            headers : {
                "Content-Type": "application/json"
            },
        };
  
        fetch(getUrl()+"/categories/", content)
        .then((response)=>{
            if(response.status===200)
                return response.json();

            else
                throw new Error(response);
        })
        .then((json)=>{
            setAllCategorie(json);
        })
        .catch( (error) =>{
            console.log(error);
            alert(error);
        })
    }, [])

    useEffect(() => {
        let content = {
            method : "GET",
            headers : {
                "Content-Type": "application/json"
            },
        };
  
        fetch(getUrl()+"/clients/list?idPersonne=1"+localStorage.getItem("idClient"), content)
        .then((response)=>{
            if(response.status===200)
                return response.json();

            else
                throw new Error(response);
        })
        .then((json)=>{
            setInitialList(json);
        })
        .catch( (error) =>{
            console.log(error);
            alert(error);
        })
    }, [])



    const rechercher = () => {
        let research = [
            "idCategorie",
            "timingStart",
            "description",
            "status",
            "price"
        ];


        let content = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          };

        let toSend = {} ;
        for(let i =0;i<research.length;i++){
            if(word.current[i].value!==''){
                let fandehany = research[i]+'Sign'; 
                toSend[research[i]] = word.current[i].value;
                toSend[fandehany] = sign.current[i].value;
            }
        }

      
        content.body = JSON.stringify(toSend);
        // console.log(content.body);
        
          fetch(getUrl()+"/encheres/search", content)
            .then((response) => {
              if (response.status === 200) 
                return response.json()
                

              else
                throw new Error(response);
            })
            .then( (json) =>{
                console.log(json);
                setResearchResult(json);
            })
            .catch((error) => {
              alert(error);
            })
    }


    return(
        <>
        <Header></Header>
             <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-9 col-lg-12 col-xl-10">
                
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-3" ></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h4 className="text-dark mb-4">Caractéristiques de recherche</h4>
                                    </div>
                <input value="=" type={"hidden"} ref={ el => (sign.current[0] = el) } />
                

                    <div className="row">
                        <div className="col-lg-6">
                            <label>Categorie</label>
                        </div>
                        <div className="col-lg-6">
                        <select className="form-control form-control-user" ref={ el => (word.current[0] = el) } >
                        <option value={''} >Pas important</option>
                        {
                            allCategorie.map( (element,index) =>(
                                <option key={index} value={element.idCategorie} >{element.nomCategorie}</option>
                            ))

                        }
                    </select>
                        </div>
                    </div>
               
                    <div className="row">
                        <div className="col-lg-6">
                            <label>Timing start</label>
                        </div>


                        <div className="col-lg-3">
                            <div className="form-control form-control-user">
                                <Choose  myRef={ el => (sign.current[1] = el) } />
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <input className="form-control form-control-user" type={"datetime-local"} ref={el => (word.current[1] = el)} />
                        </div>

                        
                    </div>
               
                
                    <div className="row">
                        <div className="col-lg-6">
                            <label>Description</label>
                        </div>
                        <div className="col-lg-6">
                        <input className="form-control form-control-user" value="like" type={"hidden"} ref={ el => (sign.current[2] = el) } />
                        <input className="form-control form-control-user" type={"text"} ref={el => (word.current[2] = el)} />
                    
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-6">
                            <label>status</label>
                        </div>
                        <div className="col-lg-6">
                        <input value="=" type={"hidden"} ref={ el => (sign.current[3] = el) } />
                        <select className="form-control form-control-user" ref={el => (word.current[3] = el)}>
                            <option value={""} >Pas important</option>
                            <option value="0" >En cours</option>
                            <option value={"1"} >Terminé</option>
                        </select>
                        </div>
                    </div>
                
                
                
                    <div className="row">
                        <div className="col-lg-6">
                            <label>Prix de départ</label>
                        </div>


                        <div className="col-lg-3">
                            <div className="form-control form-control-user">
                            <Choose className="form-control form-control-user" myRef={ el => (sign.current[4] = el) } />
                            </div>
                        </div>

                        <div className="col-lg-3">
                        <input className="form-control form-control-user" type={"number"} ref={el => (word.current[4] = el)} />
                        </div>

                        
                    </div>
               
                
                


                <button className="btn btn-primary d-block btn-user w-100" onClick={rechercher} >Rechercher</button>
            </div>
                            </div>
                            <div className="col-lg-3" ></div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="text-center">
        <h4 className="text-dark mb-4">Liste d'enchères</h4>
    </div>
        {
            researchResult!==null &&
            <div className="row">
            {
                researchResult.map( (element,index) =>(
                    <EnchereStatus key={index} element={element} />  
                ))
            }
            </div>
        }


        {
            researchResult==null &&
            <div className="row">
            {
                initialList.map( (element,index) =>(
                    <EnchereStatus key={index} element={element} />  
                ))
            }
            </div>
        }
        </>
    );
}
export default AccueilClient;
