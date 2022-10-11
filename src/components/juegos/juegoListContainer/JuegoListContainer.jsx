import React, { useState, useEffect } from 'react'
import JuegoList from '../juegoList/juegoList'
import Loader from '../../Loader/Loader'
import CategoriesListContainer from '../categoriesContainer/CategoriesListContainer';
import { useParams } from 'react-router-dom'
import {getJuegos, getJuegosCate} from '../../../firebase/firebase'

//componente de consulta para el renderizado de una lista de juegos
export default function JuegoListContainer() {
    const [Juegos, setJuegos] = useState([]);
    const {idcat} = useParams();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        //se consulta por la existencia de un idcat, y dependiendo el resultado se aplica una funcion u otra
        if(idcat){
            getJuegosCate(idcat)
            .then(data => {
                setJuegos(data)
                setIsLoading(false)
                
            })
        } else{
            getJuegos()
            .then(data => {
                setJuegos(data)
                setIsLoading(false)
                
            })
        }

    }, [idcat])

    

    return isLoading ? <Loader /> : (
        <>
            <CategoriesListContainer />
            <JuegoList juegos={Juegos} />
        </>
    )
}
