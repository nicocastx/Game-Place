import React, { useState, useEffect } from 'react'
import { useCartContext } from '../../context/CartContext'
import { generoOrden } from '../../firebase/firebase'
import './checkout.css'

//componente para finalizar la compra
export default function Checkout() {
    const { cart, calcularTotal, clear } = useCartContext()
    const [orderId, setOrderId] = useState()
    const [buyer, setBuyer] = useState({
        nombre: "",
        email: "",
        phone: ""
    })

    const { nombre, email, phone } = buyer

    const handleInputChange = (e) => {

        //en los input, name, value y los atributos del objeto deben ser iguales
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    //funcion asincronica para manejar el evento de finalizar compra y generar orden
    const handleSubmit = (e) => {
        e.preventDefault()
        const items = cart.map(e => { return { id: e.id, title: e.nombre, price: e.precio, amount: e.cantCart } })
        const dia = new Date()
        const total = calcularTotal()
        const data = { buyer, items, dia, total }
        console.log("data", data)
        generoOrden(data)
            .then(id => setOrderId(id))
        clear()
    }
    return (
        <>

            <h2 className='finTitle'>Necesitamos unos datos...</h2>
            <hr />
            {!orderId ? (
                <>
                    <div className="reqFormContainer">
                        <h3 >Complete el formulario para continuar</h3>
                    </div>

                    <form className='finFormContainer' action="">
                        <label  className='labelForm' htmlFor="nombre">Ingrese su nombre aqui</label>
                        <input type="text" name="nombre" id="nombre" placeholder='Nombre' value={nombre} onChange={handleInputChange} />
                        <label className='labelForm' htmlFor="email">Ingrese su email aqui</label>
                        <input type="text" name="email" id="email" placeholder='Email' value={email} onChange={handleInputChange} />
                        <label className='labelForm' htmlFor="phone">Ingrese su numero de telefono aqui</label>
                        <input type="text" name="phone" id="email" placeholder='Numero de celular' value={phone} onChange={handleInputChange} />
                        <input type="submit" className='btn btnFin btn-success' value="Finalizar compra" onClick={handleSubmit} />
                    </form>
                </>
            ) : <h2>Su orden ya fue realizada, su orden de compra es: {orderId}</h2>}
        </>
    )
}
