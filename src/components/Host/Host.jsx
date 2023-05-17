import "./Host.css";


function Host({ host }) {
    return (
      <div className="host-container">
        <p className="host-name">{host.name}</p>
        <img className="host-img" src={host.picture} alt="Profil de l'hôte"/>
      </div>
    )
  }

export default Host