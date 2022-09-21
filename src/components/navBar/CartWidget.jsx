import React from 'react';
import './CartWidget.css';
import { useCartContext } from '../../context/CartContext';

export default function CartWidget() {
    const {cart} = useCartContext();
    let cartL = cart.length;
    return (
        <div className={cartL === 0 ? "chau" : "carrito"}>
            <div className="icono-carrito">
                <img src="./img/shopping-cart.png" alt="carrito" className="cart-img" />
            </div>
            <p className="contador">{cart.reduce((acum, b)=>acum + b.cantCart, 0)}</p>
        </div>
    )
}
