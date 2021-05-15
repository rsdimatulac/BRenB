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
    let listings = useSelector(state => state.listing);

    // How to show listing by category
    if (window.location.pathname.includes("mercer_island") || window.location.pathname.includes("bellevue")) {
        console.log("mercer_island or bellevue");
        listings = [];
    } else if (window.location.pathname.includes("north_seattle")) {
        console.log("north_seattle")
    } else if (window.location.pathname.includes("downtown")) {
        console.log("downtown")
    } else if (window.location.pathname.includes("uptown")) {
        console.log("uptown")
    } else if (window.location.pathname.includes("greenlake")) {
        console.log("greenlake")
    } else if (window.location.pathname.includes("slu")) {
        console.log("slu")
    } else if (window.location.pathname.includes("belltown")) {
        console.log("belltown")
    } else if (window.location.pathname.includes("unique_stays")) {
        console.log("unique_stays")
    } else if (window.location.pathname.includes("outdoor_getaways")) {
        console.log("outdoors")
    }
    else {
        console.log("show all search")
    }

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
                {listings?.length !== 0 ? Array.from(listings)?.map(listing => (
                    <NavLink to={`/listings/${listing?.id}`} style={{ textDecoration: "none" }} key={listing?.id}>
                        <SearchResult listing={listing} />
                    </NavLink>
                )) : <div className="no__stays">
                        <h4>No results</h4>
                        <p>To get more results, try adjusting your search by area.</p>
                    </div>
                }
            </div>
            <div className="google__maps-container">
                <GoogleMaps listings={Array.from(listings)}/>
            </div>
        </div>
    )
}

export default Search;
