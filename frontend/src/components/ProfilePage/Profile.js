import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format, parseISO } from "date-fns";
import { MdHome as Home } from "react-icons/md";
import { AiFillMessage as Speaks } from "react-icons/ai";
import { RiShieldCheckLine as Verified } from "react-icons/ri";
import { FaRegStar as StarOutline } from "react-icons/fa";
import { FaCheck as Check } from "react-icons/fa";
import { getBookings } from "../../store/booking";
import BookingResult from "./BookingResult";
import useConsumeContext from "../../context/LoginSignupModalContext";
// import { getReviews } from "../../store/review";
import "./Profile.css";


const Profile = () => {
    const { setShowMenu } = useConsumeContext();
    const sessionUser = useSelector(state => state.session.user);
    const joinedDate = format(parseISO(sessionUser?.createdAt), "yyyy");
    const dispatch = useDispatch();
    const bookings = useSelector(state => state.booking);
    // const reviews = useSelector(state => state.review);
    
    useEffect(() => {
        setShowMenu(false);
        // dispatch(getReviews(Number(listingId)));
        dispatch(getBookings(sessionUser?.id));
    }, [dispatch, sessionUser?.id, setShowMenu])

    return (
        <div className="profile__container">
            <div className="profile__info-container">
                <div className="profile__details">
                    <div className="profile__avatar">
                        <img src={sessionUser?.avatar} alt="" />
                    </div>
                    <div className="profile__identity-icons">
                        <StarOutline id="star-outline-icon" />
                        <p>Outstanding reviews</p>
                    </div>
                    <div className="profile__identity-icons">
                        <Verified id="verified-icon" />
                        <p>Identity verified</p>
                    </div>
                </div>
                <div className="profile__verification">
                    <h1>{sessionUser?.firstName} confirmed</h1>
                    <div className="verification__checks">
                        <Check id="check-icon" />
                        <p>Identity</p>
                    </div>
                    <div className="verification__checks">
                        <Check id="check-icon" />
                        <p>Email address</p>
                    </div>
                    <div className="verification__checks">
                        <Check id="check-icon" />
                        <p>Awesomeness</p>
                    </div>
                    <div className="learn__more"><span>Learn more</span> about how confirming account info helps keep the Airbnb community secure.</div>
                </div>
            </div>
            <div className="booking__info-container">
                <div className="user__profile-info-container">
                    <h1>Hi, I'm {sessionUser?.firstName}</h1>
                    <h6>Joined in {joinedDate}</h6>
                    <div className="profile__edit-container"><span>Edit Profile</span></div>
                    <h3>About</h3>
                    <p>{sessionUser?.bio}</p>
                    <div>
                        <Home id="home-icon" />
                        <p>Lives anywhere in the world</p>
                    </div>
                    <div>
                        <Speaks id="speaks-icon" />
                        <p>Speaks English</p>
                    </div>
                </div>
                <div className="all__bookings-container">
                    <h2>Upcoming trips</h2>
                    {Array.from(bookings)?.map(booking => <BookingResult booking={booking} key={booking.id}/>)}
                </div>
            </div>
        </div>
    )
}

export default Profile;