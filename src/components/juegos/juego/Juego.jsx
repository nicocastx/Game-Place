import React from "react";
import "./Juego.css";
import { Link } from "react-router-dom";

export default function Juego({ juego }) {
    return (
        <div
            className="card border-primary mb-3"
            style={{ maxWidth: "20rem", margin: "10px" }}
        >
            <div className="card-header">{juego.nombre}</div>
            <div className="card-body">
                <div className="imgContainer">
                    <img className="card-img" src={juego.url} alt="imagen juego" />
                </div>
                <Link to={`/item/${juego.id}`} className={juego.stock === 0 ? 'inactive' : 'active'}>
                    <button type="button" className="btn btnDet btn-op btn-primary" disabled = {juego.stock === 0}>
                        Mostrar mas detalles
                    </button>
                </Link>
                <p className="card-text">Stock: {juego.stock}</p>
            </div>
        </div>
    );
}
