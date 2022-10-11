import React, { useState} from 'react'
import { useCartContext } from '../../context/CartContext'
import { generoOrden } from '../../firebase/firebase'
import './checkout.css'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'

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
        generoOrden(data)
            .then(id => setOrderId(id))
        clear()
    }

    const finCompraSwal = () => {
        Swal.fire('Orden Completa, Wuju!', `Su orden ya fue realizada, su orden de compra es: ${orderId}`, 'success')
    }


    return (
        <>
            {!orderId ? (
                <>
                    <div className="reqFormContainer">
                        <h3 >Complete el formulario para continuar</h3>
                    </div>
                    <form className='finFormContainer' action="">
                        <label className='labelForm' htmlFor="nombre">Ingrese su nombre aqui</label>
                        <input type="text" name="nombre" id="nombre" placeholder='Nombre' value={nombre} onChange={handleInputChange} />
                        <label className='labelForm' htmlFor="email">Ingrese su email aqui</label>
                        <input type="text" name="email" id="email" placeholder='Email' value={email} onChange={handleInputChange} />
                        <label className='labelForm' htmlFor="phone">Ingrese su numero de telefono aqui</label>
                        <input type="text" name="phone" id="email" placeholder='Numero de celular' value={phone} onChange={handleInputChange} />
                        <input type="submit" className='btn btnFin btn-success' value="Finalizar compra" onClick={handleSubmit} />
                    </form>
                </>
            ) : <>
                {finCompraSwal()}
                <div className="finContainer">
                    <h2 className='finTitleCompra'>Felicidades, su compra termino exitosamente</h2>
                    <h3>Su orden de compra es: {orderId}</h3>
                    <Link className='btnHome' to='/' element={<Home />}>
                        <button className='btn btn-success btnVolver'>Volver al Inicio</button> 
                    </Link>
                    <img className='imgFin' src="https://i.pinimg.com/originals/85/d3/5c/85d35c6c1461bc83028e9c23357cf3ac.gif" alt="hombre con instrumento" />
                </div>
            </>}
        </>
    )
}
