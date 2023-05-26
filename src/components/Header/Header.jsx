import { NavLink } from 'react-router-dom'

function Header() {

  return (
    <header>
      <NavLink to="/"><img src="/assets/logo-kasa-pink.svg" alt="Logo de Kasa" /></NavLink>
      <nav>
        <ul>
          {/* add active class (underline) if navlink is active */}
          <li><NavLink to='/' className={(link) => (link.isActive ? 'active' : '')}>Accueil</NavLink></li>
          <li><NavLink to='/about' className={(link) => (link.isActive ? 'active' : '')}>A Propos</NavLink></li>  
        </ul>
      </nav>
    </header>
  );
}

export default Header;

