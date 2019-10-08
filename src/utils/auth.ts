export const checkAuthentication = (): boolean => {
  return localStorage.getItem('access-token') !== null;
};

export const destroyTokens = (): void => {
  localStorage.removeItem('access-token');
  localStorage.removeItem('refresh-token');
};
