import { useParams } from 'react-router-dom'
import HousingDatas from '../../data/logements.json'
import Collapse from "../../components/Collapse/Collapse";
import Slideshow from '../../components/Slideshow/Slideshow';
import Tags from '../../components/Tags/Tags';
import Host from '../../components/Host/Host';
import Rate from '../../components/Rate/Rate';
import Error from "../Error/Error";

function Housing() {
  //get id from URL
  const { id } = useParams()
  // use 'find' method to get datas of matching id product
  const HousingData = HousingDatas.find((product) => product.id === id)
  //if no data is found with matching URL id, then show Error page/component
  if(!HousingData){
    return <Error />;
  }
  //destruct needed datas from HousingDatas
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
        {/* Header infos */}
        <div className='housing-header'>
          <div className='header-col'>
            <h1>{title}</h1>
            <p className='housing-location'>{location}</p>
            <Tags tags={tags}/>
          </div>
          <div className='header-col col-2'>
            <Host host={host}/>
            <Rate rating={rating}/>
          </div>
        </div>
        {/* Collapses */}
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
