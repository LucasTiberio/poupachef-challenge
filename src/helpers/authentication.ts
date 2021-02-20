import cookie from 'js-cookie';

export const HASH_COOKIE = 'poupachef-jwt';
const HASH_COOKIE_DAYS_LENGHT = 8;

export const isAuthenticated = (): boolean => {
  const hasAuthenticationHash = !!cookie.get(HASH_COOKIE);
  return hasAuthenticationHash;
};

export const setAuthentication = (jwt: string) => {
  cookie.set(HASH_COOKIE, jwt, {
    expires: HASH_COOKIE_DAYS_LENGHT,
  });

  // For production => Add domain and security cookie fields (as like domain, secure, etc...)
};

export const removeAuthentication = (): void => {
  cookie.remove(HASH_COOKIE);
};
