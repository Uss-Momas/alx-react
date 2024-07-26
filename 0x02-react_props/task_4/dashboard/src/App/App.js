import './App.css';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import { PropTypes } from 'prop-types';


function App() {

  let isLoggedIn = true;

  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
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