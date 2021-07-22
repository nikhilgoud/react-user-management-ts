import React, {useState, useEffect} from 'react';
import {getAPIUserDetails, getUserDetails} from './../API/user_details';
import {Button} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {BrowserRouter as Router, Route, Link, Switch, useParams} from 'react-router-dom';

import {User_details} from './../common/Custom_interface';

export function RouteUserEditComponet() {
  const {id} = useParams();

  return (
    <div>
      <UserEdit emp_id={id ? id : ''}></UserEdit>
    </div>
  );
}
export default function UserEdit(props) {
  const a: User_details = {id: 0};

  const [values, setValues] = useState(a);
  useEffect(() => {
    getAPIUserDetails(Number(props.emp_id)).then((result: any) => {
      setValues(result);
    });
  }, [props.emp_id]);
  function SaveClick(event) {
    console.log(JSON.stringify(values));
  }

  if (values) {
    return (
      <div>
        <h1>{values.name}</h1>
        <Table bordered>
          <tbody>
            <tr>
              <td>First Name </td>
              <td align="left">
                <input
                  className="form-field"
                  id="firstname"
                  type="text"
                  onChange={(e) => setValues({...values, firstName: e.target.value})}
                  value={values ? values.firstName : ''}
                />
              </td>
            </tr>
            <tr>
              <td>Last Name </td>
              <td align="left">
                <input
                  className="form-field"
                  type="text"
                  name="lastName"
                  onChange={(e) => setValues({...values, lastName: e.target.value})}
                  value={values ? values.lastName : ''}
                />
              </td>
            </tr>
            <tr>
              <td>Email </td>
              <td align="left">
                <input
                  className="form-field"
                  type="text"
                  onChange={(e) => setValues({...values, contact: {email: e.target.value}})}
                  value={values ? values.contact?.email : ''}
                />
              </td>
            </tr>
            <tr>
              <td>Company </td>
              <td align="left">
                <input
                  className="form-field"
                  type="text"
                  onChange={(e) => setValues({...values, company: {name: e.target.value}})}
                  value={values ? values.company?.name : ''}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td align="left">
                <Button variant="info" onClick={SaveClick}>
                  Save
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
        </div>
      </div>
    );
  } else {
    return <p>Hi</p>;
  }
}
