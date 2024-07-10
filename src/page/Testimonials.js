import React from 'react'
import '../styles/Testimonials.css'
import baker from '../assets/baker.png'
import { testimonials } from '../helper/helper'
import FacebookIcon from '@mui/icons-material/Facebook';

const Testimonials = () => {
    return (
        <div className='testimonials' id='depoimentos'>
            <img className='bakerImg' src={baker} alt='baker' />
            <div className='testimonialsContainer'>
                <h3 className='title'>Depoimentos</h3>
                <p className='titleIntro'>Confira aqui a opnião de alguns dos nossos clientes.</p>
                <div>
                    {testimonials.map((client, index) => {
                        return (
                            <div key={index} className='testimonialsReview'>
                                <div className='clientProfile'>
                                    <img className='client' src={client.image} alt='imagem de cliente' />
                                    <h4>{client.name}
                                        <div className='starContainer'>
                                            <img className='rating' src={client.rating} alt='star rating' />
                                            <img className='rating' src={client.rating} alt='star rating' />
                                            <img className='rating' src={client.rating} alt='star rating' />
                                            <img className='rating' src={client.rating} alt='star rating' />
                                            <img className='rating' src={client.rating} alt='star rating' />
                                        </div>
                                    </h4>
                                </div>
                                <p className='clientProfileDesciption'>{client.description}</p>
                            </div>
                        )
                    })}
                </div>
            <div className='vejaMaisContainer'>
                <button className='vejaMais'> <FacebookIcon fontSize='large'/> Veja Mais reviews no Facebbok</button>          
            </div>
            </div>
        </div>
    )
}

export default Testimonials