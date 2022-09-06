import React from 'react'
import Juego from '../juego/Juego'


export default function juegoList({juegos}) {
    
    return (
        <div className='row m-auto justify-content-around'>
            {juegos.map((juego, indice) =>
                    <Juego juego = {juego} key = {indice}/>
                    )}
        </div>
        
    )
}
