import {selectEmployee, isAuth, login} from '../features/counter/employeeSlice';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

export default function Login(props) {
  const [values, setValues] = useState({
    userName: '',
    password: ''
  });
  const empidredux = useSelector(isAuth);
  const history = useHistory();
  function Loginclick(event) {
    if (values.userName === values.password) {
      dispatch(login());
      history.push('/home');
    }
  }
  const dispatch = useDispatch();
  return (
    <div className="col-sm-4">
      <h3>Sign In</h3>

      <div className="form-group">
        <input
          type="email"
          className="form-control"
          value={values.userName}
          onChange={(event) => setValues({...values, userName: event.target.value})}
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={values.password}
          onChange={(event) => setValues({...values, password: event.target.value})}
          placeholder="Enter password"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block" onClick={Loginclick}>
        Submit
      </button>
    </div>
  );
}
