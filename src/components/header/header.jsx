import {Link} from "react-router-dom";
import React, {useCallback} from "react";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";

import {AuthStatus} from "../../const";
import browserHistory from '../../browser-history';
import {pushRouteToRedirect} from "../../store/action";

const Header = ({isLoggedIn, username}) => {
  const currentPath = browserHistory.location.pathname;
  const dispatch = useDispatch();

  const onLinkClick = useCallback(
      () => {
        if (isLoggedIn === AuthStatus.NO_AUTH) {
          dispatch(pushRouteToRedirect(currentPath));
        }
      },
      [dispatch]
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={isLoggedIn === AuthStatus.AUTH ? `/favorites` : `/login`}
                  onClick={onLinkClick}
                  className="header__nav-link header__nav-link--profile" href="#"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper" />
                  <span className="header__user-name user__name">
                    {isLoggedIn === AuthStatus.AUTH ? username : `Sign in`}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Header;
