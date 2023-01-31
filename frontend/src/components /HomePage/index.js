import HomeFeed from '../HomeFeed';
// import './HomePage.css'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

function Homepage() {
  const sessionUser = useSelector((state) => state.session.user);
  if (sessionUser) {
    return <Redirect to='/user/dashboard' />;
  } else {
    return (
      <>
        <div id='main'>
          <HomeFeed />
        </div>
      </>
    );
  }
}

export default Homepage;
