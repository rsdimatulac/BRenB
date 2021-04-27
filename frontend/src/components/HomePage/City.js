import "./City.css";

const City = ({ src, title, description }) => {
    return (
        <div className="city__card">
            <div className="city__image">
                <img src={src} alt="" />
            </div>
            <div className="city__info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default City;