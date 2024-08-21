import React from 'react';
import { StyleSheet, css } from 'aphrodite';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "", enableSubmit: false };
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleLoginSubmit(e) {
        e.preventDefault();
        // this.setState({ isLoggedIn: true });
        this.props.logIn(this.state.email, this.state.password);
    }
    handleChangeEmail(e) {
        this.setState({ email: e.target.value });
        if (this.state.email !== '' && this.state.password !== '') {
            this.setState({ enableSubmit: true });
        } else {
            this.setState({ enableSubmit: false, });
        }
    }
    handleChangePassword(e) {
        this.setState({ password: e.target.value });
        if (this.state.email !== '' && this.state.password !== '') {
            this.setState({ enableSubmit: true });
        } else {
            this.setState({ enableSubmit: false, });
        }
    }
    render() {
        return (
            <>
                <div className={css(styles.appBody, styles.small)}>
                    <h1>Log in to continue</h1>
                    <p>Login to access the full dashboard</p>
                    <form action="" onSubmit={this.handleLoginSubmit}>
                        <label htmlFor="email">Email: </label>
                        <input className={css(styles.noBorder)} type="email" id="email" name="email" value={this.state.email} onChange={this.handleChangeEmail} />
                        <label htmlFor="password">Password: </label>
                        <input value={this.state.password} className={css(styles.noBorder)} type="password" id="password" name="password" onChange={this.handleChangePassword} />
                        <input type='submit' className={css(styles.yellowBorder)} value={"OK"} disabled={!this.state.enableSubmit} />
                    </form>
                </div>
            </>
        );
    }
}

const styles = StyleSheet.create({
    appBody: {
        minHeight: '50vh',
        textAlign: 'left',
        marginTop: '2rem',
        marginLeft: '2rem',
    },
    small: {
        '@media (max-width: 900px)': {
            display: 'grid',
            justifyContent: 'center',
        }
    },
    noBorder: {
        '@media (max-width: 900px)': {
            border: 'none'
        }
    },
    yellowBorder: {
        '@media (max-width: 900px)': {
            border: '2px solid gold',
            backgroundColor: 'transparent',
            width: '5vw'
        }
    }
})

export default Login;