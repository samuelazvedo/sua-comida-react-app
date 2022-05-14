import React from 'react';
import { Navbar, Container, Column } from 'rbx';
import LogoImage from '../../assets/images/logo-white-home.png';
import '../../styles/header.scss'
import { Link } from 'react-router-dom';

function Header(){
  
  return(
   
    <div class="columns is-mobile py-6">
    <div class="column is-half is-offset-one-quarter py-6"><img src={LogoImage} /></div>
    </div>


  )
}

export default Header;