import { useState } from 'react'

function Slideshow({ pictures }) {
    // Set defaut Index to 0 (1st picture from the array)
    const [currentIndex, setCurrentIndex] = useState(0)
    // Get the number of pictures available
    const length = pictures.length
    // On click to left arrow, change index to get the previous one
    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
    }
    // On click to right arrow, change index to get the next one
    const goToNext = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
    }

    return (
        <div className='slider-container'>
            {/* Arrows nav -- hidden if only 1 img -- call goToPrevious / goToNext functions on click*/}
            <div className={pictures.length <= 1 ? 'hide' : 'slider-arrows'}>
                <img className='left-arrow' src='/assets/prev.svg' alt='previous' onClick={goToPrevious} />
                <img className='right-arrow' src='/assets/next.svg' alt='next' onClick={goToNext} />
            </div>
            {/* Show counter if more than 1 picture */}
            <div className={pictures.length <= 1 ? 'hide' : 'slider-count'}>
                {currentIndex + 1}/{pictures.length}
            </div>

            {
                // map through pictures to get each url and add an index
                pictures.map((picture, index) => {
                    return (
                        // for each picture, show it if match current index + show matching img
                        <div className={index === currentIndex ? 'slider-img' : 'hide'} key={index}>
                            <img key={index} src={picture} alt={`Aperçu nº${currentIndex + 1}`} />
                        </div>
                    )
                })}
        </div>
    )
}
export default Slideshow

