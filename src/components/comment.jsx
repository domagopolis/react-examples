import React, { Component } from 'react';

const Comment = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.image} />
            </a>
            <div className="content">
                <a href="" className="author">{props.author}</a>
                <div className="metadata">
                    <span className="date">{props.time}</span>
                </div>
                <div className="text">{props.comment}</div>
            </div>
        </div>
    );
}

export default Comment;
