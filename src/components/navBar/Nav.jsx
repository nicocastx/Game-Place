import React from 'react';
import Form from './Form';
import './Nav.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="navBar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <Link className="nav-link" to='/'>
                    <h3>Game Place</h3>
                </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor02"
                        aria-controls="navbarColor02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/juegos">
                                    Juegos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    Nosotros
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                        <CartWidget />
                        <Form contBuscar="Busque algun juego" />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav