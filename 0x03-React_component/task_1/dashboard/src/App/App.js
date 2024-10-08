import './App.css';
import { Component } from "react";
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleKeyboardPress = this.handleKeyboardPress.bind(this);
    }

    handleKeyboardPress(event) {
        if (event.ctrlKey && event.key === 'h') {
            alert('Logging you out');
            this.props.logOut();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyboardPress)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyboardPress)
    }

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

App.propTypes = {
    logOut: PropTypes.func
}

App.defaultProps = {
    logOut: () => { return; }
}


export default App;