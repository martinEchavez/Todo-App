import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img src="https://raw.githubusercontent.com/martinEchavez/Todo-App/ed827f014e6f8ac49dcbd337101cb0c69dd34b6c/src/img/Wombat.svg" width="30" height="30" className="d-inline-block align-top" alt="Wombats" loading="lazy" />
                Wombats
            </Link>
        </nav>
    );
};

export default Navbar;