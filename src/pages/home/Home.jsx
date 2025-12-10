import React from 'react'
import Saude  from '../../assets/saude.png'
import Medico from '../../assets/medico.png'
import S from './Home.module.scss'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
    <article className={S.boxhome}>
    <div className={S.boxtexto}>
        <img src={Saude} alt="Logo do site" />
        <h1> Saúde e cuidado sem Barreiras</h1>
        <p>Um projeto dedicado a oferecer atendimento médico e odontológico gratuito
          para pessoas que mais precisam na nossa comunidade.</p>
        <div className={S.bottons}>
           <Link to="/SejaVoluntario" className={S.btn1}>Seja Voluntário</Link>
            <button className={S.btn2}>Como Ajudar</button>
        </div>
    </div>
    <div className={S.boximg} >
        <img src={Medico} alt="Imagem de médicos e dentistas voluntários" />
    </div>
</article>
 {/* SEÇÃO - NOSSA MISSÃO */}
      <section className={S.missao}>
        <h2>Nossa Missão</h2>
        <p> Transformar vidas através do acesso universal à saúde de qualidade </p>
        

        <div className={S.cards}>
          <div className={S.card}>
            <h3>Acesso Equitativo</h3>
            <p>
              Garantir que todos tenham acesso a cuidados de saúde de qualidade,
              independentemente de sua condição financeira.
            </p>
          </div>

          <div className={S.card}>
            <h3>Comunidade Forte</h3>
            <p>
              Construir uma rede de profissionais de saúde dedicados a servir
              com compaixão e excelência.
            </p>
          </div>

          <div className={S.card}>
            <h3>Bem-estar Total</h3>
            <p>
              Oferecer atendimento integral em saúde física e odontológica
              para melhorar a qualidade de vida.
            </p>
          </div>
        </div>
      </section>

       {/* SEÇÃO - NOSSO IMPACTO */}
      <section className={S.impacto}>
        <h2>Nosso Impacto</h2>
        <p className={S.subtitulo}>
          Transformando a saúde da nossa comunidade, um paciente de cada vez. 
        </p>

        <div className={S.boxImpacto}>
          <div className={S.itemImpacto}>
            <h3>2.500+</h3>
            <p>Pessoas Atendidas</p>
          </div>

          <div className={S.itemImpacto}>
            <h3>150+</h3>
            <p>Profissionais Voluntários</p>
          </div>

          <div className={S.itemImpacto}>
            <h3>98%</h3>
            <p>Satisfação dos Pacientes</p>
          </div>

          <div className={S.itemImpacto}>
            <h3>5+</h3>
            <p>Anos de Dedicação</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
