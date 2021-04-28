import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListingById } from "../../store/listing";
import { useHistory, Route, useParams, Redirect } from "react-router-dom";
import { RiStarSFill as Star } from "react-icons/ri";
import { BiHome as Home } from "react-icons/bi";
import { HiOutlineSparkles as Sparkle, HiOutlineBookOpen as Rules } from "react-icons/hi";
import { RiDoorOpenLine as Door } from "react-icons/ri";
import { RiParkingBoxLine as Parking } from "react-icons/ri";
import { GrWifi as Wifi } from "react-icons/gr";
import { AiOutlineLaptop as Laptop } from "react-icons/ai";
import { BiBath as Essential } from "react-icons/bi";
import { GiForkKnifeSpoon as Kitchen } from "react-icons/gi";
import { FaRegSnowflake as Aircon } from  "react-icons/fa";
import { FiMonitor as TV } from "react-icons/fi";
import { FaFireExtinguisher as FireExt } from "react-icons/fa";
import './Show.css';

const ShowPage = () => {
    const { id } = useParams();
    const listing = useSelector(state => state.listing);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const imagesArray = listing?.Images;
    const host = listing?.User;
    const bed = listing?.num_beds;
    const bath = listing?.num_baths;
    const guest = listing?.num_guests;

    useEffect(() => {
        dispatch(getListingById(Number(id)));
    }, [dispatch, id])
    
    // redirect to page not found if Listing is NULL
    if (!listing) {
        history.push("/")
        return <Redirect to="page-not-found"/>
    };

    return (
        <div className="show__container">
            <Route exact path="/listings/:id">
                <div className="listing__title-info">
                    <h1>{listing?.title}</h1>
                    <div className="listing__info">
                        <span><Star className="rating__star" /></span>
                        <span className="listing__rating">{`${listing?.rating}`}</span>
                        <span>・</span>
                        <span className="listing__reviews">{`(Total reviews)`}</span>
                        <span>・</span>
                        <span className="listing__location">{`${listing?.city}, ${listing?.state}, United States`}</span>
                    </div>
                </div>
                <div className="listing__image">
                    <img src={imagesArray ? imagesArray[0].url : null} alt="" />
                </div>
                <div className="listing__features">
                    <div className="description__info">
                        <h1>{`${listing?.type} by ${host?.firstName}`}</h1>
                        <span>{guest > 1 ? `${guest} guests` : `${guest} guest`}</span>
                        <span>・</span>
                        <span>{bed > 1 ? `${bed} beds` : `${bed} bed`}</span>
                        <span>・</span>
                        <span>{bath > 1 ? `${bath} baths` : `${bath} bath`}</span>
                    </div>
                    <div className="host__avatar">
                        <img src={host?.avatar} alt="" />
                    </div>
                </div>
                <div className="booking__container">
                    <h2>Booking here</h2>
                </div>
                <div className="listing__more-info__container">
                    <div className="home__icon info__icon"><Home /></div>
                    <div className="home info__text">
                        <h1>Entire Home</h1>
                        <p>You’ll have the apartment to yourself.</p>
                    </div>
                    <div className="sparkle__icon info__icon"><Sparkle /></div>
                    <div className="sparkle info__text">
                        <h1>Enhanced Clean</h1>
                        <p>This host committed to Airbnb's 5-step enhanced cleaning process.</p>
                    </div>
                    <div className="door__icon info__icon"><Door /></div>
                    <div className="door info__text">
                        <h1>Self check-in</h1>
                        <p>Check yourself in with the keypad or lockbox.</p>
                    </div>
                    <div className="rules__icon info__icon"><Rules /></div>
                    <div className="rules info__text">
                        <h1>House Rules</h1>
                        <p>The host doesn’t allow parties, or smoking.</p>
                    </div>
                </div>
                <div className="listing__description">
                    <div>
                        {listing?.description}
                    </div>
                </div>
                <div className="amenities__title">
                    <h2>Amenities</h2>
                </div>
                <div className="listing__amenities">
                    <div><Parking className="amenities__icon"/><span>Free parking on premises</span></div>
                    <div><Wifi className="amenities__icon"/><span>WiFi</span></div>
                    <div><Laptop className="amenities__icon"/><span>Dedicated workspace</span></div>
                    <div><Essential className="amenities__icon"/><span>Essentials</span></div>
                    <div><Kitchen className="amenities__icon"/><span>Kitchen</span></div>
                    <div><Aircon className="amenities__icon"/><span>Air conditioning</span></div>
                    <div><TV className="amenities__icon"/><span>TV</span></div>
                    <div><FireExt className="amenities__icon"/><span>Fire Extinguisher</span></div>
                </div>
                <div className="reviews__container">
                    <h2>Reviews here</h2>
                </div>
            </Route>
            <Route path="/bookings">
                {/* TODO: Add Booking Component here */}
            </Route>
        </div>
    )
}

export default ShowPage;
