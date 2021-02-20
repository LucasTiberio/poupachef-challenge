import { RouteAndRedirect } from '../types';

import authRoutes from './auth';
import loggedRoutes from './logged';

const routes: RouteAndRedirect[] = [...authRoutes, ...loggedRoutes];

export default routes;
