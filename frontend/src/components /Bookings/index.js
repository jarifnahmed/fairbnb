import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  createBooking,
  updateBooking,
  deleteBooking,
} from '../../store/bookings';
import './Bookings.css';
import { FaEdit, FaUserCircle, FaTrashAlt } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { BiSave } from 'react-icons/bi';
import { MdSend } from 'react-icons/md';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Bookings() {
  const { listingId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);

  const listings = useSelector((state) => state.listings);
  const listingsArr = Object.values(listings);
  let listing;
  if (sessionUser) {
    listing = listingsArr.filter(
      (listing) => listing.authorId === sessionUser.id
    );
  }

  const bookings = useSelector((state) => state.bookings);
  const bookingsArr = Object.values(bookings);
  const listingBookings = bookingsArr.filter(
    (booking) => booking.listingId === Number(listingId)
  );

  const dayjs = require('dayjs');
  const now = dayjs();

  const tmmrw = now.add(1, 'day');

  console.log('today is', now.format('YYYY-MM-DD'));
  console.log('tomorrow is', tmmrw.format('YYYY-MM-DD'));

  const currentListing = useSelector((state) => state.listings[listingId]);

  // console.log('listingPrice is', currentListing.price)

  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState('');
  // const tmmrwFromStartDate = startDate.add(1,'day');
  const [endDate, setEndDate] = useState('');

  console.log('startDate is', startDate);
  // console.log('startDateTomorrow is', startDate.add(1, 'day'))

  const [days, setDays] = useState(0);
  const [total, setTotal] = useState(0);

  const [listingFirstImageUrl, setListingFirstImageUrl] = useState('');
  const [listingPricePerNight, setListingPricePerNight] = useState('');
  const [listingCity, setListingCity] = useState('');
  const [listingLat, setListingLat] = useState('');
  const [listingLng, setListingLng] = useState('');

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
      listingId: Number(listingId),
      startDate: editStartDate,
      endDate: editEndDate,
      days:
        -1 * dayjs(editStartDate).diff(dayjs(editEndDate), 'day') === 0 ||
        Number.isNaN(-1 * dayjs(editStartDate).diff(dayjs(editEndDate), 'day'))
          ? 1
          : -1 * dayjs(editStartDate).diff(dayjs(editEndDate), 'day'),

      total:
        -1 *
          dayjs(editStartDate).diff(dayjs(editEndDate), 'day') *
          currentListing.price ===
          0 ||
        Number.isNaN(
          -1 * dayjs(editStartDate).diff(dayjs(editEndDate), 'day')
        ) * currentListing.price
          ? currentListing.price
          : -1 *
            dayjs(editStartDate).diff(dayjs(editEndDate), 'day') *
            currentListing.price,
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

  //handles new booking submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.success('Booking Reserved!', {
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

    const newBooking = {
      userId,
      listingId: Number(listingId),
      startDate,
      endDate,
      days:
        -1 * dayjs(startDate).diff(dayjs(endDate), 'day') === 0 ||
        Number.isNaN(-1 * dayjs(startDate).diff(dayjs(endDate), 'day'))
          ? 1
          : -1 * dayjs(startDate).diff(dayjs(endDate), 'day'),

      total:
        -1 *
          dayjs(startDate).diff(dayjs(endDate), 'day') *
          currentListing.price ===
          0 ||
        Number.isNaN(-1 * dayjs(startDate).diff(dayjs(endDate), 'day')) *
          currentListing.price
          ? currentListing.price
          : -1 *
            dayjs(startDate).diff(dayjs(endDate), 'day') *
            currentListing.price,
      listingFirstImageUrl: currentListing.imageUrl[0],
      listingPricePerNight: currentListing.price,
      listingPricePerNight: currentListing.price,
      listingCity: currentListing.city,
      listingLat: currentListing.lat,
      listingLng: currentListing.lng,
    };

    return dispatch(createBooking(newBooking))
      .then(() => {
        setStartDate('');
        setEndDate('');
        setDays('');
        setTotal('');
        setListingFirstImageUrl('');
        setListingPricePerNight('');
        setListingCity('');
        setListingLat('');
        setListingLng('');
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <>
      {sessionUser && listing.authorId !== sessionUser.id && (
        <div className='bookingsInputBox'>
          <div className='bookingsInputBox__outer'>
            <div className='bookingsInputBox__inner'>
              <form id='bookings-form-send' onSubmit={handleSubmit}>
                <ul className='ws-errors'>
                  {errors.map((error, idx) => (
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
                      value={startDate}
                      min={now.format('YYYY-MM-DD')}
                      onChange={(e) => setStartDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className='endingDate'>
                    <label>CHECKOUT:</label>
                    <input
                      // className='ic-field'
                      id='endingDateInputBox'
                      type='date'
                      value={endDate}
                      min={startDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className='daysAndTotal'>
                  <div className='daysAndTotalNumber'>
                    Days:{' '}
                    {startDate === endDate ||
                    Number.isNaN(
                      -1 * dayjs(startDate).diff(dayjs(endDate), 'day')
                    )
                      ? 1
                      : -1 * dayjs(startDate).diff(dayjs(endDate), 'day')}
                  </div>
                  <div className='daysAndTotalNumber'>
                    <strong>Total:</strong> $
                    {startDate === endDate ||
                    Number.isNaN(
                      -1 * dayjs(startDate).diff(dayjs(endDate), 'day')
                    ) * currentListing.price
                      ? currentListing.price
                      : -1 *
                        dayjs(startDate).diff(dayjs(endDate), 'day') *
                        currentListing.price}
                  </div>
                </div>
                <button
                  type='submit'
                  className='my-5 btn neumorphicReserve-btn'
                  id='reserveButton'
                >
                  Reserve
                </button>
                <ToastContainer
                  position='bottom-center'
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  // closeOnClick
                  rtl={false}
                  // pauseOnFocusLoss
                  // draggable
                  // pauseOnHover
                  closeButton={false}
                  theme='colored'
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Bookings;
