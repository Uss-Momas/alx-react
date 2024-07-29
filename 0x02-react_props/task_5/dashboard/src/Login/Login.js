import './Login.css';

export default function Login() {
    return (
        <>
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
            <button>OK</button>
        </>
    );
}