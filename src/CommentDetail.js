import React from 'react';

const CommentDetail = (props) => {
    return (
        <div>
            <div className="ui teal right pointing label" >{props.content}</div>
            <a className="ui image label" href="/">
                <img alt={props.name} src={props.avatar}/>
                {props.name}
            </a>
            <p style={{fontWeight: 100, color: '#bbb', fontSize: '0.7rem'}}>{props.timeStamp}</p>
        </div>
    );
};


export default CommentDetail;