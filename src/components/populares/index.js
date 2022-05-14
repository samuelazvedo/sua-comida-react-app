import React, { useRef, useState, Fragment, Title } from 'react';
import Banner from '../../assets/images/banner.png';
import Food1 from '../../assets/images/food1.png';


// comidas
import hamburguer from '../../assets/images/hamburguer.png';
import hamburguer2 from '../../assets/images/hamburguer2.png';
import hamburguer3 from '../../assets/images/hamburguer3.png';
import hamburguer4 from '../../assets/images/hamburguer4.png';


import Ingredient1 from '../../assets/images/ingr.png';
import Avatar from '../../assets/images/avatar.png';
import Menu from '../../menu.js';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../styles.css";

// import required modules
import { Pagination } from "swiper";
import { Section } from 'rbx';



function Populares(){

    return(
    
        <Fragment>
        
        <h1 className="h1_normal pt-3">Mais <span className="h1_bold">Populares</span></h1>

        <Swiper
            slidesPerView={2}
            spaceBetween={35}
            observer={true}  
            observeParents={true}  
            grabCursor={true}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Pagination]}
        >
        
        <SwiperSlide>
            <div class="columns">
                <div class="column">
                    <p class="bd-notification is-info"><img width={50} src={hamburguer3} /></p>
                    <p class="bd-notification is-info bd-notification-title">Beef Burger Simples</p>
                    <div class="columns is-mobile is-centered">
                        <div class="column is-narrow">
                            <p class="bd-notification is-info bd-notification-details">4,8</p>
                        </div>
                        <div class="column is-narrow">
                            <p class="bd-notification is-info bd-notification-details">5,3 km</p>
                        </div>
                    </div>
                    <p class="bd-notification is-info bd-notification-price"><span className="price-real">R$</span> 9,90</p>

                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div class="columns">
                <div class="column">
                    <p class="bd-notification is-info"><img width={50} src={hamburguer} /></p>
                    <p class="bd-notification is-info bd-notification-title">Duplo Beef Burger</p>
                    <div class="columns is-mobile is-centered">
                        <div class="column is-narrow">
                            <p class="bd-notification is-info bd-notification-details">4,8</p>
                        </div>
                        <div class="column is-narrow">
                            <p class="bd-notification is-info bd-notification-details">5,3 km</p>
                        </div>
                    </div>
                    <p class="bd-notification is-info bd-notification-price"><span className="price-real">R$</span> 14,90</p>

                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div class="columns">
                <div class="column">
                    <p class="bd-notification is-info"><img width={50} src={hamburguer4} /></p>
                    <p class="bd-notification is-info bd-notification-title">Triplo Beef Burger</p>
                    <div class="columns is-mobile is-centered">
                        <div class="column is-narrow">
                            <p class="bd-notification is-info bd-notification-details">4,8</p>
                        </div>
                        <div class="column is-narrow">
                            <p class="bd-notification is-info bd-notification-details">5,3 km</p>
                        </div>
                    </div>
                    <p class="bd-notification is-info bd-notification-price"><span className="price-real">R$</span> 22,90</p>

                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div class="columns">
                <div class="column">
                    <p class="bd-notification is-info"><img width={50} src={hamburguer2} /></p>
                    <p class="bd-notification is-info bd-notification-title">Extra Beef Burger</p>
                    <div class="columns is-mobile is-centered">
                        <div class="column is-narrow">
                            <p class="bd-notification is-info bd-notification-details">4,8</p>
                        </div>
                        <div class="column is-narrow">
                            <p class="bd-notification is-info bd-notification-details">5,3 km</p>
                        </div>
                    </div>
                    <p class="bd-notification is-info bd-notification-price"><span className="price-real">R$</span> 26,90</p>

                </div>
            </div>
        </SwiperSlide>

        </Swiper>

        </Fragment>
    )

}

export default Populares;