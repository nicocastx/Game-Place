import React, { useState, useEffect } from 'react'
import JuegoList from '../juegoList/juegoList'
import Loader from '../../Loader/Loader'
import CategoriesListContainer from '../categoriesContainer/CategoriesListContainer';
import { useParams } from 'react-router-dom';

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
    const {idcat} = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const getJuegosData = new Promise((res, rej) => {
        setTimeout(() => {
            res(fetch("../data/datajuegos.json"))
        }, 2000);
    })
    useEffect(() => {
        getJuegosData
            .then(response => response.json())
            .then(data => {
                if(idcat){
                    setJuegos(data.filter(juego => juego.categoria.includes(idcat)))
                } else{
                    setJuegos(data)
                    setIsLoading(false)
                }
            })
            .catch(error => console.log(error))
    }
    )
    return isLoading ? <Loader /> : (
        <>
            <CategoriesListContainer />
            <JuegoList juegos={Juegos} />
        </>
    )
}
