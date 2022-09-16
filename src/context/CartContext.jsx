import React, { createContext, useState } from 'react'

const cartContext = createContext()

const CartContextProvider = (props) => {
    const [carrito, setCarrito] = useState([])

    const additem = (juego, cant) => {
        if (!(carrito.includes(juego))) {
            carrito.push({ juego, cantCart: cant })
        }
        else{
            for(let i = 0; i < carrito.length; i++){
                if(carrito[i].id === juego.id){
                    carrito[i].cantCart += cant
                    break
                }
            }
        }
    }

}
