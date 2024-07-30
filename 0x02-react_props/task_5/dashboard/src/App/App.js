import './App.css';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import { PropTypes } from 'prop-types';
import { getLatestNotification } from '../utils/utils';


function App({ isLoggedIn = false }) {

  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  const listNotifications = [
    {id: 1, type: "default", value: "New course available"},
    {id: 2, type: "urgent", value: "New resume available"},
    {id: 1, type: "urgent", html: { __html: getLatestNotification() }},
  ];

  return (
    <>
      <div className="App">
        <div className='headerContainer'>
          <Header />
          <Notifications listNotifications={listNotifications}/>
        </div>
        <div className="App-body">
          {
            !isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} />
          }
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;