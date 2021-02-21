import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Location } from 'history';

import { isAuthenticated } from '@poupachef/helpers/authentication';

import { Box } from 'rebass';
import { RouteAndRedirect } from '../../routing/types';
import Header from '../Header';

interface Props extends RouteAndRedirect {
  location?: Location | undefined;
}

const AdminRoute = ({ component: Component, location, ...props }: Props): JSX.Element => {
  const authenticated = isAuthenticated();

  if (authenticated) {
    return (
      <>
        <Header />
        <Box p="2rem">
          <Route
            {...props}
            render={(renderProps: any): JSX.Element | null => {
              if (Component) return <Component {...props} {...renderProps} />;

              return null;
            }}
          />
        </Box>
      </>
    );
  }

  return <Redirect to={{ pathname: '/login', state: { from: location?.pathname } }} />;
};

export default AdminRoute;
