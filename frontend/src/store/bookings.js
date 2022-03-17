import { csrfFetch } from './csrf';

const LOAD_BOOKINGS = "bookings/LOAD";
const ADD_BOOKING = "bookings/ADD_BOOKING";
const UPDATE_BOOKING = "bookings/UPDATE_BOOKING";
const DELETE_BOOKING = "bookings/DELETE_BOOKING";


const loadBookings = (bookings) => ({
    type: LOAD_BOOKINGS,
    bookings,
});

const addOneBooking = (newBooking) => ({
  type: ADD_BOOKING,
  newBooking,
});

const updateOneBooking = (updatedBooking) => ({
  type: UPDATE_BOOKING,
  updatedBooking,
});

const deleteOneBooking = (deletedBookingId) => ({
  type: DELETE_BOOKING,
  deletedBookingId,
});


export const getBookings = () => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings`);

    if (response.ok) {
      const bookings = await response.json();
      dispatch(loadBookings(bookings));
    }
};

export const createBooking = (newBooking) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBooking),
  });

  if (response.ok) {
    const newBooking = await response.json();
    dispatch(addOneBooking(newBooking));
    return newBooking;
  }
};

export const updateBooking = (updateBooking) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/${updateBooking.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateBooking),
  });

  if (response.ok) {
    const updatedBooking = await response.json();
    dispatch(updateOneBooking(updatedBooking));
    return updatedBooking;
  }
};


export const deleteBooking = (bookingId) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/delete/${bookingId}`, {
    method: "DELETE"
  });

  if (response.ok) {
    const deletedBookingId = await response.json();
    dispatch(deleteOneBooking(deletedBookingId));
  }
};


const initialState = {};


const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKINGS: {
        const newState = {};
        action.bookings.forEach((booking) => {
          newState[booking.id] = booking;
        });
        return newState;
    }
    case ADD_BOOKING:{
        const newState = {...state}
        newState[action.newBooking.id] = {...action.newBooking}
        return newState;
    }
    case UPDATE_BOOKING:{
      const newState = {...state}
      newState[action.updatedBooking.id] = {...action.updatedBooking}
      return newState;
    }
    case DELETE_BOOKING:{
      const newState = {...state}
      delete newState[action.deletedBookingId]
      return newState;
    }
    default:
    return state;
    }
};

export default bookingsReducer;
