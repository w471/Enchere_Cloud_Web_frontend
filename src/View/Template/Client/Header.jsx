import {useEffect, useState} from "react";
import {getUrl} from "../../../Data/Url";

const Header = () => {
    return(    
        <>
            <nav className="navbar navbar-light navbar-expand-md navigation-clean-search" >
        <div className="container"><a className="navbar-brand" href="/homeC">Home</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="/sF">Situation financière</a></li>
                    <li className="nav-item"><a className="nav-link" href="/roadHistorique">Consultation historique enchere</a></li>
                    <li className="nav-item"><a className="nav-link" href="/commentaire">Vos feedbacks</a></li>
                </ul>
            </div>
        </div>
        </nav>
        <hr  />
        
        </>

    );
}

export default Header;

