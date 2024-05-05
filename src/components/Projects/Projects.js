import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './Projects.css'



const Projects = () => {
  document.title = "Projetos";
  const swiperRef = useRef(null);

  useEffect(() => {
    
    const swiper = new Swiper(swiperRef.current, {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      loop: true,
    });

  });
  return (
    <section className='projects-container'>
    <div ref={swiperRef} className="swiper mySwiper">
      <h5>Projetos</h5>
      <div className="swiper-wrapper">

        <div className="swiper-slide">
          <img src="../carrinho.png" alt="Carrinho" />
        </div>

        <div className="swiper-slide">
          <img src="../compras.png" alt="Compras" />
        </div>

        <div className="swiper-slide">
          <img src="../index.png" alt="Index" />
        </div>

        <div className="swiper-slide">
          <img src="../categorias.png" alt="Categorias" />
        </div>

      </div>
      

    </div>
    </section>
  );
};

export default Projects;
