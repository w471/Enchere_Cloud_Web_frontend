const HistoriqueEnchere = (props) => {
    return(
        <div className="col-md-6 col-xl-3 mb-4">
        <div className="card shadow border-start-primary py-2">
            <div className="card-body">
                <div className="row align-items-center no-gutters">
                    <div className="col me-2">
                        <div className="text-uppercase text-primary fw-bold text-xs mb-1"><span>{props.price}</span></div>
                        <p><div className="text-dark fw-bold h5 mb-0">By</div> : {props.nom},{props.prenom}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default HistoriqueEnchere;