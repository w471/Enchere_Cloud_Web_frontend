import { useState,useEffect,useRef } from "react";
import Header from "../../../Template/Admin/Header";
const GestionElementAdmin = () => {
  const duree = useRef(null);
  const [allEnchereNotDone, setAllEnchereNotDone] = useState([])

  useEffect(() => {
    let content = {
      method : "GET"
    };

    fetch("http://127.0.0.1:8080/admins/categorisation",content)
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
  

  const HandleUpdate = (event) => {
    event.preventDefault();

    var content = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:8080/encheres/2?duration="+duree.current.value, content)
     
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
                    <td><input defaultValue={element.duration} ref={duree} type="number"/></td>
                    <td>{element.description}</td>
                    <td>{element.startPrice}</td>
                    <td>{element.nomCategorie}</td>
                    <td><button onClick={HandleUpdate}>Valider</button></td>
                </tr>
              ))
            }
                
            </tbody>
          </table>
    </div>

    );
  }
export default GestionElementAdmin;
