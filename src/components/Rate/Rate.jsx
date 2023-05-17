import "./Rate.css";




function Rate({rating}) {


    const range = [1, 2, 3, 4, 5]

    return (
        <div className="rate-container">
            { // On utilise .map sur la variable en fonction de la donnée en paramètre 
                range.map((element) =>

                    // On affiche une étoile pleine suivant la valeur en paramère
                    rating >= element ? (
                        <img
                            src="/assets/red-star.svg"
                            alt="Etoile pleine"
                            key={element.toString()}
                        />
                    ) : (
                        // Par défaut on complète par une étoile vide
                        <img
                        src="/assets/grey-star.svg"
                            alt="Etoile vide"
                            key={element.toString()}
                        />
                    )
                )}
        </div>
    )
}

export default Rate






