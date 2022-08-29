import React from 'react'
import ItemCounter from './itemCounter/ItemCounter'
import './Card.css'

export default function Card({juego}) {
    function onAdd(cant){
        if (juego.stock > 0){
        console.log('se seleccionaron ' + cant + ' productos')
        }
    }
    return (
            <div className="card border-primary mb-3" style={{ maxWidth: '20rem' }}>
                <div className="card-header">{juego.nombre}</div>
                <div className="card-body">
                    <img src="" alt="imagen juego" />
                    <p className="card-text">{juego.descripcion}</p>
                    <p className="card-text">{juego.stock}</p>
                </div>
                <ItemCounter stock = {juego.stock} onAdd={onAdd}/>
            </div>
    )
}
