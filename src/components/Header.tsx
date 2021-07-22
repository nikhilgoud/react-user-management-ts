import {isAuth} from '../features/counter/employeeSlice';
import {FC} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
function Header_a() {
  const auth: boolean = useSelector(isAuth);
  return (
    <header className="header">
      <h1>User Management</h1>
      {!auth ? (
        <Redirect to="/" push />
      ) : (
        <Navbar bg="dark" variant="dark">
          <Link to="/home">View using drilling props</Link>
          <Link to="/view">View using Route</Link>
          <Link to="/add">View using Redux</Link>
        </Navbar>
      )}
    </header>
  );
}

export default Header_a;
