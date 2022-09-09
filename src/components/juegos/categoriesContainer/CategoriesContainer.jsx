import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import JuegoList from '../juegoList/juegoList'

export default function CategoriesContainer() {
    const {idcat} = useParams()
    const [catList, setcatList] = useState([])
    useEffect(() => {
        fetch('../data/datajuegos.json')
        .then(response => response.json())
        .then(data => {
            setcatList(data.filter(juego => juego.categoria.includes(idcat)))
        })
    }, [])
    return (
        <JuegoList juegos={catList}/>
    )
}
