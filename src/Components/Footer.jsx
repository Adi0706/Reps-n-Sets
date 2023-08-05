import React from 'react'
import Logo from '../Images/repsnsets.png';
import {Link} from 'react-router-dom'
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className='FooterSec'>
      <Link to='/'> <img src={Logo} alt='logo'/></Link> 
      <ul className='icon-tray'>
          <li className='icon'><a href="https://www.instagram.com/adityaxbhattacharjee/"><FaInstagram /></a></li>
          <li className='icon'><a href="https://www.linkedin.com/in/aditya-bhattacharjee-288462215/"><FaLinkedinIn /></a></li>
          <li className='icon'><a href='https://github.com/Adi0706'><FaGithub /></a></li>
        </ul>
      
     

    </div>
  )
}

export default Footer ;