const HistoriqueEnchere = (props) => {
    return(
        <>
            <h2>Mise : {props.price}</h2>
            <p>By {props.nom},{props.prenom}</p>
        </>
    );
}
export default HistoriqueEnchere;