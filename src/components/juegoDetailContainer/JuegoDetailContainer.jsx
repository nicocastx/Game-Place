import React, { useEffect, useState } from 'react'
import JuegoDetail from './JuegoDetail'

export default function JuegoDetailContainer() {
    const [Juego, setJuego] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const getJuego = new Promise((res, rej) => {
        setTimeout(() => res(fetch('./data/juegos.json')), 2000)
    })
    useEffect(() => {
        getJuego
        .then(response => response.json())
        .then(data => {setJuego(data.find(juego => juego.id === 1))
        setisLoading(false)})
    })

    return (
        isLoading ? <h2>Cargando detalle de item</h2> : <JuegoDetail juego = {Juego}/>
    )
}
