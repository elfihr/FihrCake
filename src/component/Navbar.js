import React from 'react'

import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import { navItems } from '../helper/helper';
import CakeIcon from '@mui/icons-material/Cake';



const Navbar = () => {
    return (
        <div className='navMenu'>
            {/* ====/Logo==== */}
            <div className='logoContainer'>
                <CakeIcon />
                <h3 className='logo'>FihrCake</h3>
            </div>


            {/* ====/Icons==== */}
            <input type='checkbox' id='check'></input>
            <label for='check' className='iconMenu' >
                <ReorderIcon id='menu-icon' fontSize='2rem' />
                <CloseIcon id='close-icon' fontSize='2rem' />
            </label>
            {/* ====/HiperLinks==== */}
            <div className='navBar'>
                {navItems.map((item, index) => {
                    return (
                        <a className='active' href={item.href}>{item.label}</a>
                    )
                    
                })}
            </div>

 <button className='btnPedido'>&#10084; Peça Agora</button>


        </div>
    )
}

export default Navbar