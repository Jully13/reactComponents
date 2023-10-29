import React from 'react';
import './header.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <input className="header__input" type="text" placeholder="Enter your message" />
                <button className="header__button" type="button">
                    Search
                </button>
            </div>
        );
    }
}
