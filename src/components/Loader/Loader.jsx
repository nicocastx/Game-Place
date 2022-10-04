import React from 'react'
import './Loader.css'

//un loader para la carga del settimeout
export default function Loader() {
    return (
        <div className='loaderContainer'>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/4af94a145688797.62a27368d49c5.gif" alt="loading" />
        </div>
    )
}
