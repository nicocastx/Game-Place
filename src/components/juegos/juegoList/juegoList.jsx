import React from 'react'
import Juego from '../juego/Juego'


//se aplica una funcion map a cada uno de los juegos en la lista de juegos para renderizar cada elemento de la lista
export default function juegoList({juegos}) {
    return (
        <div className='row m-auto justify-content-around'>
            {juegos.map((juego, indice) =>
                    <Juego juego = {juego} key = {indice}/>
                    )}
        </div>
        
    )
}
