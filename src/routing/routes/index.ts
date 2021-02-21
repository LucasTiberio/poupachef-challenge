import { RouteAndRedirect } from '../types';

import authRoutes from './auth';
import loggedRoutes from './logged';

const routes: RouteAndRedirect[] = [
  ...authRoutes,
  ...loggedRoutes,
  {
    redirect: true,
    from: '*',
    to: '/login',
  },
];

export default routes;
