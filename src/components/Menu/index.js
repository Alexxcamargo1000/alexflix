import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assets/Logo.png'
// import { Container } from './styles';
import './Menu.css'
import Button from '../Button';
//import ButtonLink from './components/ButtonLink'
function Menu() {
  return(

       <nav className="Menu">
           <Link to="/">
                <img className="Logo" src={Logo} alt=""/>
           </Link>

           <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo Video
           </Button>
       </nav>

       );
}

export default Menu;