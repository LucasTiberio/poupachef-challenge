import * as React from 'react';

const { Provider, Consumer } = React.createContext<AppContextInterface | null>(null);

export const AppContextProvider = Provider;

export const AppContextConsumer = Consumer;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withContext<
  P extends { appContext?: AppContextInterface },
  R = Omit<P, 'appContext'>
>(Component: any): React.SFC<R> {
  return function BoundComponent(props: R) {
    return (
      <AppContextConsumer>{value => <Component {...props} context={value} />}</AppContextConsumer>
    );
  };
}
