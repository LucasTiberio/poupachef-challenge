import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Redirect } from 'react-router-dom';

import AdminRouteItem from '../components/AdminRouteItem';
import PublicRouteItem from '../components/PublicRouteItem';
import routes from './routes/';

const Routing = (): JSX.Element => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
        <Switch>
          {routes.map(
            (route, index): JSX.Element =>
              route.authenticated ? (
                <AdminRouteItem {...route} key={index} />
              ) : (route.redirect && route.to) ? (
                <Redirect from={route.from} to={route.to} key={index} />
              ) : (
                <PublicRouteItem {...route} key={index} />
              )
            )
          }
        </Switch>
    </Router>
  );
};

export default Routing;
