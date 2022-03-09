import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import UserFeed from '../UserFeed';
import './UserDashboard.css'

function Userdashboard() {
    const sessionUser = useSelector(state => state.session.user);

    if (sessionUser) {
        return (
            <div>
                <UserFeed />
            </div>
          );
    } else {
        return (
            <Redirect to='/' />
        );
    }
}

export default Userdashboard;
