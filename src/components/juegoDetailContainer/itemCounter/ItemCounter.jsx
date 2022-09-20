import React, { useState } from 'react';
import './ItemCounter.css';

export default function ItemCounter({juego, onAdd}) {
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
            <button className="btn btn-success" onClick={() => (onAdd(juego, cant))}>Agregar al carrito</button>
        </div>
    )
}
