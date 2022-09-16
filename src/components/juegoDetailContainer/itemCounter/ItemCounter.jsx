import React, { useState } from 'react';
import './ItemCounter.css';
import { Link } from 'react-router-dom';

function onAdd(juego, cant) {
    if (juego.stock > 0) {
        const juegoCarrito = {idCart: juego.id, cantCart: cant}
        console.log(juegoCarrito)
    }
}

export default function ItemCounter({juego}) {
    const [cant, setCant] = useState(1);

    function onSum() {
        if (cant < juego.stock) {
            setCant(cant + 1)
        }
    }

    function onSub() {
        if (cant > 1) {
            setCant(cant - 1)
        }
    }

    return (
        <div className='itemCounter'>
            <div className="counterContainer">
                <button type="button" className="btn btn-op btn-primary" onClick={() => (onSum())}>+</button>
                <p className='counter'>Cantidad: {juego.stock === 0 ? 0 : cant}</p>
                <button type="button" className="btn btn-op btn-secondary" onClick={() => (onSub())}>-</button>
            </div>
            <Link to="/cart" type="button" className="btn btn-success" onClick={() => (onAdd(juego, cant))}>Agregar al carrito</Link>
        </div>
    )
}
