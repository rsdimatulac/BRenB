import "./Tile.css";

const Tile = ({ src, title, description, price }) => {
    return (
        <div className="tile__card">
            <img src={src} alt="" />
            <div className="tile__info">
                <h2>{title}</h2>
                <h4>{description ? description : ''}</h4>
                <h3>{price ? price : ''}</h3>
            </div>
        </div>
    )
}

export default Tile;
