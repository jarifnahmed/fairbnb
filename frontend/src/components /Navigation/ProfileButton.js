import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './ProfileButton.css';

function ProfileButton() {
  const sessionUser = useSelector((state) => state.session.user);
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
    <div id='profile-div'>
      <NavLink className='story-link-nav' to={`/story/new`}>
        Create Listing
      </NavLink>

      <NavLink className='story-link-nav' to={`/user/stories`}>
        My Listings
      </NavLink>

      <NavLink className='story-link-nav' to={`/user/bookings`}>
        My Bookings
      </NavLink>


      <button id='logout-btn' onClick={logout}>
        Log Out
      </button>
      <button id='profile-button' onClick={openMenu}>
        {' '}
        {sessionUser.username}
      </button>
      {/* {showMenu && (
        <ul id='profile-dropdown'>
          <li className='prof-list-item'>
            <NavLink className='story-link' to={`/username`}>
              {sessionUser.username}
            </NavLink>
          </li>
          <li className='prof-list-item'>
            <NavLink className='story-link-nav' to={`/story/new`}>
              Create Listing
            </NavLink>
          </li>
          <li className='prof-list-item'>
            <NavLink className='story-link-nav' to={`/user/stories`}>
              My Listings
            </NavLink>
          </li>
          <li className='prof-list-item'>
            <button id='logout-btn' onClick={logout}>
              Log Out
            </button>
          </li>
        </ul>
      )} */}
    </div>
  );
}

export default ProfileButton;
