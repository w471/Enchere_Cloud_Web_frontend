
const MainAccueil = () => {
    const toClient = () =>{
        window.location.href = "/homeC" ;
    }

    const toAdmin = () => {
        window.location.href = "/pivotA" ;
    }
    return(
        <>

             <div className="container">
             <div className="row justify-content-center">
            <div className="col-md-9 col-lg-12 col-xl-10">
                
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-3" ></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h4 className="text-dark mb-4">Choisissez</h4>
                </div>
                </div>
                </div>
                </div>
                </div>


                <div className="row">
                    <div className="col">
                    
                    <div className="card shadow border-start-primary py-2">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-3" ></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h4 className="text-dark mb-4"><button className="btn btn-primary" onClick={toClient} >Client side</button></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                    <div className="card shadow border-start-primary py-2">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-3" ></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h4 className="text-dark mb-4"><button className="btn btn-primary" onClick={toAdmin} >Admin side</button></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3" ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </>
    );
}
export default MainAccueil;