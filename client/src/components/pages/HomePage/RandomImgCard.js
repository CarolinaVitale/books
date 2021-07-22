import { useRef, useState, useEffect } from "react"



const RandomImgCard = ({ alt_description, urls }) => {
    const [loading, setLoading] = useState(true)
    const imgElm = useRef(null)
    useEffect(() => {
        if (imgElm.completed && loading) {
            setLoading(false)
        }
    }, [imgElm])

    return (
        <div md={3} className="random-card-div">
            <div className="random-card">
                { !imgElm.complete ? <img ref={imgElm} src={urls.raw} alt={alt_description}/> : "loading..."}
            </div>
        </div>
    )
}

export default RandomImgCard