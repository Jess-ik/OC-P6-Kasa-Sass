import { useState } from 'react'


function Slideshow({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const length = pictures.length
    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
    }

    const goToNext = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
    }

    return (
        <div className='slider-container'>
            <div className={pictures.length === 1 ? 'hide' : 'slider-arrows'}>
                <img className='left-arrow' src='/assets/prev.svg' alt='previous' onClick={goToPrevious} />
                <img className='right-arrow' src='/assets/next.svg' alt='next' onClick={goToNext} />
            </div>


            {
                pictures.map((picture, index) => {
                    return (
                        <div className={index === currentIndex ? 'slider-img' : 'hide'} key={index}>
                            <img key={index} src={picture} alt={`Aperçu nº${currentIndex + 1}`} />
                            
                            <div className={pictures.length === 1 ? 'hide' : 'slider-count'}>
                                {currentIndex + 1}/{pictures.length}
                            </div>
                        </div>
                    )
                })}

        </div>
    )
}
export default Slideshow

