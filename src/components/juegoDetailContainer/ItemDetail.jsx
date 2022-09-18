import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import ItemCounter from './itemCounter/ItemCounter'
import './itemDetail.css'
import {useCartContext} from '../../context/CartContext'

export default function JuegoDetail({ juego }) {
    const {cart} = useCartContext();
    const{additem} = useCartContext();
    const {removeitem} = useCartContext();
    const {clear} = useCartContext();
    const [Comprado, setComprado] = useState(false)

    function onAdd(juego, cant) {
        if (juego.stock > 0) {
            const juegoCarrito = {...juego, cantCart: cant}
            additem(juegoCarrito, cant)
            console.log(cart)
            setComprado(true)
        }
    }

    return (
        <div className="card detailContainer text-white bg-info mb-3">
            <div className="card-header detailHeader">{juego.nombre}</div>
            <div className="card-body descripContainer">
                <img src={juego.url} alt="" />
                <p className='card-text detailStock'>Stock disponible: {juego.stock}</p>
                <p className="card-text detailPrice">Precio: {juego.precio}</p>
                <p className="card-text detailDesc">{juego.descripcion}</p>
                {Comprado ? <Link className='btn btn-dark' to='/cart' element={<Cart/>}>Ir al Carrito</Link> : <ItemCounter juego = {juego} onAdd = {onAdd}/>}
            </div> 
        </div>
    )
}
