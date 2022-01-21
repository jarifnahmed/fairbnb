import Home from '../HomeFeed';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import './HomePage.css';

function Homepage() {
  const sessionUser = useSelector((state) => state.session.user);
  if (sessionUser) {
    const sessionUserUserName = sessionUser.username;
    // return <Redirect to='/username' />
    return <Redirect to='/listings' />
    // return <Redirect to= {`/${sessionUserUserName}`}/>
  } else {
    return (
      <>
        <div id='aboutDiv'>
          <p id='about'>
            SPLASHPAGE HERE
          </p>
        </div>
        <div id='main'>
          {/* <Home /> */}
        </div>
      </>
    )
  }
}

export default Homepage;
