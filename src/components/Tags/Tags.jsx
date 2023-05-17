function Tags({ tags }) {

    return (
        <div className="tags-container">
            {
                tags.map((tag, index) => {
                    return (
                        <div className="tag-item" key={index}>
                            {tag}
                        </div>
                    )
                })}
        </div>
    )


}

export default Tags