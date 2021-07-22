import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import IsAuth from './../common/auth';

export const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (IsAuth()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
