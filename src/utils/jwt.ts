export const saveTokensToLocalStorage = (
  accessToken: string,
  refreshToken: string
): void => {
  localStorage.setItem('access-token', accessToken);
  localStorage.setItem('refresh-token', refreshToken);
};
