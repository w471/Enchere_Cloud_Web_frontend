const MainAccueil = () => {
    const toClient = () =>{
        window.location.href = "/homeC" ;
    }

    const toAdmin = () => {
        window.location.href = "/pivotA" ;
    }

    return(
        <>
            <h1>Choose</h1>
            <h2><button onClick={toClient} >Client side</button></h2>
            <h2><button onClick={toAdmin} >Admin side</button></h2>
        </>
    );
}
export default MainAccueil;