// import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RiStarSFill as Star } from "react-icons/ri";
import { parseISO, format, differenceInCalendarDays } from "date-fns";
import "./BookingResult.css";

const BookingResult = ({ booking }) => {
    // const listing = useSelector(state => state.listing);
    // const dispatch = useDispatch();
    const checkIn = format(parseISO(booking?.check_in), "MMMM dd, yyyy");
    const checkOut = format(parseISO(booking?.check_out), "MMMM dd, yyyy");
    const city = booking?.Listing.city;
    const state = booking?.Listing.state;
    const type = booking?.Listing.type;
    const num_nights = differenceInCalendarDays(parseISO(booking?.check_out), parseISO(booking?.check_in));
    const booking_guests = booking?.num_guests;
    const total = booking?.total_cost.toLocaleString();
    const title = booking?.Listing.title;
    const listing_guests = booking?.Listing.num_guests;
    const num_beds = booking?.Listing.num_beds;
    const num_baths = booking?.Listing.num_baths;
    const rating = booking?.Listing.rating;
    const price = booking?.Listing.price;

    // TODO: Fix the image order
    const listingImage = booking?.Listing.Images[1].url;
    const listingId = booking.Listing.id;
    console.log(listingId)

    // GET REVIEWS

    return (
        <div className="booking__tile-container">
            <div className="booking__trips-top">
                <div className="trips__top-details">
                    <h2>{checkIn}-{checkOut}</h2>
                    <h3>{city}, {state}, United States</h3>
                    <h4>
                        <span>{num_nights > 1 ? `${num_nights} nights` : `${num_nights} night`}</span>
                        <span>・</span>
                        <span>{type}</span>
                        <span>・</span>
                        <span>{booking_guests > 1 ? `${booking_guests} guests` : `${booking_guests} guest`}</span>
                    </h4>
                </div>
                <button>Cancel booking</button>
                <p>Total cost: ${total}</p>
            </div>
            <div className="booking__tile-bottom">
                <div>
                    <img src={listingImage} alt=""></img>
                </div>
                <div>
                    <div className="booking__details-top">
                        <p>{type} in {city}</p>
                        <Link to={`/listings/${listingId}`} style={{ textDecoration: "none", color: "inherit" }} ><h3>{title}</h3></Link>
                        <p>_____</p>
                        <h4>
                            <span>{listing_guests > 1 ? `${listing_guests} guests` : `${listing_guests} guest`}</span>
                            <span>・</span>
                            <span>{num_beds > 1 ? `${num_beds} beds` : `${num_beds} bed`}</span>
                            <span>・</span>
                            <span>{num_baths > 1 ? `${num_baths} baths` : `${num_baths} bath`}</span>
                        </h4>
                        <div className="booking__trips-bottom">
                            <div>
                                <span><Star className="star__icon-booking"/></span>
                                <span>{rating}</span>
                            </div>
                            <h2>${price} / night</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingResult;


    // const checkIn = format(parseISO(booking[0]?.check_in), "MMMM dd, yyyy");
    // const checkOut = format(parseISO(booking[0]?.check_out), "MMMM dd, yyyy");
    // const city = booking[0]?.Listing.city;
    // const state = booking[0]?.Listing.state;
    // const type = booking[0]?.Listing.type;
    // const num_nights = differenceInCalendarDays(parseISO(booking[0]?.check_out), parseISO(booking[0]?.check_in));
    // const booking_guests = booking[0]?.num_guests;
    // const total = booking[0]?.total_cost.toLocaleString();
    // const title = booking[0]?.Listing.title;
    // const listing_guests = booking[0]?.Listing.num_guests;
    // const num_beds = booking[0]?.Listing.num_beds;
    // const num_baths = booking[0]?.Listing.num_baths;
    // const rating = booking[0]?.Listing.rating;
    // const price = booking[0]?.Listing.price;
    // const reviews = TODO;