import React from "react";
import S from "./Footer.module.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Mail, PhoneCall, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <article className={S.boxfooter}>
        <div className={S.logo1}>
       <div className={S.logo}>
               <img src={Logo} alt="Logo do site" />
               <Link to="/">Médicos & Dentistas</Link>
       </div>
        <div className={S.par}>
          <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
        </div>
         </div>

        <div className={S.boxtextcontato}>
          <h3>Contato</h3>

          <div className={S.line}>
            <Mail className={S.icon} />
            <p>contato@medico-dentista.org</p>
          </div>

          <div className={S.line}>
            <PhoneCall className={S.icon} />
            <p>(11) 3000-0000</p>
          </div>

          <div className={S.line}>
            <MapPin className={S.icon} />
            <p>São Paulo, SP</p>
          </div>
        </div>

        <div className={S.boxtextredes}>
          <h3>Redes Sociais</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </article>

      <div className={S.copy}>
        <p>© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
