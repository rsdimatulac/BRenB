// import { NavLink } from "react-router-dom";
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
import Listing1 from "../../images/listings/2-img-1.webp";
import Listing2 from "../../images/listings/1-img-1.webp";
import Listing3 from "../../images/listings/3-img-0.webp";
import Listing4 from "../../images/listings/4-img-1.webp";
import Banner from './Banner';
import Tile from "./Tile";
import City from "./City";
import "./HomePage.css";

const HomePage = () => {
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
        {/* <NavLink to=""> */}
        <Tile
          src={Listing1}
          title="Spa Retreat with Finnish Spa and Saltwater Hot Tub"
          description="Indulge in a genuine Finnish sauna and shower outdoors surrounded by bamboo in this luxurious spa retreat just 15 minutes from downtown Seattle."
          price="$199 / night"
        />
        {/* </NavLink> */}
        <Tile
          src={Listing2}
          title="Sky Cabin Apartment with Views"
          description="A stunning, serene, and cozy apartment in the heart of Seattle, with vaulted ceilings, wood paneling, mid-century decor, and a heated bathroom tile floor."
          price="$117 / night"
        />
        <Tile
          src={Listing4}
          title="Bright Basement Apartment with Garden Patio"
          description="Wake up feeling recharged in this open-plan and cozy apartment ideal for lounging. Experience a private retreat just minutes from the city."
          price="$107 / night"
        />
        <Tile
          src={Listing3}
          title="Two-Bedroom Charmer Surrounded by Seattle Faves"
          description="This home boasts eclectic furnishings and decor, splashes of bright color throughout, contrasting rustic modern finishes, and an exclusive guest patio."
          price="$180 / night"
        />
      </div>  
    </>
  )
}

export default HomePage;
