import React from 'react'
import ItemCounter from '../juegos/juego/itemCounter/ItemCounter'
import './itemDetail.css'

export default function JuegoDetail({ juego }) {
    return (
        <div className="card detailContainer text-white bg-info mb-3">
            <div className="card-header detailHeader">{juego.nombre}</div>
            <div className="card-body descripContainer">
                <img src={juego.url} alt="" />
                <p className='card-text detailStock'>Stock disponible: {juego.stock}</p>
                <p className="card-text detailPrice">Precio: {juego.precio}</p>
                <p className="card-text detailDesc">{juego.descripcion}</p>
                <ItemCounter juego = {juego} />
            </div> 
        </div>
    )
}
