import React from 'react';
import logo from './logo.svg';
import LearnLink from '../LearnLink/LearnLink';

const Header = (props) => {
    return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <LearnLink linkText={props.linkText} />
    </header>
    );
}

export default Header;