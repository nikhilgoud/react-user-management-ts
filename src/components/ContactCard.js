import React from 'react';
import user from '../images/user.png';
import {Link} from 'react-router-dom';

const ContactCard = (props) =>{
    const {id,name,username} = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <Link to = {
                    {
                     pathname:`/contact/${id}`,
                     state:{contact:props.contact}
                    }
                }>
                    <div className="header">
                        {name}
                    </div>
                    <div>
                        {username}
                    </div>
                </Link>
                <i className="trash alternate outline icon" 
                style={{color : "red", marginTop : "7px", cursor:"pointer", marginLeft:"10px"}}
                onClick = { () => props.clickHandler(id)}
                ></i>
                <Link to = {
                    {
                     pathname:`/edit/${id}`,
                     state:{contact:props.contact}
                    }
                }>
                    <i className="edit alternate outline icon" 
                    style={{color : "blue", marginTop : "7px", cursor:"pointer"}}
                    ></i>
                </Link>
            </div>
        </div>
    );
}

export default ContactCard;