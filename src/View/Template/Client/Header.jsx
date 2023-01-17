const Header = () => {
    return(
        <header>
             <nav
                className="navbar navbar-expand-lg navbar-light bg-white sticky"
                data-offset="500">
                <div className="container">
                <span className="text-primary">Client</span>

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
                            <a href="/aClient" className="nav-link">
                            Home
                            </a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link" href="/hEnchere">
                            Mon historique
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