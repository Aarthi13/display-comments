import React from 'react';
import './App.css';

function Tweet(props){
return(
    <div className="tweet">
        <h1> <u>{props.name}</u></h1>
        <p className="tweetMsg"> { props.msg} </p>
        <h3> Number of likes : {props.likes} </h3>
    </div>
);};

export default Tweet;