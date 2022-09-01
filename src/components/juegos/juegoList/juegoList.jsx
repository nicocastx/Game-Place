import React from 'react'
import Juego from '../juego/Juego'


export default function juegoList(juegos) {
    juegos.map((juego, indice) =>
                    <Juego juego = {juego} indice = {indice}/>
                    )
    return (
        <div></div>
    )
}
