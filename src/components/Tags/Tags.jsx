function Tags({ tags }) {

    return (
        <div className="tags-container">
            {
                // map the property "tags" in HousingData and save a new list with each tag + its index
                tags.map((tag, index) => {
                    return (
                        // for each tag, render a div with a key attribute and the tag name as text
                        <div className="tag-item" key={index}>
                            {tag}
                        </div>
                    )
                })}
        </div>
    )


}

export default Tags