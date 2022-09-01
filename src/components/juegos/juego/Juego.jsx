import React from 'react'
import ItemCounter from './itemCounter/ItemCounter'

function onAdd(stock, cant) {
    if (stock > 0) {
        console.log('se seleccionaron ' + cant + ' productos')
    }
}

export default function Juego({juego}) {
    return (
        <div className="card border-primary mb-3" style={{ maxWidth: '20rem', margin: '10px' }}>
                        <div className="card-header">{juego.nombre}</div>
                        <div className="card-body">
                            <img className='card-img' src={juego.url} alt="imagen juego" />
                            <p className="card-text">{juego.descripcion}</p>
                            <p className="card-text">Stock: {juego.stock}</p>
                        </div>
                        <ItemCounter stock={juego.stock} onAdd={onAdd} />
                    </div>
    )
}
