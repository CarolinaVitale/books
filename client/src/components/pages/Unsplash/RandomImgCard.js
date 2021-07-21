import { Col } from "react-bootstrap"

const RandomImgCard = ({ id , alt_description, urls  }) => {

    return (
        <Col md={3}>
            <div className="random-card">
                <img src={urls.raw} alt={alt_description} />
            </div>
        </Col>
    )
}

export default RandomImgCard