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


import Hamburguer from '../../assets/images/hamburguer.png';
import Pizza from '../../assets/images/pizza.png';
import Carne from '../../assets/images/carne.png';
import Japones from '../../assets/images/japones.png';
import Sobremesas from '../../assets/images/sobremesas.png';
import Bebidas from '../../assets/images/bebidas.png';


function Ingredientes(){

    return(
    
        <Fragment>
        

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
        <SwiperSlide className="ingredientes-bordered"><div className="ingredientes"><img src={Hamburguer}/><span className="ingrediente-texto">Hamburguers</span></div></SwiperSlide>
        <SwiperSlide className="ingredientes-bordered"><div className="ingredientes"><img src={Pizza}/><span className="ingrediente-texto">Pizzas</span></div></SwiperSlide>
        <SwiperSlide className="ingredientes-bordered"><div className="ingredientes"><img src={Carne}/><span className="ingrediente-texto">Carnes</span></div></SwiperSlide>
        <SwiperSlide className="ingredientes-bordered"><div className="ingredientes"><img src={Japones}/><span className="ingrediente-texto">Japonês</span></div></SwiperSlide>
        <SwiperSlide className="ingredientes-bordered"><div className="ingredientes"><img src={Sobremesas}/><span className="ingrediente-texto">Sobremesas</span></div></SwiperSlide>
        <SwiperSlide className="ingredientes-bordered"><div className="ingredientes"><img src={Bebidas}/><span className="ingrediente-texto">Bebidas</span></div></SwiperSlide>
        </Swiper>

        </Fragment>
    )

}

export default Ingredientes;
