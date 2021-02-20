import React from 'react';
import { Route } from 'react-router-dom';

import { RouteAndRedirect } from '../../routing/types';

const AppRoute = ({ component: Component, ...props }: RouteAndRedirect): JSX.Element => {
  return (
    <Route
      {...props}
      render={(renderProps): JSX.Element => <Component {...props} {...renderProps} />}
    />
  );
};

export default AppRoute;
