import jwtDecode from 'jwt-decode';

const isUserAuthenticated = (): boolean => {
  return localStorage.getItem('access-token') !== null;
};

const isUserAnAdmin = (): boolean => {
  if (isUserAuthenticated()) {
    const decodedAccessToken: any = jwtDecode(
      localStorage.getItem('access-token')!
    );
    return decodedAccessToken.roles.includes('admin');
  }
  return false;
};

const saveTokensToLocalStorage = (
  accessToken: string,
  refreshToken: string
): void => {
  localStorage.setItem('access-token', accessToken);
  localStorage.setItem('refresh-token', refreshToken);
};

const deleteTokensFromLocalStorage = (): void => {
  localStorage.removeItem('access-token');
  localStorage.removeItem('refresh-token');
};

const setInitialDisplayName = (): string => {
  if (isUserAuthenticated()) {
    const decodedToken: any = jwtDecode(localStorage.getItem('access-token')!);
    return decodedToken.name;
  }
  return '';
};

const displayFailedAuthMessage = (error: any): string => {
  // eslint-disable-next-line no-constant-condition
  if (error.code === 'auth/user-not-found' || 'auth/wrong-password') {
    return 'Nieprawidłowy adres email lub hasło.';
  }
  return error.message;
};

export {
  isUserAuthenticated,
  isUserAnAdmin,
  saveTokensToLocalStorage,
  deleteTokensFromLocalStorage,
  setInitialDisplayName,
  displayFailedAuthMessage
};
