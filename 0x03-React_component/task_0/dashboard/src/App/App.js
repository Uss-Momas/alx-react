import './App.css';
import { Component } from "react";
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';


export default class App extends Component {
    render() {
        return <>
            <div className="App">
                <div className='headerContainer'>
                    <Header />
                    <Notifications />
                </div>
                <div className="App-body">
                    {
                        !this.props.isLoggedIn ? <Login /> : <CourseList />
                    }
                </div>
                <Footer />
            </div>
        </>
    };
}