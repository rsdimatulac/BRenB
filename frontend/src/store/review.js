import { csrfFetch } from './csrf';

const LOAD_REVIEWS = 'review/LOAD';
const ADD_REVIEW = 'review/ADD';

/////////////////// ACTION CREATORS ////////////////////

const loadReviews = reviews => ({
    type: LOAD_REVIEWS,
    reviews
});

const addReview = review => ({
    type: ADD_REVIEW,
    review
})

//////////////// THUNK ACTION CREATORS ////////////////////

export const getReviews = (listingId) => async (dispatch) => {
    const response = await csrfFetch(`/api/listings/${listingId}/reviews`);

    if (response.ok) {
        const reviews = await response.json();
        dispatch(loadReviews(reviews));
        return reviews;
    };
}

export const createReview = review => async (dispatch) => {
    // Add logic to post new review
}

/////////////////////// REDUCER //////////////////////////

const initialState = {};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_REVIEWS:
            return action.reviews;
        default:
            return state;
    };
};

export default reviewReducer;