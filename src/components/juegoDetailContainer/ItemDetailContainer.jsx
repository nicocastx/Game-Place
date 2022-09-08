import React, { useEffect, useState } from 'react'
import JuegoDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import './juegoDetailContainer.css'

export default function JuegoDetailContainer() {
    const {id} = useParams()
    const [Juego, setJuego] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const getJuego = new Promise((res, rej) => {
        setTimeout(() => res(fetch('../data/datajuegos.json')), 2000)
    })
    useEffect(() => {
        getJuego
        .then(response => response.json())
        .then(data => {setJuego(data.find(juego => juego.id === Number(id)))
        setisLoading(false)})
    })

    return (
        isLoading ? <Loader/> : <div className='juegoDetailContainer'><JuegoDetail juego = {Juego}/></div> 
    )
}
