import Home from '../HomeFeed';
import Footer from '../Footer/index';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import './HomePage.css';

function Homepage() {
  const sessionUser = useSelector((state) => state.session.user);
  if (sessionUser) {
    return <Redirect to='/username' />;
  } else {
    return (
      <>
        <div id='hp-misc-div'>
          <div id='quotes-container'>
            <p id='quote1'>
              Affordable places for you to stay at and enjoy without any
              compromise.
            </p>
            <p id='quote2'>
              Have your own place to offer? Create a listing now!
            </p>
          </div>
          <img
            id='home-house-img'
            src='http://www.cla1mortgage.com/wp-content/uploads/2019/11/456-4560260_house-images-clip-art-free-clipart-house-silhouette.png'
          ></img>
        </div>
        <div id='aboutDiv'>
          <p id='about'>Explore all the listings available to you!</p>
        </div>
        <div id='main'>
          <Home />
        </div>
        <Footer />
      </>
    );
  }
}

export default Homepage;
