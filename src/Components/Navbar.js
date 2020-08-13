import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img src="https://raw.githubusercontent.com/martinEchavez/Todo-App/master/src/img/logo.jpg" width="30" height="30" className="d-inline-block align-top" alt="Wombats" loading="lazy" />
                {' '}Wombats
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/todos">Tareas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/finanzas">Mis Finanzas</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;