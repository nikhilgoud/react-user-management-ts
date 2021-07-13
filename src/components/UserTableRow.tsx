import {User_details} from '../common/Custom_interface';
import {FC, useState} from 'react';
import {Button} from 'react-bootstrap';
import {FiEye, FiGithub, FiEdit} from 'react-icons/fi';
import {clean_url} from './UserDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  changeEmployee,
  incrementAsync,
  selectCount,
  selectEmployee
} from './../features/counter/counterSlice';
export function UserTableRows(props) {
  const rows = [] as any;
  const [empid, SetEmpId] = useState(props.emp_id);
  function handleChange(event) {
    props.onChange(event);
  }
  props.users.forEach((user) => {
    rows.push(<UserTableRow user={user} onChange={handleChange}></UserTableRow>);
  });
  return <tbody>{rows}</tbody>;
}
export function UserTableRow(props) {
  const [empid, SetEmpId] = useState(props.emp_id);
  const user: User_details = props.user;
  function handleChange(event) {
    console.log(JSON.stringify(event.target.name));
    props.onChange(event.target.name);
  }

  return (
    <tr>
      <td>
        <Button size="sm" name={user.id.toString()} onClick={handleChange}>
          <FiEye className="btn-primary"></FiEye>
        </Button>
      </td>
      <td>{user.name}</td>
      <td>{user.contact?.mobile}</td>
      <td>{user.company?.name}</td>
      <td>
        <a href={clean_url(user.social?.github_url)} target="_blank" rel="noreferrer">
          <Button variant="info">
            <FiGithub></FiGithub>
          </Button>
        </a>
      </td>
    </tr>
  );
}

export function TableRows(props) {
  const rows = [] as any;
  props.users.forEach((user) => {
    rows.push(<TableRow user={user}></TableRow>);
  });
  return <tbody>{rows}</tbody>;
}
export function TableRow(props) {
  const [empid, SetEmpId] = useState(props.emp_id);
  const user: User_details = props.user;

  const {path, url} = useRouteMatch();

  return (
    <tr>
      <td>
        <Link to={`${url}/${user.id}`}>
          <FiEye></FiEye>
        </Link>
      </td>
      <td>
        <Link to={`${url}/edit/${user.id}`}>
          <FiEdit></FiEdit>
        </Link>
      </td>
      <td>{user.name}</td>
      <td>{user.contact?.mobile}</td>
      <td>{user.company?.name}</td>
      <td>
        <a href={clean_url(user.social?.github_url)} target="_blank" rel="noreferrer">
          <Button variant="info">
            <FiGithub></FiGithub>
          </Button>
        </a>
      </td>
    </tr>
  );
}

//Implemention on Redux
export function ReduxTableRows(props) {
  const rows = [] as any;
  props.users.forEach((user) => {
    rows.push(<ReduxTableRow user={user}></ReduxTableRow>);
  });
  return <tbody>{rows}</tbody>;
}
export function ReduxTableRow(props) {
  const [empid, SetEmpId] = useState(props.emp_id);
  const user: User_details = props.user;
  const count = useSelector(selectEmployee);
  function handleChange(event) {
    props.onChange(event);
  }
  const dispatch = useDispatch();
  return (
    <tr>
      <td>
        <Button onClick={(event) => dispatch(changeEmployee(user.id))}>
          <FiEye> </FiEye>
        </Button>
      </td>

      <td>{user.name}</td>
      <td>{user.contact?.mobile}</td>
      <td>{user.company?.name}</td>
      <td>
        <a href={clean_url(user.social?.github_url)} target="_blank" rel="noreferrer">
          <Button variant="info">
            <FiGithub></FiGithub>
          </Button>
        </a>
      </td>
    </tr>
  );
}
