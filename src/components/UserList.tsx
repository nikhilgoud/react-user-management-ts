import Table from 'react-bootstrap/Table';

import {getUserDetails, getAllUsers} from '../API/user_details';
import Button from 'react-bootstrap/Button';
import React, {FC, useState} from 'react';
import {User_details, userprops} from './../common/Custom_interface';
import {ReduxTableRows, TableRows, UserTableRows} from './UserTableRow';

export function User_list(props) {
  const [empid, SetEmpId] = useState(props.emp_id);

  const [users, setUsers] = useState(getAllUsers());
  function handleChange(event) {
    props.onChange(event);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Company</th>
            <th>Git Hub</th>
            <th>FaceBook</th>
          </tr>
        </thead>
        <UserTableRows emp_id={empid} users={users} onChange={handleChange}></UserTableRows>
      </table>
    </div>
  );
}

export function UserList(props) {
  const [users, setUsers] = useState(getAllUsers());

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>View </th>
            <th>Edit </th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Company</th>
            <th>Git Hub</th>
            <th>FaceBook</th>
          </tr>
        </thead>
        <TableRows users={users}></TableRows>
      </table>
    </div>
  );
}

export function ReduxUserList(props) {
  const [users, setUsers] = useState(getAllUsers());

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>View </th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Company</th>
            <th>Git Hub</th>
            <th>FaceBook</th>
          </tr>
        </thead>
        <ReduxTableRows users={users}></ReduxTableRows>
      </table>
    </div>
  );
}
