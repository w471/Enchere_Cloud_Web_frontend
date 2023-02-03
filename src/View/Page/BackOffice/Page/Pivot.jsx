const Pivot = () => {
    
    if(localStorage.getItem("tokenAdmin")==null)
        window.location.href = "/loginAdmin" ;

    else
        window.location.href = "/accueil"
    return(
        <></>
    );
}
export default Pivot;