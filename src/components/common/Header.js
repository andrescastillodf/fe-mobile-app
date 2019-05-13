import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link  className="navbar-brand" to="/">Movil Challenge</Link >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link  className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link >
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link" to="/phones">Phones</Link >
                    </li>   
                </ul>
            </div>
        </nav>        
    );
};

export default Header;