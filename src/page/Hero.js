import React from 'react'
import '../styles/Hero.css'
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import X from '@mui/icons-material/X';
import hero01 from '../assets/hero001.png'

const Hero = () => {
    return (
        <div className='hero' id='cardapio'>
            <div className='hero-Container'>
                <h2>"A Doçura <span className='goldenWord'>Perfeita</span><br /> em cada <span className='goldenWord'>Fatia</span>."</h2>
                <p>
                    FihrCake é uma confeitaria especializada em bolos que se inciou em 1956.<br />
                    E temos o <span className='goldenWord'>objetivo</span> não apenas de oferecer uma sobremessa, mas sim uma <span className='goldenWord'>experiencia</span>
                </p>
                <div className='container-Button'>
                    <div className='btnCatalogo'>
                        <button>Ver Catalago</button>
                    </div>
                    <label className='callPhone'><div><CallIcon /></div><p>&nbsp;(21) 9xxxx-xxxx</p></label>
                </div>
                <div className='social-media'>
                    <WhatsAppIcon />
                    <FacebookIcon />
                    <InstagramIcon />
                    <X />
                </div>
            </div>
            {/* <div class="shape"></div> */}
                <img className='hero-img' src={hero01} alt='cheesecake img'/>
        </div>
    )
}

export default Hero
