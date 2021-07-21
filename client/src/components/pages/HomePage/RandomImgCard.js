
const RandomImgCard = ({ alt_description, description, urls, location, likes }) => {

    return (
        <div md={3} className="random-card-div">
            <div className="random-card">
                <img src={urls.raw} alt={alt_description} />
                <p>{description}</p>
                <p>{location}</p>
                <p> 💗 {likes}</p>
            </div>
        </div>
    )
}

export default RandomImgCard