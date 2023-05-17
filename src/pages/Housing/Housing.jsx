
import { useParams } from 'react-router-dom'
import "./Housing.css";
import HousingDatas from '../../data/logements.json'
import Collapse from "../../components/Collapse/Collapse";
import Slideshow from '../../components/Slideshow/Slideshow';
import Tags from '../../components/Tags/Tags';
import Host from '../../components/Host/Host';
import Rate from '../../components/Rate/Rate';
import Error from "../Error/Error";

function Housing() {
  const { id } = useParams()
  const HousingData = HousingDatas.find((product) => product.id === id)
  if(!HousingData){
    return <Error />;
  }
  const {
    pictures,
    title,
    location,
    tags,
    rating,
    host,
    description,
    equipments,
  } = HousingData
  return (
    <main>
      <Slideshow pictures={pictures} />
      <div className='housing-container'>
        <div className='housing-header'>
          <div className='header-col'>
            <h1>{title}</h1>
            <h2>{location}</h2>
            <Tags tags={tags}/>
          </div>
          <div className='header-col col-2'>
            <Host host={host}/>
            <Rate rating={rating}/>
          </div>
        </div>
        <div className='housing-collapse'>
          <Collapse title="Description" description={description} />
          <Collapse title="Equipements" description={equipments.map((equipement, index) => {
            return (
              <ul key={equipement + index}>
                <li>{equipement}</li>
              </ul>
            )
          })
          } />
        </div>
      </div>
    </main>
  )
}

export default Housing;
