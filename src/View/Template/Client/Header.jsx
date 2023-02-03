import {useEffect, useState} from "react";
import {getUrl} from "../../../Data/Url";

const Header = () => {
    return(
        <header>
             <nav
                className="navbar navbar-expand-lg navbar-light bg-white sticky"
                data-offset="500">
                <div className="container">


                <button
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a href="/homeC" className="nav-link">
                            Home
                            </a>
                        </li>

                        <li className="nav-item active">
                            <a href="/sF" className="nav-link">
                                Situation financière
                            </a>
                        </li>

                        
                        <li className="nav-item">
                        <a className="nav-link" href="/roadHistorique">
                            Consultation historique enchere
                        </a>
                        </li>
                        
                    </ul>
                </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;