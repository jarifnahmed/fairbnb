import { csrfFetch } from './csrf';

const LOAD_STORY = 'listings/LOAD';
const ADD_STORY = 'listings/ADD_STORY';
const UPDATE_STORY = 'listings/UPDATE_STORY';
const DELETE_STORY = 'listings/DELETE_STORY';

const loadListing = (listings) => ({
  type: LOAD_STORY,
  listings,
});

const addOneListing = (newListing) => ({
  type: ADD_STORY,
  newListing,
});

const updateOneListing = (updatedListing) => ({
  type: UPDATE_STORY,
  updatedListing,
});

const deleteOneListing = (deletedListingId) => ({
  type: DELETE_STORY,
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
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
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
    method: 'DELETE',
  });

  if (response.ok) {
    const deletedListingId = await response.json();
    dispatch(deleteOneListing(deletedListingId));
  }
};

const initialState = {};

const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STORY: {
      const newState = {};
      action.listings.forEach((listing) => {
        newState[listing.id] = listing;
      });
      return newState;
    }
    case ADD_STORY: {
      const newState = { ...state };
      newState[action.newListing.id] = { ...action.newListing };
      return newState;
    }
    case UPDATE_STORY: {
      const newState = { ...state };
      newState[action.updatedListing.id] = { ...action.updatedListing };
      return newState;
    }
    case DELETE_STORY: {
      const newState = { ...state };
      delete newState[action.deletedListingId];
      return newState;
    }
    default:
      return state;
  }
};

export default listingsReducer;
