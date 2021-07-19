import './App.css';
import React, { useEffect } from 'react';
import Header from './Header';
import AddUser from './AddUser';
import UserList from './UserList';
import { useState } from 'react';
import { uuid } from 'uuidv4';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import User from './User';
import api from '../api/contacts';
import EditUser from './EditUser';

function App() {

  const LOCAL_STORAGE_KEY = 'contacts';

  const [contacts,setContacts] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm)
    if (searchTerm !== ""){
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join("").toLowerCase().includes(searchTerm.toLowerCase);
      });
      setSearchResults(newContactList);
    }else{
      setSearchResults(contacts);
    }
  };

  const [searchResults,setSearchResults]=useState([]);

  const addContactHandler = async (contact) => {
    const request = {
      id : uuid(),
      ...contact
    }
    const response = await api.post("/contacts",request)
    setContacts([...contacts,response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`,contact)
    const {id,name,username} = response.data;
    setContacts(contacts.map((contact) => {
      return contact.id === id ? {...response.data} : contact
    })
    );
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };


  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  useEffect ( () => {
    const getAllCOntacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) {
        setContacts(allContacts);
      }
    };
    getAllCOntacts();
  },[]);

  useEffect ( () => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route 
            path="/" 
            exact 
            render = { (props) => (
              <UserList 
                {...props} 
                contacts={searchTerm.length < 1 ? contacts:searchResults} 
                getContactId={removeContactHandler} 
                term = {searchTerm}
                searchkeyword = {searchHandler}
              />
            )}
          />
          <Route 
            path="/add" 
            render = { (props) => (
              <AddUser {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route 
            path="/edit" 
            render = { (props) => (
              <EditUser {...props} updateContactHandler={updateContactHandler} />
            )}
          />
          <Route
            path="/contact/:id"
            component = {User} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
