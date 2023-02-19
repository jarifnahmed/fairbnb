import HomeFeed from '../HomeFeed';
import './HomePage.css'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

function Homepage() {
    const sessionUser = useSelector(state => state.session.user);
    if (sessionUser) {
        return (
            <Navigate to='/user/dashboard' />
        )
    } else {
        return (
            <>
            <div id='hp-misc-div'>
              <div id='quotes-container'>
                <p id='quote1'>
                  Affordable places to stay at and enjoy without compromise.
                </p>
                <p id='quote2'>
                  Have your own place to offer? Create a listing now!
                </p>
              </div>
            </div>
            <div id='aboutDiv'>
              <p id='about'>Explore all the listings available to you!</p>
            </div>
            <div id='main'>
              <HomeFeed />
            </div>
            {/* <Footer /> */}
          </>

          );
        }
}

export default Homepage;
