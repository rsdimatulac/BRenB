import { csrfFetch } from './csrf';

const LOAD = 'listing/LOAD';

/////////////////// ACTION CREATORS ////////////////////

const load = listing => ({
    type: LOAD,
    listing
});

//////////////// THUNK ACTION CREATORS ////////////////////

export const getListings = () => async (dispatch) => {
    const response = await csrfFetch(`/api/search`);
    
    if (response.ok) {
        const listing = await response.json();
        dispatch(load(listing));
        return listing;
    };
}

export const getListingById = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/listings/${id}`);

    if (response.ok) {
        const listing = await response.json();
        dispatch(load(listing));
        return listing;
    };
};

/////////////////////// REDUCER //////////////////////////

const initialState = {};

const listingReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD:
            return action.listing;
        default:
            return state;
    }
};

export default listingReducer;
