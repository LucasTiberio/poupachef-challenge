import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Location } from 'history';

import { RouteAndRedirect } from '../../routing/types';

interface Props extends RouteAndRedirect {
  component?: any;
  location?: Location<unknown> | undefined;
}

const AdminRoute = ({
  component: Component,
  ...props
}: Props): JSX.Element => {
  const number = 10;

  if (number > 1) {
    return (
        <Route
        {...props}
        render={(renderProps: any): JSX.Element | null => Component ? <Component {...props} {...renderProps} /> : null}
      />
    );
  }
  
  return <Redirect to={{ pathname: '/login', state: { from: props.location?.pathname } }} />;
};

export default AdminRoute;
