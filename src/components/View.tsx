import React from 'react';
import {RouteUserComponet, User_component} from './UserDetails';
import {UserList, User_list} from './UserList';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import UserEdit, {RouteUserEditComponet} from './UserEdit';
import {isAuth} from '../features/counter/employeeSlice';
import {useSelector} from 'react-redux';

export function View() {
  const auth: boolean = useSelector(isAuth);
  return (
    <div>
      <div className="row col-sm-12">
        <div className="col-sm-8">
          <UserList></UserList>
        </div>
        <div className="col-sm-4">
          <Switch>
            <Route exact path="/view/:id">
              <RouteUserComponet></RouteUserComponet>
            </Route>
            <Route path="/view/edit/:id">
              <RouteUserEditComponet></RouteUserEditComponet>
            </Route>
          </Switch>
        </div>
      </div>
      )
    </div>
  );
}
