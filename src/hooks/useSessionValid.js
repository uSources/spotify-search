export const useSession = () => {
  const expireTime = JSON.parse(localStorage.getItem('expire_time'));
  const token = JSON.parse(localStorage.getItem('params'));
  const currentTime = new Date().getTime();
  const isSessionValid = currentTime < expireTime;

  return isSessionValid && token;
};
