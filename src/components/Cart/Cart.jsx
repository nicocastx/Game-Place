import React from 'react'
import { useCartContext } from '../../context/CartContext'
import CartDetail from './CartDetail'
import { Link } from 'react-router-dom';

export default function Cart() {
    const {cart} = useCartContext();
    return (
        <div className='row m-auto'>
            {cart.length === 0 ?
            <>
            <h1>No hay elementos en el carrito</h1>
            <Link to={`/juegos`}>
                    <button type="button" className="btn btnDet btn-op btn-primary">
                        Volver a Juegos
                    </button>
            </Link>
            </>
            :cart.map((itemC, indice)=>
                <CartDetail itemC= {itemC} key={indice}/>
                )}
        </div>
    )
}
