import { csrfFetch } from './csrf';

const LOAD_LISTING = "listings/LOAD";
const ADD_LISTING = "listings/ADD_LISTING";
const UPDATE_LISTING = "listings/UPDATE_LISTING";
const DELETE_LISTING = "listings/DELETE_LISTING";


const loadListing = (listings) => ({
    type: LOAD_LISTING,
    listings,
});

const addOneListing = (newListing) => ({
  type: ADD_LISTING,
  newListing,
});

const updateOneListing = (updatedListing) => ({
  type: UPDATE_LISTING,
  updatedListing,
});

const deleteOneListing = (deletedListingId) => ({
  type: DELETE_LISTING,
  deletedListingId,
});


export const getListings = () => async (dispatch) => {
    const response = await csrfFetch(`/api/listings`);

    if (response.ok) {
      const listings = await response.json();
      dispatch(loadListing(listings));
    }
};

export const createListing = (newListing) => async (dispatch) => {
  const response = await csrfFetch(`/api/listings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newListing),
  });

  if (response.ok) {
    const newListing = await response.json();
    dispatch(addOneListing(newListing));
    return newListing;
  }
};

export const updateListing = (updateListing) => async (dispatch) => {
  const response = await csrfFetch(`/api/listings/${updateListing.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateListing),
  });

  if (response.ok) {
    const updatedListing = await response.json();
    dispatch(updateOneListing(updatedListing));
    return updatedListing;
  }
};

export const deleteListing = (listingId) => async (dispatch) => {
  const response = await csrfFetch(`/api/listings/delete/${listingId}`, {
    method: "DELETE"
  });

  if (response.ok) {
    const deletedListingId = await response.json();
    dispatch(deleteOneListing(deletedListingId));
  }
};

const initialState = {};


const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LISTING: {
        const newState = {};
        action.listings.forEach((listing) => {
          newState[listing.id] = listing;
        });
        return newState;
    }
    case ADD_LISTING:{
        const newState = {...state}
        newState[action.newListing.id] = {...action.newListing}
        return newState;
    }
    case UPDATE_LISTING:{
      const newState = {...state}
      newState[action.updatedListing.id] = {...action.updatedListing}
      return newState;
    }
    case DELETE_LISTING:{
      const newState = {...state}
      delete newState[action.deletedListingId]
      return newState;
    }
    default:
      return state;
  }
};

export default listingsReducer;
