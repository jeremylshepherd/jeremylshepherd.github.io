const Nav = (props) => {
    return(
        <nav className="navbar navbar-default navbar-fixed-top navbar-collapse">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-col" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <h1 id="brand">Jeremy L. Shepherd</h1>
                    </div>
                    <div className="collapse navbar-collapse" id="nav-col">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
