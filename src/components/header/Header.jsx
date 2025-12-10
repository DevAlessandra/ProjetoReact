import { Link } from "react-router-dom"
import Logo from '../../assets/logo.png'
import S from './Header.module.scss'

const Header = () => {
  return (
    <header>

      <div className={S.logo}>
        <img src={Logo} alt="Logo do site" />
        <Link to="/">Médicos & Dentistas</Link>
      </div>

      {/* Checkbox */}
      <input type="checkbox" id="menu-toggle" />

      {/* Ícone Hamburguer */}
      <label htmlFor="menu-toggle" className={S.hamburguer}>
        <span></span>
      </label>

      {/* ✅ Menu mobile com classe correta */}
      <nav className={S.menu}>
        <Link to="/">Home</Link>
        <Link to="/SejaVoluntario">Seja um Voluntário</Link>
      </nav>

    </header>
  )
}

export default Header

  
  
  
  /*<header>
        <BrowserRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/"> Início</Link>
                </li>
                <li>
                    <Link to="/Sobre"> Sobre</Link>
                </li>
                <li>
                    <Link to="/Contato"> Contato</Link>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="/Sobre" element={<Sobre />}/>
             <Route path="/Contato" element={<Contato />}/>
          
        </Routes>
        </BrowserRouter>
      
    </header>
  )
  }*/


