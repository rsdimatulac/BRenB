// import { useSelector } from "react-redux";
import { GrFavorite as Favorite } from "react-icons/gr";
import { RiStarSFill as Star } from "react-icons/ri";
import "./SearchResult.css";

const SearchResult = ({ listing }) => {
    // const reviews = useSelector(state => state.review);
    const image = listing?.Images[0]?.url;
    const city = listing?.city;
    const type = listing?.type;
    const title = listing?.title;
    const num_guests = listing?.num_guests;
    const num_beds = listing?.num_beds;
    const num_baths = listing?.num_baths;
    const rating = listing?.rating;
    const price = listing?.price;

    return (
        <div className="search__result-container">
            <img src={image} alt=""></img>
            {/* <Favorite className="favorite__icon"/> */}
            <div className="search__result-info">
                <div className="search__result-top">
                    <p>{type} in {city}</p>
                    <h3>{title}</h3>
                    <p>_____</p>
                    <p>
                        <span>{num_guests > 1 ? `${num_guests} guests` : `${num_guests} guest`}</span>
                        <span>・</span>
                        <span>{num_beds > 1 ? `${num_beds} beds` : `${num_beds} bed`}</span>
                        <span>・</span>
                        <span>{num_baths > 1 ? `${num_baths} baths` : `${num_baths} bath`}</span>
                    </p>
                </div>
                <div className="search__result-bottom">
                    <div className="search__result-star">
                        <span><Star className="star__icon-listing" /></span>
                        <span>{rating}</span>
                        {/* <span>{reviews?.length > 1 ? `(${reviews?.length} reviews)` : `(${reviews?.length} review)`}</span> */}
                    </div>
                    <h2>${price} <span>/ night</span></h2>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;