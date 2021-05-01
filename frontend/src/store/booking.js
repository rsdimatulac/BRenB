import { csrfFetch } from './csrf';

const ADD_BOOKING = "booking/ADD";
const STORE_BOOKING = "booking/STORE";
const GET_BOOKING = "booking/GET";
const DELETE_BOOKING = "booking/DELETE";

/////////////////// ACTION CREATORS ////////////////////

const addBooking = booking => ({
    type: ADD_BOOKING,
    booking
});

const newBooking = booking => ({
    type: STORE_BOOKING,
    booking
});

const getBooking = (booking) => ({
    type: GET_BOOKING,
    booking
});

const deleteBooking = (bookingId) => ({
    type: DELETE_BOOKING,
    bookingId
});

//////////////// THUNK ACTION CREATORS ////////////////////

export const createBooking = booking => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking)
    });

    if (response.ok) {
        const booking = await response.json();
        dispatch(addBooking(booking));
        return booking;
    }
}

export const storeNewBooking = booking => async (dispatch) => {
    dispatch(newBooking(booking))
    return booking;
}

export const getBookings = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/bookings`);

    if (response.ok) {
        const booking = await response.json();
        dispatch(getBooking(booking));
        return booking;
    };
}

export const cancelBooking = (bookingId) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        const bookingId = await response.json();
        dispatch(deleteBooking(bookingId));
    };
}

/////////////////////// REDUCER //////////////////////////

const initialState = {};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKING:
            return action.booking;
        case STORE_BOOKING:
            return action.booking;
        case GET_BOOKING:
            return action.booking;
        case DELETE_BOOKING:
            const newState = { ...state }
            delete newState[action.bookingId]
            return newState;
        default:
            return state;
    }
};

export default bookingReducer;