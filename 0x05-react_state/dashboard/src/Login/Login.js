import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    p: {
        marginBottom: '1.5rem',
        marginLeft: '1.5rem',
    },
    'label:first-of-type': {
        marginLeft: '1.5rem',
    },
    label: {
        marginRight: '.5rem',
    },
    'label:last-of-type': {
        marginLeft: '.5rem',
    },
    button: {
        margin: ' 0 1rem',
        padding: '0 .5rem'
    }

});

export default function Login() {
    return (
        <>
            <p className={css(styles.p)} >Login to access the full dashboard</p>
            <label htmlFor="email" className={css(styles['label:first-of-type'], styles.label)}>Email:</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password" className={css(styles['label:last-of-type'], styles.label)}>Password:</label>
            <input type="password" name="password" id="password" />
            <button className={css(styles.button)}>OK</button>
        </>
    );
}