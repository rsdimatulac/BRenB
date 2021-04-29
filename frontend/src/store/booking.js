import { csrfFetch } from './csrf';

const ADD_BOOKING = "booking/ADD";

/////////////////// ACTION CREATORS ////////////////////

const addBooking = booking => ({
    type: ADD_BOOKING,
    booking
});

//////////////// THUNK ACTION CREATORS ////////////////////

export const createBooking = data => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const booking = await response.json();
        dispatchEvent(addBooking(booking));
        return booking;
    }
}

/////////////////////// REDUCER //////////////////////////

const initialState = {};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKING:
            return action.booking;
        default:
            return state;
    }
};

export default bookingReducer;