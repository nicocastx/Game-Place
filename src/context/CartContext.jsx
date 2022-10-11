import React, { createContext, useContext, useState } from 'react'

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
    const [cart, setCart] = useState([])

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
    
    const calcularTotal = () => {
        let total = 0
        total = cart.reduce((acum, juego) => acum + juego.cantCart * juego.precio, 0)
        return parseFloat(total).toFixed(2)
    }

    return( 
        <CartContext.Provider value={{cart, additem, removeitem, clear, calcularTotal}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
