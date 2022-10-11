import React from 'react'
import { Link } from 'react-router-dom'
import './categoriesListContainer.css'
import JuegoListContainer from '../juegoListContainer/JuegoListContainer'

//componente de categorias
export default function CategoriesListContainer() {
    return (
        <ul className="nav nav-pills">
            <li className="nav-pill">
                <Link className="nav-link" to='/juegos/accion' element={
                    <JuegoListContainer/>
                }>Accion</Link>
            </li>
            <li className="nav-pill">
                <Link className="nav-link" to='/juegos/estrategia' element={
                    <JuegoListContainer/>
                }>Estrategia</Link>
            </li>
            <li className="nav-pill">
                <Link className="nav-link" to='/juegos/aventura' element={
                    <JuegoListContainer/>
                }>Aventura</Link>
            </li>
        </ul>
    )
}
