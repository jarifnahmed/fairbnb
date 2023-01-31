import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';
// import './ProfileButton.css';


//mantine
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Menu,
  Button,
  Transition,
  Paper,
  List,
  Text,
  Flex,
} from '@mantine/core';

function ProfileButton() {
  const sessionUser = useSelector((state) => state.session.user);
  const allBookings = useSelector((state) => state.bookings);
  const bookingsArr = Object.values(allBookings);

  const allListings = useSelector((state) => state.listings);
  const listingsArr = Object.values(allListings);

  const userListings = listingsArr.filter(
    (listing) => listing.authorId === sessionUser.id
  );

  const userBookings = bookingsArr.filter(
    (booking) => booking.userId === sessionUser.id
  );

  const history = useHistory();

  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  return (
    <div>
      <NavLink className='listing-link-nav' to={`/listing/new`}>
        <Button>Create Listing</Button>
      </NavLink>

      <NavLink className='listing-link-nav' to={`/user/listings`}>
      <Button>My Listings {userListings.length === 0 ? '' : '(' + userListings.length + ')'}</Button>
      </NavLink>

      <NavLink className='listing-link-nav' to={`/user/bookings`}>
        <Button>My Bookings {userBookings.length === 0 ? '' : '(' + userBookings.length + ')'}</Button>
      </NavLink>

      <Button color="red" id='logout-btn' onClick={logout}>
        Log Out
      </Button>
    </div>
  );
}

export default ProfileButton;
