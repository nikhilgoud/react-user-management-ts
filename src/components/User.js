import React from 'react';
import { Link } from 'react-router-dom';
import user2 from '../images/user2.jpg';

const User = (props) => {
    const {name,username} = props.location.state.contact;
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user2} alt="user2" />
                </div>
                <div clas="content">
                    <div className="header">{name}</div>
                    <div className="description">{username}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center">Back to User List</button>
                </Link>
            </div>
        </div>
    );
};

export default User;