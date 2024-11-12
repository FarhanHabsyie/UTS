import React from 'react'
import logo from '../Components/Assets/tc.png'
import './header.css'

const header = () => {
    const Logo = {
        nama: "TC parfum",
        imageURL: "",
        imageSize: 75,
    };
  return (
    <header className='header'>
        <div className='headerlogo'>
            <img
                src={Logo.imageURL || logo}
                alt={`logo of ${Logo.nama}`}
                style={{width: Logo.imageSize, height: Logo.imageSize}} 
            />
            <h1>{Logo.nama}</h1>
        </div>
        <div className='tengah'>
            <h1>TOKO CINTA PARFUM DAN KONTER</h1>
        </div>
    </header>
  )
}

export default header