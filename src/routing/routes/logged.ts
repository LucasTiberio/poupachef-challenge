import { lazy } from 'react';

import { RouteAndRedirect } from '../../routing/types';

export const SUPPLIER_LISTING_PATH = '/suppliers';
const SUPPLIER_LISTING_COMPONENT = lazy(() => import('../../domains/supplies/SupplierList'));

export const SUPPLIER_UNIQUE_PATH = '/suppliers/:supplierPublicId';
const SUPPLIER_UNIQUE_COMPONENT = lazy(() => import('../../domains/supplies/SupplierDetails'));

const routes: RouteAndRedirect[] = [
  {
    path: SUPPLIER_LISTING_PATH,
    component: SUPPLIER_LISTING_COMPONENT,
    authenticated: true,
    exact: true,
  },
  {
    path: SUPPLIER_UNIQUE_PATH,
    component: SUPPLIER_UNIQUE_COMPONENT,
    authenticated: true,
    exact: true,
  },
];

export default routes;
