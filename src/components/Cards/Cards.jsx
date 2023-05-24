import CardDatas from '../../data/logements.json'
// To create new link in our app
import { NavLink } from 'react-router-dom'

function Cards() {
  return (
    <div className="card-container">
      {/* map datas to extract the 'id', 'cover' and 'title' attributes */}
      {CardDatas.map(({ id, cover, title,}) => (
        // for each element, create a new link using 'id' as param (see routes in App.jsx) and containing cover + title
				<NavLink className="card" to={`housing/${id}`} key={id} >
          <img className="card-img" src={cover} alt="Aperçu du logement"/>
          <div className="card-title"><h2>{title}</h2></div> 
        </NavLink>
				))}
    </div>
  );
}

export default Cards;


