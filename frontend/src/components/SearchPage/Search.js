import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom"; 
import { getListings } from "../../store/listing";
import useConsumeContext from "../../context/LoginSignupModalContext";
import GoogleMaps from "./GoogleMaps";
import "./Search.css";
import SearchResult from "./SearchResult";

const Search = () => {
    const { setShowMenu } = useConsumeContext();
    const dispatch = useDispatch();
    const listings = useSelector(state => state.listing);

    useEffect(() => {
        setShowMenu(false);
        dispatch(getListings());
    }, [dispatch, setShowMenu]);

    return (
        <div className="search__container">
            <div className="search__listings-container">
                <div className="search__listings-info">
                    <p>
                        <span>{listings?.length}+ stays</span>
                        {/* <span>・MMMM dd to MMMM dd</span>
                        <span>・Num guests</span> */}
                    </p>
                    <h1>Stays nearby</h1>
                    <button><p>Cancellation flexibility</p></button>
                    <button><p>Type of place</p></button>
                    <button><p>Price</p></button>
                    <button><p>More filters</p></button>
                </div>
                {Array.from(listings)?.map(listing => (
                    <NavLink to={`/listings/${listing?.id}`} style={{ textDecoration: "none" }} key={listing?.id}>
                        <SearchResult listing={listing} />
                    </NavLink>
                ))}
            </div>
            <div className="google__maps-container">
                <GoogleMaps listings={Array.from(listings)}/>
            </div>
        </div>
    )
}

export default Search;
