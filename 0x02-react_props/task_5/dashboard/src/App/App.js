import './App.css';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import { PropTypes } from 'prop-types';


function App({ isLoggedIn = false }) {

  return (
    <>
      <div className="App">
        <div className='headerContainer'>
          <Header />
          <Notifications />
        </div>
        <div className="App-body">
          {
            !isLoggedIn ? <Login /> : <CourseList />
          }
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;