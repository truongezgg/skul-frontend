export const toBearer = (token: string) => `Bearer ${token}`;

export const customNavigate = (path: string) => {
  window.location.hash = `#${path}`;
};
