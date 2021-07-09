import {FC, useState} from 'react';
import './App.css';
import {Footer, User_component} from './components/UserDetails';
import {User_list} from './components/UserList';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';

const App: FC = () => {
  const [empid, SetEmpId] = useState('1');
  function handleChange(event) {
    SetEmpId(event);
  }
  return (
    <div className="App">
      <header className="App-header"><h1>User Management</h1></header>
      <div className="row">
        <div className="col-sm-8">
          <User_list emp_id={empid} onChange={handleChange}></User_list>
        </div>
        <div className="col-sm-4">
          <User_component emp_id={empid}></User_component>
        </div>
      </div>
      <Footer company="Techigai"></Footer>
    </div>
  );
};

export default App;
