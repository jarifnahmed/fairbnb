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
        <div id='aboutDiv'>
          <p id='about'>
            Explore all the listings available to you!
          </p>
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
