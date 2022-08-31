import { React, useEffect, useState } from 'react';
import ItemCounter from './itemCounter/ItemCounter';
import './juegoContainer.css'

const juegosLista = [{ nombre: "Minecraft", descripcion: "prueba1", stock: 8, url: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg" },
{ nombre: "Devil May Cry 5", descripcion: "prueba2", stock: 12, url: "https://i.blogs.es/94d4c1/devil-may-cry-5-analisis-01/1366_2000.jpg" }]

function consultarPromesa(confirmacion) {
    return new Promise((res, rej) => {
        if (confirmacion) {
            res(juegosLista)
        } else {
            rej("Acceso Denegado")
        }
    })
}

function onAdd(stock, cant) {
    if (stock > 0) {
        console.log('se seleccionaron ' + cant + ' productos')
    }
}

export default function JuegoContainer() {
    const [juegos, setJuegos] = useState([]);
    useEffect(() => {
        consultarPromesa(true)
            .then(data => {
                const juegosJSX = data.map((juego, indice) =>
                    <div className="card border-primary mb-3" key={indice} style={{ maxWidth: '20rem', margin: '10px' }}>
                        <div className="card-header">{juego.nombre}</div>
                        <div className="card-body">
                            <img className='card-img' src={juego.url} alt="imagen juego" />
                            <p className="card-text">{juego.descripcion}</p>
                            <p className="card-text">Stock: {juego.stock}</p>
                        </div>
                        <ItemCounter stock={juego.stock} onAdd={onAdd} />
                    </div>
                )
                setJuegos(juegosJSX)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])

    return (
        <div className='row'>
            {juegos}
        </div>
    )
}
