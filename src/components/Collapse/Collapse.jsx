import { useState } from 'react'

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false)
      return isOpen ? (
        <div className='collapse-container'>
             <button onClick={() => setIsOpen(false)} className="collapse-header" >
                 <h2>{props.title}</h2>
                 <img src="/assets/drop-up.svg" alt="Fermer" />
            </button>
            <div className='collapse-description'>
                <p>{props.description}</p>
            </div> 
        </div>
    ) : (
        <div className='collapse-container'>
             <button onClick={() => setIsOpen(true)} className="collapse-header" >
                <h2>{props.title}</h2>
                <img src="/assets/drop-down.svg" alt="Ouvrir" />
            </button> 
        </div>
    )
}
export default Collapse;

