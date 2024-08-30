import React from 'react';
import './Footer.css';
import { AppContext } from '../App/AppContext';
import { getFullYear, getFooterCopy } from '../utils/utils';

const Footer = () => {
  return (
    <AppContext.Consumer>
      {
        ({ user: { email, password, isLoggedIn }, logOut }) => {
          return (
            <div className="footer">
              {isLoggedIn ? (
                <p>
                  <a href=''>Contact us</a>
                </p>
              ) : (<></>)}
              <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
            </div>
          );
        }
      }
    </AppContext.Consumer>
  );
}

export default Footer;