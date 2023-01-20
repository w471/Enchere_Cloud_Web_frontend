const CategorieStat = (props) =>{
    return(
        <>
            <h2>{props.tableName}</h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Nom categorie</th>
                    <th scope="col">{props.statType}</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map( (element,index) =>(
                        <tr key={index}>
                            <td>{element.nomCategorie}</td>
                            <td>{element.stat}  {props.unite}  </td>
                        </tr>
                    ))
                }
            </tbody>
          </table>
         
        </>
    );
}
export default CategorieStat;