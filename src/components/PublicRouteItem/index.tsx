import React from 'react';
import { Route } from 'react-router-dom';
import { Box } from 'rebass';

import { RouteAndRedirect } from '../../routing/types';
import Header from '../Header';

const AppRoute = ({ component: Component, ...props }: RouteAndRedirect): JSX.Element => {
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
};

export default AppRoute;
