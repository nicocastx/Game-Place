import React from 'react';
import './CartWidget.css';

export default function CartWidget() {
    return (
        <div className='carrito'>
            <div className="icono-carrito">
                <img src="./img/shopping-cart.png" alt="carrito" className="cart-img" />
            </div>
            <p className="contador">0</p>
        </div>
    )
}
