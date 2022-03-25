import _ from 'lodash';
import { useEffect } from 'react';
import { getParamValues } from '../utils/functions';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../api/api';

export const RedirectPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (_.isEmpty(location.hash)) {
      return navigate('/dashboard');
    }

    const access_token = getParamValues(location.hash);
    const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
    localStorage.setItem('params', JSON.stringify(access_token));

    console.log(access_token);
    localStorage.setItem('expire_time', expiryTime);
    //Set access token
    api.defaults.headers.common = {
      Authorization: `Bearer ${access_token.access_token}`,
    };
    return navigate('/dashboard');
  }, []);
  return <div>Redirect Page</div>;
};
