const EnchereStatus = (props) => {
    return(
        <>
             <div className="col-md-6 col-xl-3 mb-4">
                <div className="card shadow border-start-primary py-2">
                    <div className="card-body">
                        <div className="row align-items-center no-gutters">
                            <div className="col me-2">
                                <div className="text-uppercase text-primary fw-bold text-xs mb-1"><span>{props.description}</span></div>
                                <p><div className="text-dark fw-bold h5 mb-0">Date de début</div> : {props.timingStart}</p>
                                <p><div className="text-dark fw-bold h5 mb-0">Durée </div>: {props.duration}</p>
                                <p><div className="text-dark fw-bold h5 mb-0">Prix actuel </div>: {props.price}</p>
                            </div>
                            <div className="col-auto">
                            <img src={`data:assets/images/png;base64,${props.image}`} alt={"No image avalaible"} width={"25%"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default EnchereStatus;