import { csrfFetch } from './csrf';

const LOAD = 'review/LOAD';

/////////////////// ACTION CREATORS ////////////////////

const loadReviews = reviews => ({
    type: LOAD,
    reviews
});

//////////////// THUNK ACTION CREATORS ////////////////////

export const getReviews = (listingId) => async (dispatch) => {
    const response = await csrfFetch(`/api/listings/${listingId}/reviews`);

    if (response.ok) {
        const reviews = await response.json();
        dispatch(loadReviews(reviews));
        return reviews;
    };
}

/////////////////////// REDUCER //////////////////////////

const initialState = {};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            // const allReviews ={};
            // action.reviews.forEach(review => {
            //     allReviews[review.id] = review
            // })
            return action.reviews;
        default:
            return state;
    };
};

export default reviewReducer;