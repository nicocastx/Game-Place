import React, { useEffect, useState } from 'react'
import JuegoDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import './itemDetailContainer.css'
import {getJuego} from "../../firebase/firebase"

//componente que hace consulta a la bd y luego lo pasa a un componente de renderizado de un detalle de item
export default function JuegoDetailContainer() {
    const {id} = useParams()
    const [Juego, setJuego] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        getJuego(id)
        .then(data => {
            setJuego(data)
            console.log(Juego)
            setisLoading(false)
        })

    }, [id])

    return (
        isLoading ? <Loader/> : <div className='juegoDetailContainer'><JuegoDetail juego = {Juego}/></div> 
    )
}
