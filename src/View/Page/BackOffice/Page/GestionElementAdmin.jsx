import { useState,useEffect,useRef } from "react";
import Header from "../../../Template/Admin/Header";
import { getUrl } from "../../../../Data/Url";
const GestionElementAdmin = () => {
  const duree = useRef([]);
  const [allEnchereNotDone, setAllEnchereNotDone] = useState([])

  useEffect(() => {
    let content = {
      method : "GET"
    };

    fetch(getUrl()+"/admins/categorisation",content)
    .then( (response) => {
      if(response.status!==200)
        throw new Error(response);

        else if(response.status===200)
          return response.json()
    })
    .then((data)=>{
      setAllEnchereNotDone(data)
    })
  }, [])
  

  const HandleUpdate = (idEnchere,index) => {

    var content = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log(duree.current.value);
    fetch(getUrl()+"/encheres/"+idEnchere+"?duration="+duree.current[index].value, content)
     
  };
    return (
      <div>      
        <Header></Header>
        <h1>Ajout Categorie</h1>
      <table className="table">
          <thead>
              <tr>
                  <th scope="col">Date de debut</th>
                  <th scope="col">Duree</th>
                  <th scope="col">Description</th>
                  <th scope="col">Prix initiale</th>
                  <th scope="col">Categorie</th>
              </tr>
          </thead>
          <tbody>
            {
              allEnchereNotDone.map( (element,index) =>(
                <tr key={index}>
                    <td>{element.timingStart}</td>
                    <td><input defaultValue={element.duration} ref={ el => (duree.current[index] = el)} type="number"/></td>
                    <td>{element.description}</td>
                    <td>{element.startPrice}</td>
                    <td>{element.nomCategorie}</td>
                    <td><button onClick={()=>{HandleUpdate(element.idEnchere,index)}}>Valider</button></td>
                </tr>
              ))
            }
                
            </tbody>
          </table>
    </div>

    );
  }
export default GestionElementAdmin;
