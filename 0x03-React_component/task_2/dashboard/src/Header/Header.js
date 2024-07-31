import './Header.css';
import holbertonLogo from '../assets/holberton-logo.jpg';

export default function Header() {
    return (
        <div className="App-header">
            <img src={holbertonLogo} alt="logo" />
            <h1>School dashboard</h1>
        </div>
    );
}