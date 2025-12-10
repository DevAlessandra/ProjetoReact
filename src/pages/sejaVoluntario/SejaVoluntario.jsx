import React from "react";
import S from "./SejaVoluntario.module.scss";



const SejaVoluntario = () => {
  return (
    <>
      <article>
        {/* SEÇÃO - Seja Voluntário */}
        <div className={S.voluntario}>
          <h2>Seja Voluntário</h2>
          <p>
            Junte-se a nós e faça a diferença na vida de pessoas que precisam
          </p>

          <div className={S.cards}>
            <div className={S.card}>
              <h3>Impacto Direto</h3>
              <p>Sua dedicação salva vidas e transforma comunidades</p>
            </div>

            <div className={S.card}>
              <h3>Crescimento Pessoal</h3>
              <p>Desenvolva habilidades e cresça profissionalmente</p>
            </div>

            <div className={S.card}>
              <h3>Comunidade</h3>
              <p>Faça parte de uma rede de profissionais comprometidos</p>
            </div>
          </div>
        </div>
      </article>
       <section className={S.container}>
      <div className={S.formBox}>
        <h2>Inscrição para Voluntários</h2>

        <form>
          <h3>Dados Pessoais</h3>

          <div> 
            <input className={S.row} type="text" placeholder="Seu Nome *" required />
            <input className={S.row}type="email" placeholder="Seu Email *" required />
          

          <input
            className={S.full}
            type="tel"
            placeholder="Seu Telefone *"
            required
          
          />
          </div>

          <h3>Mensagem Adicional</h3>

          <textarea placeholder="Conte-nos porque você quer ser voluntário..."></textarea>

          <p className={S.info}>
            Entraremos em contato para mais informações
          </p>

          <div className={S.btnBox}>
            <button type="submit">Enviar Inscrição</button>
          </div>
        </form>
      </div>
    </section>
  

    </>
  );
};

export default SejaVoluntario;
