import { csrfFetch } from './csrf';

const LOAD_COMMENTS = 'reviews/LOAD';
const ADD_COMMENT = 'reviews/ADD_COMMENT';
const UPDATE_COMMENT = 'reviews/UPDATE_COMMENT';
const DELETE_COMMENT = 'reviews/DELETE_COMMENT';

const loadReviews = (reviews) => ({
  type: LOAD_COMMENTS,
  reviews,
});

const addOneReview = (newReview) => ({
  type: ADD_COMMENT,
  newReview,
});

const updateOneReview = (updatedReview) => ({
  type: UPDATE_COMMENT,
  updatedReview,
});

const deleteOneReview = (deletedReviewId) => ({
  type: DELETE_COMMENT,
  deletedReviewId,
});

export const getReviews = () => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews`);

  if (response.ok) {
    const reviews = await response.json();
    dispatch(loadReviews(reviews));
  }
};

export const createReview = (newReview) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newReview),
  });

  if (response.ok) {
    const newReview = await response.json();
    dispatch(addOneReview(newReview));
    return newReview;
  }
};

export const updateReview = (updateReview) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${updateReview.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updateReview),
  });

  if (response.ok) {
    const updatedReview = await response.json();
    dispatch(updateOneReview(updatedReview));
    return updatedReview;
  }
};

export const deleteReview = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/delete/${reviewId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    const deletedReviewId = await response.json();
    dispatch(deleteOneReview(deletedReviewId));
  }
};

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMMENTS: {
      const newState = {};
      action.reviews.forEach((review) => {
        newState[review.id] = review;
      });
      return newState;
    }
    case ADD_COMMENT: {
      const newState = { ...state };
      newState[action.newReview.id] = { ...action.newReview };
      return newState;
    }
    case UPDATE_COMMENT: {
      const newState = { ...state };
      newState[action.updatedReview.id] = { ...action.updatedReview };
      return newState;
    }
    case DELETE_COMMENT: {
      const newState = { ...state };
      delete newState[action.deletedReviewId];
      return newState;
    }
    default:
      return state;
  }
};

export default reviewsReducer;
