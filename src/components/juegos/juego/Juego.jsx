import React from "react";
import ItemCounter from "./itemCounter/ItemCounter";
import "./juego.css";

function onAdd(stock, cant) {
    if (stock > 0) {
        console.log("se seleccionaron " + cant + " productos");
    }
}

export default function Juego({ juego }) {
    return (
        <div
            className="card border-primary mb-3"
            style={{ maxWidth: "20rem", margin: "10px" }}
        >
            <div className="card-header">{juego.nombre}</div>
            <div className="card-body">
                <img className="card-img" src={juego.url} alt="imagen juego" />
                <button type="button" className="btn btnDet btn-op btn-primary">
                    Mostrar mas detalles
                </button>
                <p className="card-text">Stock: {juego.stock}</p>
            </div>
            <ItemCounter stock={juego.stock} onAdd={onAdd} />
        </div>
    );
}
