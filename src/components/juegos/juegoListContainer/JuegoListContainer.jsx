import React, {useState, useEffect} from 'react'
import JuegoList from '../juegoList/juegoList'

const juegosLista = [{ nombre: "Minecraft", descripcion: "prueba1", stock: 8, url: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg" },
{ nombre: "Devil May Cry 5", descripcion: "prueba2", stock: 12, url: "https://i.blogs.es/94d4c1/devil-may-cry-5-analisis-01/1366_2000.jpg" }]

function consultarPromesa(confirmacion) {
    return new Promise((res, rej) => {
        if (confirmacion) {
            res(juegosLista)
        } else {
            rej("Acceso Denegado")
        }
    })
}

export default function JuegoListContainer() {
    const [juegos, setJuegos] = useState([]);
    useEffect(() => {
        consultarPromesa(true)
            .then(data => setJuegos(data))
            })
    return (
        <JuegoList juegos = {juegos}></JuegoList> 
    )
}
