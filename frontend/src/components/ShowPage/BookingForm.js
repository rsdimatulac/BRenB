import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { enGB } from 'date-fns/locale';
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates';
import { RiStarSFill as Star } from "react-icons/ri";
import LoginModal from "../LoginFormModal/LoginFormModal";
import { storeNewBooking } from '../../store/booking';
import 'react-nice-dates/build/style.css';
import "./BookingForm.css";
import "../LoginFormModal/LoginForm.css";

const BookingForm = ({ listing, userId }) => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [num_guests, setNumGuests] = useState(1);
    const [focus, setFocus] = useState(START_DATE);
    const handleFocusChange = newFocus => {
        setFocus(newFocus || START_DATE);
    };
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const resetValues = () => {
        setStartDate();
        setEndDate();
        setNumGuests(1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBooking = {
            listing_id: Number(listing?.id),
            user_id: Number(userId),
            check_in: startDate,
            check_out: endDate,
            num_guests: Number(num_guests)
        };

        // using redux to store the potential booking
        dispatch(storeNewBooking(newBooking));
        resetValues();

        // only redirect to bookings if user is logged in
        if (sessionUser) {
            history.push(`/bookings`);
        };
    };

    return (
        <div className="booking___form">
            <div className="price__container">
                <div className="booking__price">{`$${listing?.price}`}<span>/ night</span></div>
                <div className="rating__div"><span><Star className="rating__star"/></span>{listing?.rating}</div>
            </div>
            <form onSubmit={handleSubmit} className="form__booking">
                <div id={`date__picker-title`}>Dates</div>
                <div className={`date__picker`}>
                    <DateRangePicker
                        startDate={startDate}
                        endDate={endDate}
                        onStartDateChange={setStartDate}
                        onEndDateChange={setEndDate}
                        focus={focus}
                        onFocusChange={handleFocusChange}
                        minimumDate={new Date()}
                        minimumLength={1}
                        format='MMM dd yyyy'
                        locale={enGB}
                    >
                        {({ startDateInputProps, endDateInputProps, focus }) => (
                            <div className='date-range'>
                                <input
                                    className={'input' + (focus === START_DATE ? ' -focused' : '')}
                                    {...startDateInputProps}
                                    placeholder='Check in'
                                    required
                                />
                                <span className='date-range_arrow' />
                                <input
                                    className={'input' + (focus === END_DATE ? ' -focused' : '')}
                                    {...endDateInputProps}
                                    placeholder='Check out'
                                    required
                                />
                            </div>
                        )}
                    </DateRangePicker>
                </div>
                <div id={`num__guests-title`}>Guests</div>
                <input
                    type="number"
                    min="1"
                    name="num-guests"
                    placeholder="0"
                    value={num_guests}
                    required
                    onChange={(e) => setNumGuests(e.target.value)}
                />
                {sessionUser ? <button className="reserve__button" type="submit">Reserve</button> : <div className="reserve__button"><LoginModal /></div>}
                <div className="reserve__message">You won't be charged yet</div>
            </form>
        </div>
    );
};


export default BookingForm;