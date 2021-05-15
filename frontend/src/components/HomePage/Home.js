import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EntireHomes from "../../images/homepage/entire-homes.webp";
import UniqueStays from "../../images/homepage/unique-stays.webp";
import Outdoor from "../../images/homepage/farms-and-nature.webp";
import PetsAllowed from "../../images/homepage/pets-allowed.webp";
import Bellevue from "../../images/homepage/explore-1.webp";
import Seattle from "../../images/homepage/explore-2.webp";
import Mercer from "../../images/homepage/explore-3.webp";
import NorthSeattle from "../../images/homepage/explore-4.webp";
import Greenlake from "../../images/homepage/explore-5.webp";
import SLU from "../../images/homepage/explore-6.webp";
import Uptown from "../../images/homepage/explore-7.webp";
import Belltown from "../../images/homepage/explore-3.webp";
import { getListings } from "../../store/listing";
import useConsumeContext from "../../context/LoginSignupModalContext";
import Banner from './Banner';
import Tile from "./Tile";
import City from "./City";
import "./Home.css";

const HomePage = () => {
  const listings = useSelector(state => state.listing);
  const { setShowMenu } = useConsumeContext();
  const dispatch = useDispatch();
  const image1 = listings[0]?.Images[0].url;
  const image2 = listings[1]?.Images[0].url;
  const image3 = listings[2]?.Images[0].url;
  const image4 = listings[3]?.Images[0].url;
  // const image1 = "https://brenb.s3.amazonaws.com/listings/1-img-1.webp";
  // const image2 = "https://brenb.s3.amazonaws.com/listings/2-img-1.webp";
  // const image3 = "https://brenb.s3.amazonaws.com/listings/3-img-1.webp";
  // const image4 = "https://brenb.s3.amazonaws.com/listings/4-img-1.webp";

  useEffect(() => {
    setShowMenu(false);
    dispatch(getListings());
  }, [dispatch, setShowMenu]);

  return (
    <>
      <Banner />
      <h1 className="tile__title">Explore Nearby</h1>
      <div className='city__container'>
        <NavLink to={`/search/mercer_island`} style={{ textDecoration: "none", color: "inherit" }}>
          <City 
            src={Mercer}
            title="Mercer Island"
            description="11 minute drive"
            />
        </NavLink>
        <NavLink to={`/search/north_seattle`} style={{ textDecoration: "none", color: "inherit" }}>
          <City
            src={NorthSeattle}
            title="North Seattle"
            description="18 minute drive"
          />
        </NavLink>
        <NavLink to={`/search/downtown`} style={{ textDecoration: "none", color: "inherit" }}>
          <City
            src={Seattle}
            title="Seattle"
            description="3 minute drive"
            />
        </NavLink>
        <NavLink to={`/search/bellevue`} style={{ textDecoration: "none", color: "inherit" }}>
          <City
            src={Bellevue}
            title="Bellevue"
            description="14 minute drive"
            />
        </NavLink>
        <NavLink to={`/search/uptown`} style={{ textDecoration: "none", color: "inherit" }}>
          <City
            src={Uptown}
            title="Uptown"
            description="8 minute drive"
            />
        </NavLink>
        <NavLink to={`/search/greenlake`} style={{ textDecoration: "none", color: "inherit" }}>
          <City
            src={Greenlake}
            title="Green Lake"
            description="13 minute drive"
            />
        </NavLink>
        <NavLink to={`/search/slu`} style={{ textDecoration: "none", color: "inherit" }}>
          <City
            src={SLU}
            title="South Lake Union"
            description="7 minute drive"
            />
        </NavLink>
        <NavLink to={`/search/belltown`} style={{ textDecoration: "none", color: "inherit" }}>
          <City
            src={Belltown}
            title="Belltown"
            description="6 minute drive"
          />
        </NavLink>
      </div>
      <h1 className="tile__title">Live Anywhere</h1>
      <div className='tile__container'>
        <div id="live_anywhere"></div>
        <NavLink to={`/search`} style={{ textDecoration: "none", color: "inherit" }}>
          <Tile
            src={EntireHomes}
            title="Entire homes"
            />
        </NavLink>
        <NavLink to={`/search/unique_stays`} style={{ textDecoration: "none", color: "inherit" }}>
          <Tile
            src={UniqueStays}
            title="Unique stays"
            />
        </NavLink>
        <NavLink to={`/search/outdoor_getaways`} style={{ textDecoration: "none", color: "inherit" }}>
          <Tile
            src={Outdoor}
            title="Outdoor getaways"
            />
        </NavLink>
        <NavLink to={`/search`} style={{ textDecoration: "none", color: "inherit" }}>
          <Tile
            src={PetsAllowed}
            title="Pets allowed"
            />
        </NavLink>
      </div>
      <h1 className="tile__title">Featured Homes</h1>
      <div id="featured_homes" className='tile__container'>
        <NavLink to={`/listings/${listings[1]?.id}`} style={{ textDecoration: "none" }}>
          <Tile
            src={image2}
            title={listings[1]?.title}
            description="Indulge in a genuine Finnish sauna and shower outdoors surrounded by bamboo in this luxurious spa retreat just 15 minutes from downtown Seattle."
            price={`$${listings[1]?.price} / night`}
          />
        </NavLink>
        <NavLink to={`/listings/${listings[0]?.id}`} style={{ textDecoration: "none" }}>
          <Tile
            src={image1}
            title={listings[0]?.title}
            description="A stunning, serene, and cozy apartment in the heart of Seattle, with vaulted ceilings, wood paneling, mid-century decor, and a heated bathroom tile floor."
            price={`$${listings[0]?.price} / night`}
          />
        </NavLink>
        <NavLink to={`/listings/${listings[3]?.id}`} style={{ textDecoration: "none" }}>
          <Tile
            src={image4}
            title={listings[3]?.title}
            description="Wake up feeling recharged in this open-plan and cozy apartment ideal for lounging. Experience a private retreat just minutes from the city."
            price={`$${listings[3]?.price} / night`}
          />
        </NavLink>
        <NavLink to={`/listings/${listings[2]?.id}`} style={{ textDecoration: "none" }}>
          <Tile
            src={image3}
            title={listings[2]?.title}
            description="This home boasts eclectic furnishings and decor, splashes of bright color throughout, contrasting rustic modern finishes, and an exclusive guest patio."
            price={`$${listings[2]?.price} / night`}
          />
        </NavLink>
      </div>  
    </>
  )
}

export default HomePage;
