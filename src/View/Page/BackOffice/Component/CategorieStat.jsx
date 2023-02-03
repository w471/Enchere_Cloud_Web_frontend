const CategorieStat = (props) =>{
    return(

        <div class="container-fluid">
            <div class="card shadow">
            <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <div class="card-header py-3">
                    <p class="text-primary m-0 fw-bold">{props.tableName}</p>
                </div>
                <div class="card-body">
                    <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                        <table class="table my-0" id="dataTable">
                            <thead>
                                <tr>
                                    <th>Nom categorie</th>
                                    <th>{props.statType}</th>
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
                    </div>
                
                </div>
            </div>
            </div>
            </div>
            </div>
    );
}
export default CategorieStat;
