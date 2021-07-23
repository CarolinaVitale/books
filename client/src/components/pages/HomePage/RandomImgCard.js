import { useRef, useState, useEffect } from "react"



const RandomImgCard = ({ alt_description, urls }) => {


    return (
        <div md={3} className="random-card-div">
            <div className="random-card">
                <img src={urls.regular} alt={alt_description} /> 
            </div>
        </div>
    )
}

export default RandomImgCard