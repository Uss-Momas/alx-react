import './App.css';
import { Component } from "react";
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
    App: {
        width: '100%',
        height: '100%',
    },
    'App-body': {
        marginTop: '3rem',
    },
    headerContainer: {
        display: 'flex',
        borderBottom: '.18rem solid #E0354B',
        justifyContent: 'space-between'
    }
});


class App extends Component {
    constructor(props) {
        super(props);
        this.handleKeyboardPress = this.handleKeyboardPress.bind(this);
        this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
        this.handleHideDrawer = this.handleHideDrawer.bind(this);
        this.state = { displayDrawer: true };
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

    handleDisplayDrawer() {
        console.log("DISPLA");
        this.setState({ displayDrawer: true });
    }

    handleHideDrawer() {
        console.log("HIDE");
        
        this.setState({ displayDrawer: false });
    }

    render() {
        const listCourses = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 },
        ];

        const listNotifications = [
            { id: 1, type: "default", value: "New course available" },
            { id: 2, type: "urgent", value: "New resume available" },
            { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
        ];

        return <>
            <div className={css(styles.App)}>
                <div className={css(styles.headerContainer)}>
                    <Header />
                    <Notifications listNotifications={listNotifications} displayDrawer={this.state.displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer} />
                </div>
                <div className={css(styles['App-body'])}>
                    {
                        !this.props.isLoggedIn ? (<BodySectionWithMarginBottom title='Log in to continue'>
                            <Login />
                        </BodySectionWithMarginBottom>) : (
                            <BodySectionWithMarginBottom title="Course list">
                                <CourseList listCourses={listCourses} />
                            </BodySectionWithMarginBottom>
                        )
                    }
                    <BodySection title={'News from the School'}>
                        <p>Here are the news from school....</p>
                    </BodySection>
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