import React from 'react'

export default function JuegoDetail({ juego }) {
    return (
        <div className="card text-white bg-primary mb-3" style={{ maxWidth: '20rem' }}>
            <div className="card-header">{juego.nombre}</div>
            <div className="card-body">
                <img src={juego.url} alt="" />
                <p className="card-text">Precio: {juego.precio}</p>
                <p className="card-text">{juego.descripcion}</p>
            </div>
        </div>
    )
}
