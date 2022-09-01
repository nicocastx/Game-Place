import React from 'react'
import Juego from '../juego/Juego'


export default function juegoList({juegos}) {
    
    return (
        <div className='row'>
            {juegos.map((juego, indice) =>
                    <Juego juego = {juego} key = {indice}/>
                    )}
        </div>
        
    )
}
