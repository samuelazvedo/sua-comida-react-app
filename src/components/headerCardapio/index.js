import React, { useRef, useState, Fragment } from 'react';
import Banner from '../../assets/images/banner.png';
import Ingredient1 from '../../assets/images/ingr.png';
import Avatar from '../../assets/images/avatar.png';
import '../../styles/home.scss';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPizzaSlice, faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons'



import Populares from '../populares';
import Ingredientes from '../ingredientes';


function headerCardapio(){
  
  return(
  <Fragment>
  
  <div class="is-white is-fullheight">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">

        <img className="avatar" src={Avatar} alt="Logo"/>

        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Examples
            </a>
            <a class="navbar-item">
              Documentation
            </a>

          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-body pt-0">
    <div class="container has-text-left is-success ">

      <section className="banner">
        <img className="burger" src={Banner} />
      </section>

      <section class="container mb-5">
        <input class="input is-medium" type="text" placeholder="o que você deseja ?" />
      </section>
      


      <Ingredientes />

      <Populares />


    </div>
  </div>

  <div class="hero-foot">
      <div class="container_footer">
        

        <div className="footer">
          
          <a className="link"><FontAwesomeIcon className="icon is-normal" icon={faHome} /></a>
          <a className="link"><FontAwesomeIcon className="icon is-normal " icon={faPizzaSlice} /></a>
          <a className="link"><FontAwesomeIcon className="icon is-normal " icon={faBagShopping} /></a>
          <a className="link"><FontAwesomeIcon className="icon is-normal " icon={faUser} /></a>
        </div>


      </div>
  </div>
</div>

  </Fragment>
  )
}

export default headerCardapio;



