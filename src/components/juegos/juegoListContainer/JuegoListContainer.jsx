import React, { useState, useEffect } from 'react'
import JuegoList from '../juegoList/juegoList'
import Loader from '../../Loader/Loader'

/*function consultarPromesa(confirmacion) {
    return new Promise((res, rej) => {
        if (confirmacion) {
            res()
        } else {
            rej("Acceso Denegado")
        }
    })
}*/

export default function JuegoListContainer() {
    const [Juegos, setJuegos] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
            getJuegosData
            .then(response => response.json())
            .then(data => {setJuegos(data)
            setIsLoading(false)})
            .catch(error => console.log(error))
    }
    )
    const getJuegosData = new Promise((res, rej) => {
        setTimeout(() => {
            res(fetch("./data/juegos.json"))
        }, 2000);
    })

    return isLoading ? <Loader/> : <JuegoList juegos={Juegos}></JuegoList>
}