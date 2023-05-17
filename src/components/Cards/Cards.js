
import CardDatas from '../../data/logements.json'
import { NavLink } from 'react-router-dom'

function Cards() {
  return (
    <div className="card-container">
      {CardDatas.map(({ id, cover, title,}) => (
				<NavLink className="card" to={`housing/${id}`} key={id} >
          <img className="card-img" src={cover} alt="Aperçu du logement"/>
          <div className="card-title"><h2>{title}</h2></div> 
        </NavLink>
				))}
    </div>
  );
}

export default Cards;


