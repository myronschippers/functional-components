import React from 'react';

const LearnLink = (props) => {
    return (
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.linkText}
        </a>
    );
}

export default LearnLink;