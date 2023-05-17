import "./Header.css";
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  return (
    <header>
      <Link to="/"><img src="/assets/logo-kasa-pink.svg" alt="Logo de Kasa" /></Link>
      <nav>
        <ul>
          <li><Link to='/' className={location.pathname === "/" ? "active" : ""}>Accueil</Link></li>
          <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>A Propos</Link></li>
          
            
        </ul>
      </nav>
    </header>
  );
}

export default Header;
