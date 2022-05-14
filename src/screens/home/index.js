import React, { Fragment } from 'react';
import PresentationImage from '../../assets/images/presentation.png';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Content from '../../components/content';

import {Column, Section, Title, Container, Hero } from 'rbx';
import '../../styles/home.scss';
import { Link } from 'react-router-dom';

const Home = () => (
    <Fragment>

        

        <section class="hero home is-fullheight">
        <Header/>
        <Content/>
        <Footer/>
        </section>  
        
        

    </Fragment>
)

export default Home;