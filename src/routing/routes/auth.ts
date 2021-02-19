import { lazy } from 'react';

import { RouteAndRedirect } from "../../routing/types";

const LOGIN_PATH = '/login';
const LOGIN_COMPONENT = lazy(() => import('../../domains/authentication/login'));

const routes: RouteAndRedirect[] = [
  {
    path: LOGIN_PATH,
    component: LOGIN_COMPONENT,
    exact: true,
  },
];

export default routes;
