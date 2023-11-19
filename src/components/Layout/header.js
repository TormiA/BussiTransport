import React from 'react';

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">Bussi Transport</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/busdetails">Bussid</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;