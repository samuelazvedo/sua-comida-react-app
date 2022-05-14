import React from 'react';
import { Navbar, Container, Column } from 'rbx';
import LogoImage from '../../assets/images/logo.png';
import '../../styles/footer.scss'
import { Link } from 'react-router-dom';

function Footer(){
  
  return(
   
    <div class="hero-foot">
        <nav class="tabs pb-6">
          <div class="container ">
              <Column class="column is-10 py-2 px-6">
                <Link to="/login" className="button is-warning is-large is-responsive is-rounded is-fullwidth">Entrar</Link>
              </Column>
              <Column  class="column is-10 py-2 px-6">
                <Link to="/register" className="button is-ghost is-large has-text-grey-light">Cadastre-se Gratuitamente</Link>
              </Column>
          </div>
        </nav>
    </div>

  )
}

export default Footer;