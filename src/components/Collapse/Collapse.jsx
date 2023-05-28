import { useState } from 'react'

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false)
    //if it's open : show drop up arrow and change state to false if click on button + add description div
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
    ) : ( //it i'ts close : show drop-down and change state to true if click on button
        <div className='collapse-container'>
             <button onClick={() => setIsOpen(true)} className="collapse-header" >
                <h2>{props.title}</h2>
                <img src="/assets/drop-down.svg" alt="Ouvrir" />
            </button> 
        </div>
    )
}
export default Collapse;

