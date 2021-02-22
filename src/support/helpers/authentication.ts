import cookie from 'js-cookie';

export const HASH_COOKIE = 'poupachef-jwt';
const HASH_COOKIE_DAYS_LENGHT = 8;

export const isAuthenticated = (): boolean => {
  const hasAuthenticationHash = !!cookie.get(HASH_COOKIE);
  return hasAuthenticationHash;
};
export const getTokenAuthentication = (): string => {
  const storageAuthenticationHash = localStorage.getItem(HASH_COOKIE);
  const cookieAuthenticationHash = cookie.get(HASH_COOKIE);
  return storageAuthenticationHash || cookieAuthenticationHash || '';
};

export const setAuthentication = (jwt: string): void => {
  cookie.set(HASH_COOKIE, jwt, {
    expires: HASH_COOKIE_DAYS_LENGHT,
  });

  localStorage.setItem(HASH_COOKIE, jwt);

  // For production => Add domain and security cookie fields (as like domain, secure, etc...)
};

export const removeAuthentication = (): void => {
  cookie.remove(HASH_COOKIE);
};
