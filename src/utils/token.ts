const getAccessToken = (): string | null => {
  return localStorage.getItem('accessToken');
}

const setAccessToken = (token: string): void => {
  localStorage.setItem('accessToken', token);
}

const removeAccessToken = (): void => {
  localStorage.removeItem('accessToken');
}

export { getAccessToken, setAccessToken, removeAccessToken };