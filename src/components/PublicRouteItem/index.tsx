import React from 'react';
import { Location } from 'history';
import { Route } from 'react-router-dom';

import { RouteAndRedirect } from '../../routing/types';

interface Props extends RouteAndRedirect {
  component?: any;
  location?: Location<unknown> | undefined;
}

const AppRoute = ({
  component: Component,
  ...props
}: Props): JSX.Element => {

  return (
    <Route
      {...props}
      render={(renderProps): JSX.Element => <Component {...props} {...renderProps} />}
    />
  );
};

export default AppRoute;
