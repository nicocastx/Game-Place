import React from 'react'
import { Link } from 'react-router-dom'
import './categoriesListContainer.css'
import CategoriesContainer from './CategoriesContainer'

export default function CategoriesListContainer() {
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link className="nav-link" to='accion' element={
                    <CategoriesContainer/>
                }>Accion</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='estrategia' element={
                    <CategoriesContainer/>
                }>Estrategia</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='aventura' element={
                    <CategoriesContainer/>
                }>Aventura</Link>
            </li>
        </ul>
    )
}
