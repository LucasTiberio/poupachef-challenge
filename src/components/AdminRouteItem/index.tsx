import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Location } from 'history';

import { isAuthenticated } from '@poupachef/helpers/authentication';

import { RouteAndRedirect } from '../../routing/types';

interface Props extends RouteAndRedirect {
  location?: Location | undefined;
}

const AdminRoute = ({ component: Component, location, ...props }: Props): JSX.Element => {
  const authenticated = isAuthenticated();

  if (authenticated) {
    return (
      <Route
        {...props}
        render={(renderProps: any): JSX.Element | null => {
          if (Component) return <Component {...props} {...renderProps} />;

          return null;
        }}
      />
    );
  }

  return <Redirect to={{ pathname: '/login', state: { from: location?.pathname } }} />;
};

export default AdminRoute;
