import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createReview, updateReview, deleteReview } from '../../store/reviews';
import './Reviews.css';

function Reviews() {
  const { listingId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);

  const listings = useSelector((state) => state.listings);
  const listingsArr = Object.values(listings);
  let listing;
  if (sessionUser) {
    listing = listingsArr.filter(
      (listing) => listing.userId === sessionUser.id
    );
  }

  const reviews = useSelector((state) => state.reviews);
  const reviewsArr = Object.values(reviews);
  const listingReviews = reviewsArr.filter(
    (review) => review.listingId === Number(listingId)
  );

  const dispatch = useDispatch();

  const [body, setBody] = useState('');
  const [errors, setErrors] = useState([]);
  let newObj = {};
  for (const review of reviewsArr) {
    newObj[review.id] = false;
  }

  const [editBody, setEditBody] = useState('');
  const [editErrors, setEditErrors] = useState([]);
  const [showEditBox, setshowEditBox] = useState(false);
  const [showReviewId, setshowReviewId] = useState(null);
  const [showEditBoxArr, setEditBoxArr] = useState(newObj);

  //handles an edited review submission
  const handleEdit = async (e) => {
    e.preventDefault();

    const userId = sessionUser.id;

    const editedReview = {
      id: showReviewId,
      userId,
      listingId: Number(listingId),
      body: editBody,
    };

    setshowEditBox(false);
    setshowReviewId(null);

    return dispatch(updateReview(editedReview))
      .then(() => {
        setBody('');
        setEditErrors([]);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setEditErrors(data.errors);
      });
  };

  //handles new review submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = sessionUser.id;

    const newReview = {
      userId,
      listingId: Number(listingId),
      body,
    };

    return dispatch(createReview(newReview))
      .then(() => setBody(''))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <>
      <h2 className='reviews-title'>Reviews</h2>
      {sessionUser && (
        <div>
          <form id='reviews-form' onSubmit={handleSubmit}>
            <ul className='ws-errors'>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <label>
              <textarea
                className='ic-field'
                rows='7'
                cols='80'
                value={body}
                placeholder='Share your thoughts.'
                onChange={(e) => setBody(e.target.value)}
                required
              />
            </label>
            <button className='wc-button' type='submit'>
              Submit
            </button>
          </form>
        </div>
      )}
      <div id='reviews-div'>
        <ul>
          {listingReviews.map((review) => {
            return (
              <li key={review.id} className='reviews-list'>
                {!showEditBoxArr[review.id] && (
                  <div className='reviewsDiv' id={review.id}>
                    <p className='the-review'>
                      {review.User.username}: "{review.body}"
                    </p>

                    {sessionUser && sessionUser.id === review.userId && (
                      <button
                        className='edit-button'
                        type='submit'
                        onClick={() => {
                          setshowEditBox(true);
                          setshowReviewId(review.id);
                          setEditBody(review.body);
                          let newobj = { ...newObj };
                          newobj[review.id] = true;
                          setEditBoxArr(newobj);
                        }}
                      >
                        Edit
                      </button>
                    )}
                    {sessionUser &&
                      (sessionUser.id === review.userId ||
                        sessionUser.id === listing.userId) && (
                        <button
                          className='delete-button'
                          type='submit'
                          onClick={() => dispatch(deleteReview(review.id))}
                        >
                          Delete
                        </button>
                      )}
                  </div>
                )}

                {sessionUser && showEditBox && showReviewId === review.id && (
                  <div>
                    <form id='reviews-form' onSubmit={handleEdit}>
                      <ul className='ws-errors'>
                        {editErrors.map((error, idx) => (
                          <li key={idx}>{error}</li>
                        ))}
                      </ul>
                      <label>
                        <textarea
                          className='ic-field'
                          rows='5'
                          cols='60'
                          value={editBody}
                          onChange={(e) => setEditBody(e.target.value)}
                          required
                        />
                      </label>
                      <button
                        className='sc-button'
                        type='submit'
                        onClick={() => {
                          let newobj = { ...newObj };
                          newobj[review.id] = false;
                          setEditBoxArr(newobj);
                        }}
                      >
                        Edit
                      </button>
                      {/* <span className="clear" onClick={() => {
                                        setshowEditBox(false)
                                        setshowReviewId(null)
                                        let newobj = {...newObj}
                                        newobj[review.id] = false;
                                        setEditBoxArr(newobj)
                                        }
                                    }>
                                        Cancel
                                    </span> */}
                      <button
                        className='clear'
                        onClick={() => {
                          setshowEditBox(false);
                          setshowReviewId(null);
                          let newobj = { ...newObj };
                          newobj[review.id] = false;
                          setEditBoxArr(newobj);
                        }}
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Reviews;
