import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createReview, updateReview, deleteReview } from '../../store/reviews';
import './Reviews.css';
import { FaEdit, FaUserCircle, FaTrashAlt } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { BiSave } from 'react-icons/bi';
import { MdSend } from 'react-icons/md';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Reviews() {
  const { listingId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);

  const listings = useSelector((state) => state.listings);
  const listingsArr = Object.values(listings);

  const currentListing = useSelector((state) => state.listings[listingId]);

  let listing;
  if (sessionUser) {
    listing = listingsArr.filter(
      (listing) => listing.authorId === sessionUser.id
    );
  }

  const reviews = useSelector((state) => state.reviews);
  const reviewsArr = Object.values(reviews);
  const listingReviews = reviewsArr.filter(
    (review) => review.listingId === Number(listingId)
  );

  const myListingReviews = listingReviews.filter(
    (review) => review.userId === sessionUser.id
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

    toast.success('Review Updated!', {
      toastId: 'updateReviewToast',
      position: 'bottom-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      closeButton: false,
    });

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

    toast.success('Review Created!', {
      position: 'bottom-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      closeButton: false,
    });

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

  if (currentListing) {
    // if you are logged in but do not own the listing
    if (
      currentListing &&
      sessionUser &&
      currentListing.authorId !== sessionUser.id
    ) {
      return (
        <>
          {listingReviews.length === 0 && (
            <h2 className='reviews-title'>No Reviews</h2>
          )}
          {listingReviews.length === 1 && (
            <h2 className='reviews-title'>1 Review</h2>
          )}
          {listingReviews.length > 1 && (
            <h2 className='reviews-title'>{listingReviews.length} Reviews</h2>
          )}
          <div id='reviews-div'>
            <ul id='reviewUl'>
              {listingReviews.map((review) => {
                return (
                  <li key={review.id} className='reviews-list'>
                    {/* editing, deleting, saving, and canceling a review */}
                    {!showEditBoxArr[review.id] && (
                      <div className='reviewsDiv' id={review.id}>
                        <p className='the-review'>
                          <div className='reviewIcon'>
                            <FaUserCircle />
                          </div>
                          {review.User.name}: "{review.body}"
                        </p>
                        <div className='editAndDeleteButtonRow'>
                          {sessionUser && sessionUser.id === review.userId && (
                            <button
                              className='my-5 btn neumorphic-btn'
                              id='editButton'
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
                              <FaEdit />
                            </button>
                          )}
                          {sessionUser &&
                            (sessionUser.id === review.userId ||
                              sessionUser.id === listing.authorId) && (
                              <button
                                className='my-5 btn neumorphic-btn'
                                id='deleteButton'
                                type='submit'
                                onClick={() => {
                                  dispatch(deleteReview(review.id));

                                  toast.error('Review Removed!', {
                                    position: 'bottom-center',
                                    autoClose: 1000,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: false,
                                    draggable: false,
                                    progress: undefined,
                                    closeButton: false,
                                  });
                                }}
                              >
                                <FaTrashAlt />
                              </button>
                            )}
                        </div>
                      </div>
                    )}
                    {/* editing, deleting, saving, and canceling a review */}
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
                          <div className='saveAndCancelButtn'>
                            <button
                              className='my-5 btn neumorphic-btn'
                              id='saveButton'
                              // className='sc-button'
                              type='submit'
                              onClick={() => {
                                let newobj = { ...newObj };
                                newobj[review.id] = false;
                                setEditBoxArr(newobj);
                              }}
                            >
                              <BiSave />
                            </button>
                            <button
                              className='my-5 btn neumorphic-btn'
                              id='cancelButton'
                              onClick={() => {
                                setshowEditBox(false);
                                setshowReviewId(null);
                                let newobj = { ...newObj };
                                newobj[review.id] = false;
                                setEditBoxArr(newobj);
                              }}
                            >
                              <GiCancel />
                            </button>
                          </div>
                        </form>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Posting a review */}
          {sessionUser &&
            currentListing.authorId !== sessionUser.id &&
            myListingReviews.length < 1 && (
              <div className='createReviewBox'>
                <form id='reviews-form-send' onSubmit={handleSubmit}>
                  <ul className='ws-errors'>
                    {errors.map((error, idx) => (
                      <li key={idx}>{error}</li>
                    ))}
                  </ul>
                  <label>
                    <div className='finder'>
                      <div className='finder__outer__dropdown'>
                        <div className='finder__inner'>
                          <textarea
                            // className='ic-field'
                            className='review__input'
                            rows='1'
                            cols='60'
                            value={body}
                            placeholder='Share your thoughts.'
                            onChange={(e) => setBody(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </label>
                  <button
                    type='submit'
                    className='my-5 btn neumorphic-btn'
                    id='sendButton'
                  >
                    <MdSend />
                  </button>
                </form>
              </div>
            )}
        </>
      );
    }

    // if you are not logged in
    else if (
      currentListing ||
      (currentListing &&
        sessionUser &&
        currentListing.authorId === sessionUser.id)
    ) {
      return (
        <>
          {listingReviews.length === 0 && (
            <h2 className='reviews-title'>No Reviews</h2>
          )}
          {listingReviews.length === 1 && (
            <h2 className='reviews-title'>1 Review</h2>
          )}
          {listingReviews.length > 1 && (
            <h2 className='reviews-title'>{listingReviews.length} Reviews</h2>
          )}
          <div id='reviews-div'>
            <ul id='reviewUl'>
              {listingReviews.map((review) => {
                return (
                  <li key={review.id} className='reviews-list'>
                    <div className='reviewsDiv' id={review.id}>
                      <p className='the-review'>
                        <div className='reviewIcon'>
                          <FaUserCircle />
                        </div>
                        {review.User.name}: "{review.body}"
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      );
    }
  } else {
    return null;
  }
}

export default Reviews;
