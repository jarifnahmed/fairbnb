import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
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
            <Navigate to='/' />
        );
    }
}

export default Userdashboard;
