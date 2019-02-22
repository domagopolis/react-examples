import './season.css'
import React, { Component } from 'react';

const seasonConfig = {
    summer: {
        text: 'hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'It is chilly',
        iconName: 'snowflake'
    }
};

const getSeason = (latitude, month) => {
    if(month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter';
    }else{
        return latitude > 0 ? 'winter' : 'summer';
    }
}

//Stateless Functional Component
const Season = props => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
}

export default Season;
