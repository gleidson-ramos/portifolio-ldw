import React from 'react'
import './Home.css'

const Home = () => {
  document.title = "Página Inicial";
  return (
    <section className='home-container'>
      <div className='home-content'>
        <h2>Nome da Empresa </h2>
        <p>
          Combinando criatividade, expertise técnica e um compromisso inabalável com a qualidade,
          estamos aqui para impulsionar o seu sucesso online.
          Estamos prontos para criar soluções digitais personalizadas que elevam sua marca e
          envolvem seu público.
          Podemos transformar sua visão em uma experiência digital excepcional.
        </p>
        
      </div>

      <div className='home-img'>
        <div>
          <img src='../teste.png' alt=''/>
        </div>

      <div>
      
      </div>
      </div>

    </section>
  )
}

export default Home