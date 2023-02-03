import { useRef,useState,useEffect } from "react";
import { getUrl } from "../../../../Data/Url";
import Header from "../../../Template/Client/Header";
const Comment = () => {
    const [allComment, setAllComment] = useState([]);
    const [clientInfos, setClientInfos] = useState(null);

    const appreciation = useRef(null);
    const commentaire = useRef(null);
    const note = useRef(null);

    useEffect(() => {
        let content = {
          method : "GET"
        };
    
        fetch(getUrl()+"/commentaires",content)
        .then( (response) => {
          if(response.status!==200)
            throw new Error(response);
    
            else if(response.status===200)
              return response.json()
        })
        .then((data)=>{
          setAllComment(data);
        })
      }, [])

      useEffect(() => {
        let content = {
          method : "GET"
        };
    
        fetch(getUrl()+"/clients/"+localStorage.getItem("idClient"),content)
        .then( (response) => {
          if(response.status!==200)
            throw new Error(response);
    
            else if(response.status===200)
              return response.json()
        })
        .then((data)=>{
            setClientInfos(data);
        })
        .catch( error =>{
            alert(error);
        })
      }, [])

    const sendComment = () => {
        let content = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
        };

        content.body = JSON.stringify({
            appreciation : appreciation.current.value,
            commentaire : commentaire.current.value,
            note : note.current.value,
            clientInfos : [
                clientInfos.nom,
                clientInfos.prenom,
                clientInfos.email
            ]
        })

        fetch(getUrl()+"/commentaires",content)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error(response);
          } 
          else if(response.status ===200)
            return response;
        })
        .then((response) => {
            alert('Votre feedback a été envoyé avec succès');
        })
        .catch(error => {
          alert("Mot de passe non identifier");
        })   
    }

    return(
        <>
        <Header></Header>
        <h2>Ce que nos utilisateurs ont pensé</h2>
        {
            allComment.map( (element,index) =>  (
                <div key={index} >
                    <h3>{element.appreciation}</h3>
                    <p>{element.commentaire}</p>
                    <h3>{element.note}</h3>
                    <hr/>
                    <p>By {element.clientInfos[0]},{element.clientInfos[1]}</p>
                    <p>{element.clientInfos[2]}</p>
                </div>
            ))
        }
        

        <h2>Envoyez nous vos feedbacks</h2>
        <input type={"text"} ref={appreciation} placeholder="Appréciation général" />
        <input type={"text"} ref={commentaire} placeholder="Votre commentaire" />
        <input type={"number"} max={20} min={0} ref={note} />
        <button onClick={sendComment} >Envoyez</button>
        </>
    );
}
export default Comment;