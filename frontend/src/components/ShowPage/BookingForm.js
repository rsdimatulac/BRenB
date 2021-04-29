// import { useParams } from "react-router-dom";
import { useState } from "react";
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
// import './DatePicker.css';

const BookingForm = ({ listing }) => {
    // const { id } = useParams();
    const [date, setDate] = useState({
        check_in: null,
        check_out: null
    });
    const [num_guests, setNumGuests] = useState(1);
    const [focusedInput, setFocusedInput] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className="booking___form">
            <div className="booking__price">{`$${listing?.price}`}<span>/ night</span></div>
            <form onSubmit={handleSubmit} className="form__booking">
                <div id={`date__picker-title`}>Dates</div>
                <div className={`date__picker`}>
                    <DateRangePicker
                        startDatePlaceholderText="Check in"
                        endDatePlaceholderText="Check out"
                        startDate={date.check_in} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={date.check_out} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => setDate({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
                        showClearDates={true}
                        regular={true}
                        numberOfMonths={1}
                    />
                </div>
                <div id={`num__guests-title`}>Guests</div>
                <input
                    type="number"
                    min="1"
                    name="num-guests"
                    placeholder="0"
                    value={num_guests}
                    onChange={(e) => setNumGuests(e.target.value)}
                />
                <button className="reserve__button" type="submit">Reserve</button>
            </form>
        </div>
    );
};

export default BookingForm;