import React from 'react';
import './ItemListContainer.css';

export default function ItemListContainer({mensaje}) {
    return (
        <div className = "ItemListContainer">
            <h1>{mensaje}</h1>
        </div>
    )
}
