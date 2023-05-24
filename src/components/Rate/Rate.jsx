function Rate({rating}) {

    // Create a range of 5 stars rating 
    const range = [1, 2, 3, 4, 5]

    return (
        <div className="rate-container">
            { // .map the range of possible stars 
                range.map((stars) =>

                    // for each stars from range, if rating from HousingData is >= we create a red star
                    rating >= stars ? (
                        <img
                            src="/assets/red-star.svg"
                            alt="Etoile rouge"
                            key={stars.toString()}
                        />
                    ) : (
                        // for each stars from range, if rating from HousingData is NOT >= we create a grey star
                        <img
                        src="/assets/grey-star.svg"
                            alt="Etoile grise"
                            key={stars.toString()}
                        />
                    )
                )}
        </div>
    )
}

export default Rate






