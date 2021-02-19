export interface RouteI {
  path?: string;
  key?: string | number;
  component?: any;
  exact?: boolean;
  title?: boolean;
  authenticated?: boolean;
}

export interface RedirectI {
  redirect?: boolean;
  from?: string;
  to?: string;
}

export interface RouteAndRedirect extends RouteI, RedirectI {}