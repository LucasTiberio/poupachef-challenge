import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Redirect } from 'react-router-dom';

import AuthenticatedRouteItem from '../components/AuthenticatedRouteItem';
import PublicRouteItem from '../components/PublicRouteItem';

import routes from './routes';

const Routing = (): JSX.Element => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        {routes.map(
          (route, index): JSX.Element => {
            if (route.redirect && route.to) {
              return <Redirect from={route.from} to={route.to} key={index} />;
            }

            if (route.authenticated) {
              return <AuthenticatedRouteItem {...route} key={index} />;
            }

            return <PublicRouteItem {...route} key={index} />;
          },
        )}
      </Switch>
    </Router>
  );
};

export default Routing;
