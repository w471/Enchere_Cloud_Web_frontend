
const MainAccueil = () => {
    const toClient = () =>{
        window.location.href = "/homeC" ;
    }

    const toAdmin = () => {
        window.location.href = "/pivotA" ;
    }
    return(
        <>
            <center><h1 className="title">Choose</h1></center>
            <center><button className="btn btn-primary" onClick={toClient} >Client side</button> 
             <button className="btn btn-primary" onClick={toAdmin} >Admin side</button></center>
        </>
    );
}
export default MainAccueil;