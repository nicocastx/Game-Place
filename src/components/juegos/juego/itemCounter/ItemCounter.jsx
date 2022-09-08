import React, { useState } from 'react';
import './ItemCounter.css';

function onAdd(stock, cant) {
    if (stock > 0) {
        console.log("se seleccionaron " + cant + " productos");
    }
}

export default function ItemCounter({stock}) {
    const [cant, setCant] = useState(1);

    function onSum() {
        if (cant < stock) {
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
                <p className='counter'>Cantidad: {stock === 0 ? 0 : cant}</p>
                <button type="button" className="btn btn-op btn-secondary" onClick={() => (onSub())}>-</button>
            </div>
            <button type="button" className="btn btn-success" onClick={() => (onAdd(stock, cant))}>Agregar al carrito</button>
        </div>
    )
}
