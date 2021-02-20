import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Redirect } from 'react-router-dom';

import { SUPPLIER_LISTING_PATH } from '@poupachef/routing/routes/logged';

import { isAuthenticated } from '@poupachef/helpers/authentication';
import AdminRouteItem from '../components/AdminRouteItem';
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
              return <AdminRouteItem {...route} key={index} />;
            }

            return <PublicRouteItem {...route} key={index} />;
          },
        )}

        {isAuthenticated() ? (
          <Redirect from="*" to={SUPPLIER_LISTING_PATH} />
        ) : (
          <Redirect from="*" to="/login" />
        )}
      </Switch>
    </Router>
  );
};

export default Routing;
