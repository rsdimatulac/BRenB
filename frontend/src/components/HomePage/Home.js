import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EntireHomes from "../../images/homepage/entire-homes.webp";
import UniqueStays from "../../images/homepage/unique-stays.webp";
import Outdoor from "../../images/homepage/farms-and-nature.webp";
import PetsAllowed from "../../images/homepage/pets-allowed.webp";
import Bainbridge from "../../images/homepage/explore-1.webp";
import Seattle from "../../images/homepage/explore-2.webp";
import Mercer from "../../images/homepage/explore-3.webp";
import Portland from "../../images/homepage/explore-4.webp";
import Victoria from "../../images/homepage/explore-5.webp";
import Tacoma from "../../images/homepage/explore-6.webp";
import Vancouver from "../../images/homepage/explore-7.webp";
import Orcas from "../../images/homepage/explore-3.webp";
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

  useEffect(() => {
    setShowMenu(false);
    dispatch(getListings());
  }, [dispatch, setShowMenu]);

  return (
    <>
      <Banner />
      <h1 className="tile__title">Explore Nearby</h1>
      <div className='city__container'>
        <City 
          src={Mercer}
          title="Mercer Island"
          description="11 minute drive"
        />
        <City
          src={Portland}
          title="Portland"
          description="3 hour drive"
        />
        <City
          src={Seattle}
          title="Seattle"
          description="5 minute drive"
        />
        <City
          src={Bainbridge}
          title="Bainbridge Island"
          description="1 hour drive"
        />
        <City
          src={Vancouver}
          title="Vancouver"
          description="2.5 hour drive"
        />
        <City
          src={Victoria}
          title="Victoria"
          description="4.5 hour drive"
        />
        <City
          src={Tacoma}
          title="Tacoma"
          description="35 minute drive"
        />
        <City
          src={Orcas}
          title="Orcas Island"
          description="3 hour drive"
        />
      </div>
      <h1 className="tile__title">Live Anywhere</h1>
      <div className='tile__container'>
        <Tile
          src={EntireHomes}
          title="Entire homes"
        />
        <Tile
          src={UniqueStays}
          title="Unique stays"
        />
        <Tile
          src={Outdoor}
          title="Outdoor getaways"
        />
        <Tile
          src={PetsAllowed}
          title="Pets allowed"
        />
      </div>
      <h1 className="tile__title">Featured Homes</h1>
      <div className='tile__container'>
        <NavLink to={`/listings/${listings[1]?.id}`} style={{ textDecoration: "none"}}>
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
