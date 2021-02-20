import { lazy } from 'react';

import { RouteAndRedirect } from '../../routing/types';

export const SUPPLIER_LISTING_PATH = '/suppliers';
const SUPPLIER_LISTING_COMPONENT = lazy(() => import('../../domains/supplies/SupplierList'));

const routes: RouteAndRedirect[] = [
  {
    path: SUPPLIER_LISTING_PATH,
    component: SUPPLIER_LISTING_COMPONENT,
    authenticated: true,
    exact: true,
  },
];

export default routes;
