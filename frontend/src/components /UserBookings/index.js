import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { deleteListing } from '../../store/listings';
import { updateBooking, deleteBooking } from '../../store/bookings';
import { FaEdit, FaRegUserCircle, FaTrashAlt } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { BiSave } from 'react-icons/bi';
import './UserBookings.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from 'react-geocode';
Geocode.setApiKey('AIzaSyA0M4-oBcEx1v77h2opyRZJp7sXdiU9w5g');
Geocode.setLanguage('en');

const containerStyle = {
  // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
  // Lookup CSSProperties to see what is available
  // width: '400px',
  // height: '300px',
  width: '230px',
  height: '170px',
  borderRadius: '20px',
  boxShadow:
    '9px 9px 16px rgba(189, 189, 189, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5)',
};

function UserBookings() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const allListings = useSelector((state) => state.listings);
  const allBookings = useSelector((state) => state.bookings);
  const listingsArr = Object.values(allListings);
  const bookingsArr = Object.values(allBookings);

  const dayjs = require('dayjs');
  const now = dayjs();

  const onLoad = (marker) => {
    console.log('marker: ', marker);
  };

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
              {userBookings.map((booking) => {
                return (
                  <li key={booking.id} className='feed-list'>
                    <NavLink
                      className='listing-link'
                      to={`/listings/${booking.listingId}`}
                    >
                      <div className='neumorphic-card-booking mx-auto'>
                        <div className='neumorphic-card__outer'>
                          <div className='bookingImageCenter'>
                            <div className='bookingImageAsWellAsMapColumn'>
                              <img
                                className='neumorphic-image-for-booking'
                                src={booking.listingFirstImageUrl}
                                alt='listing'
                              />
                              <LoadScript googleMapsApiKey='AIzaSyA0M4-oBcEx1v77h2opyRZJp7sXdiU9w5g'>
                                <div className='allGoogleMapWidgetInfoForBookings'>
                                  <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={{
                                      lat: parseFloat(booking.listingLat),
                                      lng: parseFloat(booking.listingLng),
                                    }}
                                    zoom={10}
                                  >
                                    {/* Child components, such as markers, info windows, etc. */}
                                    <Marker
                                      onLoad={onLoad}
                                      position={{
                                        lat: parseFloat(booking.listingLat),
                                        lng: parseFloat(booking.listingLng),
                                      }}
                                    />
                                  </GoogleMap>
                                </div>
                              </LoadScript>
                            </div>
                            <div className='bookingDetails'>
                              <h2 className='neumorphic-card__text'>
                                Location: {booking.listingCity.slice(0, -5)}
                              </h2>
                              <h2 className='neumorphic-card__text'>
                                Check-In:{' '}
                                {dayjs(booking.startDate).format(
                                  'dddd MMMM DD, YYYY'
                                )}
                              </h2>
                              <h2 className='neumorphic-card__text'>
                                Checkout:{' '}
                                {dayjs(booking.endDate).format(
                                  'dddd MMMM DD, YYYY'
                                )}
                              </h2>
                              <h2 className='neumorphic-card__text'>
                                Days: {booking.days}
                              </h2>
                              <h2 className='neumorphic-card__text'>
                                Price Per Night: ${booking.listingPricePerNight}
                              </h2>
                              <h2 className='neumorphic-card__title'>
                                Total: ${booking.total}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                    {sessionUser &&
                      showEditBox &&
                      showBookingId === booking.id && (
                        <div>
                          <form
                            id='bookings-form'
                            onSubmit={async (e) => {
                              e.preventDefault();

                              toast.success('Booking Updated!', {
                                toastId: 'updateBookingToast',
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

                              const editedBooking = {
                                id: showBookingId,
                                userId,
                                // listingId: Number(listingId),
                                startDate: editStartDate,
                                endDate: editEndDate,
                                days:
                                  -1 *
                                    dayjs(editStartDate).diff(
                                      dayjs(editEndDate),
                                      'day'
                                    ) ===
                                    0 ||
                                  Number.isNaN(
                                    -1 *
                                      dayjs(editStartDate).diff(
                                        dayjs(editEndDate),
                                        'day'
                                      )
                                  )
                                    ? 1
                                    : -1 *
                                      dayjs(editStartDate).diff(
                                        dayjs(editEndDate),
                                        'day'
                                      ),
                                total:
                                  -1 *
                                    dayjs(editStartDate).diff(
                                      dayjs(editEndDate),
                                      'day'
                                    ) *
                                    booking.listingPricePerNight ===
                                    0 ||
                                  Number.isNaN(
                                    -1 *
                                      dayjs(editStartDate).diff(
                                        dayjs(editEndDate),
                                        'day'
                                      )
                                  ) * booking.listingPricePerNight
                                    ? booking.listingPricePerNight
                                    : -1 *
                                      dayjs(editStartDate).diff(
                                        dayjs(editEndDate),
                                        'day'
                                      ) *
                                      booking.listingPricePerNight,
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
                                  if (data && data.errors)
                                    setEditErrors(data.errors);
                                });
                            }}
                          >
                            <div className='bookingsInputBox'>
                              <div className='bookingsInputBox__outer'>
                                <div className='bookingsInputBox__inner'>
                                  <ul className='ws-errors'>
                                    {editErrors.map((error, idx) => (
                                      <li key={idx}>{error}</li>
                                    ))}
                                  </ul>

                                  <div className='dateInputFields'>
                                    <div className='startingDate'>
                                      <label>CHECK-IN:</label>
                                      <input
                                        // className='ic-field'
                                        id='startingDateInputBox'
                                        type='date'
                                        value={editStartDate}
                                        min={now.format('YYYY-MM-DD')}
                                        onChange={(e) =>
                                          setEditStartDate(e.target.value)
                                        }
                                        required
                                      />
                                    </div>
                                    <div className='endingDate'>
                                      <label>CHECKOUT:</label>
                                      <input
                                        // className='ic-field'
                                        id='endingDateInputBox'
                                        type='date'
                                        value={editEndDate}
                                        min={editStartDate}
                                        onChange={(e) =>
                                          setEditEndDate(e.target.value)
                                        }
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className='daysAndTotal'>
                                    <div className='daysAndTotalNumber'>
                                      Days:{' '}
                                      {editStartDate === editEndDate ||
                                      Number.isNaN(
                                        -1 *
                                          dayjs(editStartDate).diff(
                                            dayjs(editEndDate),
                                            'day'
                                          )
                                      )
                                        ? 1
                                        : -1 *
                                          dayjs(editStartDate).diff(
                                            dayjs(editEndDate),
                                            'day'
                                          )}
                                    </div>
                                    <div className='daysAndTotalNumber'>
                                      <strong>Total:</strong> $
                                      {editStartDate === editEndDate ||
                                      Number.isNaN(
                                        -1 *
                                          dayjs(editStartDate).diff(
                                            dayjs(editEndDate),
                                            'day'
                                          )
                                      ) * booking.listingPricePerNight
                                        ? booking.listingPricePerNight
                                        : -1 *
                                          dayjs(editStartDate).diff(
                                            dayjs(editEndDate),
                                            'day'
                                          ) *
                                          booking.listingPricePerNight}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className='saveAndCancelButtnForBookings'>
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
                    <ToastContainer
                      position='bottom-center'
                      autoClose={1000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      // closeOnClick
                      rtl={false}
                      // pauseOnFocusLoss
                      // draggable
                      // pauseOnHover
                      closeButton={false}
                      // toastStyle={{ backgroundColor: '#3249CA' }}
                      theme='colored'
                    />

                    {!showEditBoxArr[booking.id] && (
                      <div className='bookingsDiv' id={booking.id}>
                        <p className='the-booking'>
                          <div className='bookingIcon'></div>
                        </p>
                        <div className='editAndDeleteButtonRowForBookings'>
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
                                setEditTotal(
                                  -1 *
                                    dayjs(booking.startDate).diff(
                                      dayjs(booking.endDate),
                                      'day'
                                    ) *
                                    booking.listingPricePerNight
                                );
                                let newobj = { ...newObj };
                                newobj[booking.id] = true;
                                setEditBoxArr(newobj);
                              }}
                            >
                              <FaEdit />
                            </button>
                          )}
                          {sessionUser && sessionUser.id === booking.userId && (
                            <button
                              className='my-5 btn neumorphic-btn'
                              id='deleteButton'
                              type='submit'
                              onClick={() => {
                                dispatch(deleteBooking(booking.id));

                                toast.error('Booking Removed!', {
                                  toastId: 'deleteBookingToast',
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
