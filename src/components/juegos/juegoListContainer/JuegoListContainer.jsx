import React, { useState, useEffect } from 'react'
import JuegoList from '../juegoList/juegoList'
import Loader from '../../Loader/Loader'
import CategoriesListContainer from '../categoriesContainer/CategoriesListContainer';
import { useParams } from 'react-router-dom'
import {getJuegos, getJuegosCate} from '../../../firebase/firebase'



export default function JuegoListContainer() {
    const [Juegos, setJuegos] = useState([]);
    const {idcat} = useParams();
    const [isLoading, setIsLoading] = useState(true)

    /*const getJuegosData = new Promise((res, rej) => {
        setTimeout(() => {
            res(fetch("../data/datajuegos.json"))
        }, 2000);
    })*/
    /*async function consultarJuegosCate() {
        const juegos = await getJuegos()
        const items = juegos.docs.map(juego => juego.data())
        return items
    }*/
    useEffect(() => {
        if(idcat){
            getJuegosCate(idcat)
            .then(data => {
                setJuegos(data)
                console.log(Juegos)
                setIsLoading(false)
                
            })
        } else{
            getJuegos()
            .then(data => {
                setJuegos(data)
                console.log(Juegos)

                setIsLoading(false)
                
            })
        }

        /*getJuegosData
            .then(response => response.json())
            .then(data => {
                if(idcat){
                    setJuegos(data.filter(juego => juego.categoria.includes(idcat)))
                } else{
                    setJuegos(data)
                    setIsLoading(false)
                }
            })
            .catch(error => console.log(error))*/
    }, [idcat])

    

    return isLoading ? <Loader /> : (
        <>
            <CategoriesListContainer />
            <JuegoList juegos={Juegos} />
        </>
    )
}
