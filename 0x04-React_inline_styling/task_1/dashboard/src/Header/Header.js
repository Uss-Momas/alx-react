import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
    'App-header': {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '.5rem',
        margin: '0 1rem',
    },
    img: {
        height: '160px',
        width: '160px',
    },
    h1: {
        color: '#E0354B',
    }
});

export default function Header() {
    return (
        <div className={css(styles['App-header'])}>
            <img src={holbertonLogo} alt="logo" className={css(styles.img)} />
            <h1 className={css(styles.h1)} >School dashboard</h1>
        </div>
    );
}