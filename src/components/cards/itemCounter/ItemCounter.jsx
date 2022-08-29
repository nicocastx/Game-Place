import React, { useState } from 'react';
import './ItemCounter.css';



export default function ItemCounter({stock, onAdd}) {
    const [cant, setCant] = useState(0);

    function onSum(){
        if (cant < stock){
            setCant(cant + 1)
        }
    }

    function onSub(){
        if (cant > 0){
            setCant(cant - 1)
        }
        
    }

    return (
        <div className='itemCounter'>
            <button type="button" className="btn btn-primary" onClick = {() => (onSum())}>+</button>
            <p className='counter'>Cantidad: {cant}</p>
            <button type="button" className="btn btn-secondary" onClick = {() => (onSub())}>-</button>
            <button type="button" className="btn btn-success" onClick = {() => (onAdd(cant))}>Confirmar</button>
        </div>
    )
}
