import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img src="https://raw.githubusercontent.com/martinEchavez/Todo-App/master/src/img/Wombat.png" width="30" height="30" className="d-inline-block align-top" alt="Wombats" loading="lazy" />
                Wombats
            </Link>
        </nav>
    );
};

export default Navbar;