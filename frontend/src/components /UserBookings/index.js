import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { deleteStory } from '../../store/stories';
import { updateBooking, deleteBooking, } from '../../store/bookings';
import { FaEdit, FaRegUserCircle, FaTrashAlt } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { BiSave } from 'react-icons/bi';
import './UserBookings.css';

function UserBookings() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const allStories = useSelector((state) => state.stories);
  const allBookings = useSelector((state) => state.bookings);
  const storiesArr = Object.values(allStories);
  const bookingsArr = Object.values(allBookings);

  const dayjs = require('dayjs');







  // const currentStory = useSelector((state) => state.stories[storyId]);


  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [days, setDays] = useState(0);
  const [total, setTotal] = useState(0);

  const [errors, setErrors] = useState([]);
  let newObj = {};
  for (const booking of bookingsArr) {
    newObj[booking.id] = false;
  }

  const [editStartDate, setEditStartDate] = useState('');
  const [editEndDate, setEditEndDate] = useState('');


  const [editDays, setEditDays] = useState('');
  const [editTotal, setEditTotal] = useState('');

  const [editErrors, setEditErrors] = useState([]);
  const [showEditBox, setshowEditBox] = useState(false);
  const [showBookingId, setshowBookingId] = useState(null);
  const [showEditBoxArr, setEditBoxArr] = useState(newObj);

  //handles an edited booking submission
  const handleEdit = async (e) => {
    e.preventDefault();

    const userId = sessionUser.id;

    const editedBooking = {
      id: showBookingId,
      userId,
      // storyId: Number(storyId),
      startDate: editStartDate,
      endDate: editEndDate,
      days: -1 * dayjs(editStartDate).diff(dayjs(editEndDate), 'day'),
      // total: -1 *dayjs(editStartDate).diff(dayjs(editEndDate), 'day') * currentStory.price,
    };

    setshowEditBox(false);
    setshowBookingId(null);

    return dispatch(updateBooking(editedBooking))
      .then(() => {
        setStartDate('');
        setEndDate('');
        setDays('');
        setTotal('');
        setEditErrors([]);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setEditErrors(data.errors);
      });
  };




















  if (sessionUser) {
    const userBookings = bookingsArr.filter(
      (booking) => booking.userId === sessionUser.id
    );

    return (
      <>
        <div className='ud-feed-container'>
          <div className='ud-left-div'></div>
          <div className='ud-center-div'>
            <h2 className='rec-title'>My Bookings</h2>
            <ul>
              {storiesArr.map((story) => {
                let d = new Date(story.createdAt);
                let dateWritten = d.toString().slice(4, 10);
                return (
                  <li key={story.id} className='feed-list'>
                  <NavLink className='story-link' to={`/stories/${story.id}`}>
                  <div className='neumorphic-card mx-auto'>
                    <div className='neumorphic-card__outer'>
                        {/* <h2 className='title'>{story.title}</h2> */}
                        <img class='neumorphic-image' src={story.imageUrl[0]} alt='story' />
                        <p className="neumorphic-card__title">{story.city.slice(0,-5)}</p>
                        <div className="propertyTypeAndPriceLine">
                          <p className='neumorphic-card__text'>{story.propertyType}</p>
                          <p className="neumorphic-card__text">${(story.price) === 0 ? (story.price) + 1 : (story.price)} / night</p>
                        </div>
                    </div>
                    <div>
                   </div>
                  </div>
                    </NavLink>
                    <div id='e-d-btn-ctn'>
                          <NavLink to={`/edit/story/${story.id}`}>
                            <button className='my-5 btn neumorphic-btn' id="editButton" type='submit'>
                              <FaEdit />
                            </button>
                          </NavLink>
                          <button
                            className='my-5 btn neumorphic-btn'
                            id="deleteButton"
                            type='submit'
                            onClick={() => dispatch(deleteStory(story.id))}
                          >
                            <FaTrashAlt />
                          </button>
                        </div>
                </li>
                );
              })}
            </ul>




            <ul>
              {userBookings.map((booking) => {
                return (
                  <li key={booking.id} className='feed-list'>
                  <NavLink className='story-link' to={`/stories/${booking.storyId}`}>
                  <div className='neumorphic-card-booking mx-auto'>
                    <div className='neumorphic-card__outer'>
                        <h2 className='neumorphic-card__title'>Check-In: {dayjs(booking.startDate).format('dddd MMMM DD, YYYY')}</h2>
                        <h2 className='neumorphic-card__title'>Checkout: {dayjs(booking.endDate).format('dddd MMMM DD, YYYY')}</h2>
                        <h2 className='neumorphic-card__title'>Days: {booking.days}</h2>
                        <h2 className='neumorphic-card__title'>Total: ${booking.total}</h2>
                    </div>
                    <div>
                   </div>
                  </div>
                    </NavLink>





                    {/* {sessionUser && sessionUser.id === booking.userId && (
                        <button
                          className='my-5 btn neumorphic-btn'
                          id='editButton'
                          type='submit'
                          onClick={() => {
                            setshowEditBox(true);
                            setshowBookingId(booking.id);
                            setEditStartDate(booking.startDate);
                            setEditEndDate(booking.endDate);
                            setEditDays(booking.days);
                            setEditTotal(booking.total);
                            let newobj = { ...newObj };
                            newobj[booking.id] = true;
                            setEditBoxArr(newobj);
                          }}
                        >
                          <FaEdit />
                        </button>
                      )}






                    <div id='e-d-btn-ctn'>
                    {sessionUser &&
                        (sessionUser.id === booking.userId) && (
                          <button
                            className='my-5 btn neumorphic-btn'
                            id='deleteButton'
                            type='submit'
                            onClick={() => dispatch(deleteBooking(booking.id))}
                          >
                            <FaTrashAlt />
                          </button>
                        )}
                      </div> */}














{!showEditBoxArr[booking.id] && (
                  <div className='bookingsDiv' id={booking.id}>
                    <p className='the-booking'>
                      <div className='bookingIcon'></div>
                    </p>
                    <div className='editAndDeleteButtonRow'>
                      {sessionUser && sessionUser.id === booking.userId && (
                        <button
                          className='my-5 btn neumorphic-btn'
                          id='editButton'
                          type='submit'
                          onClick={() => {
                            setshowEditBox(true);
                            setshowBookingId(booking.id);
                            setEditStartDate(booking.startDate);
                            setEditEndDate(booking.endDate);
                            setEditDays(booking.days);
                            setEditTotal(booking.total);
                            let newobj = { ...newObj };
                            newobj[booking.id] = true;
                            setEditBoxArr(newobj);
                          }}
                        >
                          <FaEdit />
                        </button>
                      )}
                      {sessionUser &&
                        (sessionUser.id === booking.userId) && (
                          <button
                            className='my-5 btn neumorphic-btn'
                            id='deleteButton'
                            type='submit'
                            onClick={() => dispatch(deleteBooking(booking.id))}
                          >
                            <FaTrashAlt />
                          </button>
                        )}
                    </div>
                  </div>
                )}

                {sessionUser && showEditBox && showBookingId === booking.id && (
                  <div>
                    <form id='bookings-form' onSubmit={handleEdit}>
                      <ul className='ws-errors'>
                        {editErrors.map((error, idx) => (
                          <li key={idx}>{error}</li>
                        ))}
                      </ul>
                      <label>
                        {' '}
                        Start Date:
                        <input
                          type='date'
                          value={editStartDate}
                          onChange={(e) => setEditStartDate(e.target.value)}
                          required
                        />
                      </label>
                      <label>
                        {' '}
                        End Date:
                        <input
                          type='date'
                          value={editEndDate}
                          onChange={(e) => setEditEndDate(e.target.value)}
                          required
                        />
                      </label>


                      <div className='daysAndTotal'>
                  <div className='daysAndTotalNumber'>
                    Days: {-1 * dayjs(editStartDate).diff(dayjs(editEndDate), 'day')}
                  </div>
                  <div className='daysAndTotalNumber'>
                    {/* <strong>Total:</strong> ${-1 *dayjs(editStartDate).diff(dayjs(editEndDate), 'day') * currentStory.price} */}
                  </div>
                </div>




                      <div className='saveAndCancelButtn'>
                        <button
                          className='my-5 btn neumorphic-btn'
                          id='saveButton'
                          // className='sc-button'
                          type='submit'
                          onClick={() => {
                            let newobj = { ...newObj };
                            newobj[booking.id] = false;
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
                            setshowBookingId(null);
                            let newobj = { ...newObj };
                            newobj[booking.id] = false;
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
          <div className='ud-right-div'></div>
        </div>
      </>
    );
  } else {
    return history.push('/');
  }
}

export default UserBookings;
