import React from "react";
import S from './Footer.module.scss'
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer>
    <article className={S.boxfooter}>
        <div className={S.boxtext}>
          <img src={Logo} alt="Logo do site" />
          <Link to="/">Médicos & Dentistas</Link>
          <p> Saúde e cuidado sem barreiras para toda comunidade.</p>
        </div>

        <div className={S.boxtextcontato}>
          <h3>Contato</h3>
          <p>contato@medico-dentista.org</p>
          <p>(11) 3000-0000</p>
          <p>São Paulo, SP </p>
        </div>

        <div className={S.boxtextredes}>
            <h3>Redes Sociais</h3>
          <p>Facebook </p>
          <p>Instagram </p>
          <p>Twitter</p>
        </div>
    </article>
        <div className={S.copy}>
        <p>© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}