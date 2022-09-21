import React, { createContext, useContext, useState } from 'react'
import CartDetail from '../components/Cart/CartDetail';

const isInCart = (cart, obj) =>{
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === obj.id) {
            return true;
        }
    }

    return false;
}

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = (props) => {
    const [cart, setCart] = useState([{
        id: 1,
        nombre: "Minecraft",
        descripcion: "prueba1",
        precio: 14.99,
        cantCart: 4,
        url: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg",
        categoria : "accion aventura"
    }])

    const additem = (juego, cant) => {
        const auxCart = [...cart]
        if (!(isInCart(auxCart, juego))) {
            let juegoCart = { ...juego, cantCart: cant }
            delete juegoCart.stock
            auxCart.push(juegoCart)
            setCart(auxCart)
        }
        else{
            for(let i = 0; i < auxCart.length; i++){
                if(auxCart[i].id === juego.id){
                    auxCart[i].cantCart += cant
                    setCart(auxCart)
                    break
                }
            }
        }
    }

    const removeitem = (juego) => {
        const auxCart = [...cart]
        setCart(auxCart.filter(juegoCart => juegoCart.id !== juego.id))
    }

    const clear = () =>{
        setCart([])
    }

    return(
        <CartContext.Provider value={{cart, additem, removeitem, clear}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
