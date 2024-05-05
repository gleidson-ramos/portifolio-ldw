import React from 'react'
import './About.css'

const About = () => {
  document.title = "Sobre Nós";
  return (
    <section className='about-container'>
      <div className='about-content'>
        <h2>Nome da Empresa </h2>
        <p>
        Uma equipe apaixonada pelo desenvolvimento web e dedicada a criar experiências digitais excepcionais.
        Desde o nosso início, buscamos redefinir os padrões de excelência no mundo online, combinando criatividade,
        habilidade técnica e inovação para oferecer soluções web de ponta, onde transformamos ideias em experiências
        digitais excepcionais. Combinando criatividade e habilidades técnicas, criamos websites responsivos e
        otimizados para impulsionar o sucesso online dos nossos clientes garantindo uma experiência de
        desenvolvimento web suave e sem estresse.

        Aqui não apenas construímos websites, construímos parcerias duradouras. Junte-se a nós enquanto
        continuamos a moldar o futuro da web!
        </p>
      </div>

      <div>
        <div className='tech-icon'>
          <img src='../html.png' alt=''/>
        </div>

        <div className='tech-icon'>
          <img src='../css.png' alt=''/>
        </div>

        <div className='tech-icon'>
          <img src='../js.png' alt=''/>
        </div>
      </div>

    </section>
  )
}

export default About