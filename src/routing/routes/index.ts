import { RouteAndRedirect } from "../types";
import authRoutes from './auth';

const routes: RouteAndRedirect[] = [
  ...authRoutes,
  {
    redirect: true,
    from: '*',
    to: '/login',
  },
];

export default routes;