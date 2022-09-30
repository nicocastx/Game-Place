import React from 'react'
import { useCartContext } from '../../context/CartContext'

export default function CartDetail({ itemC }) {
    const {removeitem} = useCartContext();
    return (
        <div className="card rounded-3 mb-4">
            <div className="card-body p-4">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                        <img src={itemC.img} className="img-fluid rounded-3" alt={"imagen de " + itemC.nombre} />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{itemC.nombre}</p>
                        <p><span className="text-muted">{itemC.categoria}</span></p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <p className="lead fw-normal mb-2">{"Cantidad: " + itemC.cantCart}</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">{"$" + itemC.precio}</h5>
                    </div>
                    <div className="col-md-2 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-danger" onClick={() =>{removeitem(itemC)}}>Borrar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
