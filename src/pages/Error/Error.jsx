import { Link } from 'react-router-dom'

function About() {
  return (
    <main>   
      <h1 className="error-title">404</h1>
      <p className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <div className="error-link">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </main>
  );
  
}

export default About;