import React from 'react'
import '../styles/Menu.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

import { menuCakes } from '../helper/helper'

const Menu = () => {


    return (
        <div className='menu '>
            <h2>Cardapio</h2>
            <p className='menuDescription'>"Feitos com amor e açucar."</p>
            <div className='menuImgContainer'>
                {menuCakes.map((cake, index) => {
                    return (
                        <div key={index}>
                            <div className='containerImg'>
                                <div className='heartFav'>
                                    <FavoriteIcon fontSize='large'/>
                                </div>
                                <img className='cakeImg' src={cake.image} alt={cake.title} />
                                <h3>{cake.title}</h3>
                                <p>{cake.description}</p>
                                <div className='starRating'>
                                    <img src={cake.rating} alt='star icon' />
                                    <img src={cake.rating} alt='star icon'/>
                                    <img src={cake.rating} alt='star icon'/>
                                    <img src={cake.rating} alt='star icon'/>
                                    <img src={cake.rating} alt='star icon'/>
                                    {cake.likes}
                                </div>
                                <h4>R$ {cake.price}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Menu