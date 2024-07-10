import React from 'react'
import '../styles/Footer.css'

import footerStyle from "../assets/wave.png"
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
    return (
        <div className='footer'>
            &copy; 2025 FIRH CAKE
            <div className='socialMedia'>
                <InstagramIcon />
                <TwitterIcon />
                <FacebookIcon />
                <YouTubeIcon />
            </div>
        </div>
    )
}

export default Footer