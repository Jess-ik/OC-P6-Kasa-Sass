function Host({ host }) {
    return (
      <div className="host-container">
        <p className="host-name">{host.name}</p>
        <img className="host-img" src={host.picture} alt={"Profil de " + host.name}/>
      </div>
    )
  }

export default Host




