import { Button } from 'react-bootstrap';
import React from 'react';
import { useNavigate } from 'react-router';

export const Logout = () => {
  const navigate = useNavigate();
  const handeClick = (e) => {
    e.preventDefault();
    localStorage.removeItem('params');
    navigate('/');
  };
  return (
    <React.Fragment>
      <Button variant='danger' type='submit' onClick={handeClick}>
        Logout
      </Button>
    </React.Fragment>
  );
};
