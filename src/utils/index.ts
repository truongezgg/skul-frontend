export const toBearer = (token: string) => `Bearer ${token}`;

export const customNavigate = (path?: string) => {
  window.location.hash = path ? `#${path}` : '';
};

export const cutLongString = (str: string, maxLength: number) => {
  return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
};

export const formatCurrency = (number: number, separate = ',') => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separate);
};

export const changeThemeColor = (color: string) => {
  const metaThemeColor = document.querySelector('meta[name=theme-color]') as Element;
  metaThemeColor.setAttribute('content', color);
};
