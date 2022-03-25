import Alert from 'react-bootstrap/Alert';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const InvalidSession = () => {
  return (
    <div className='d-flex d-flex-row justify-content-center'>
      <Alert className='w-75' variant='danger' show={true}>
        <Alert.Heading>Oh no! Your session has expire!</Alert.Heading>
        Please, go to
        <Link to='/'>
          <Button variant='primary'>Home</Button>
        </Link>
        and loggin again
      </Alert>
    </div>
  );
};
