import React,{useRef} from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const UserList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map( (contact) => {
        return (
            <ContactCard contact = {contact} clickHandler={deleteContactHandler} key={contact.id} ></ContactCard>
        );
    });

    const inputEl = useRef("");
    const getSearchTerm = () => {
        props.searchkeyword(inputEl.current.value);
    };

    return (
        <div className="ui celled list">
            <h2>User List</h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input 
                        ref={inputEl}
                        type="text" 
                        placeholder="Search Contacts" 
                        className="prompt" 
                        value={props.term}
                        onChange={getSearchTerm}
                    />
                    <i className="search icon"></i>
                </div>
            </div>
            <Link to="/add">
                <button className="ui button blue right">Add Contact</button>
            </Link>
            {renderContactList.length > 0 ? renderContactList : "No Users Available"}
        </div>
    );
}

export default UserList;