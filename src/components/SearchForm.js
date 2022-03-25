import React, { useState } from 'react';
import { Alert, Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Logout } from './Logout';

export const SearchForm = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleForm = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      setErrorMsg('');
      setSearchTerm('');
      handleSearch(searchTerm);
    } else {
      setErrorMsg('Please enter a search term.');
    }
  };

  return (
    <div className='d-flex justify-content-center'>
      <Form onSubmit={handleForm} className='w-75'>
        {errorMsg && <Alert variant='danger'>{errorMsg}</Alert>}
        <InputGroup>
          <FormControl
            type='search'
            name='searchTerm'
            value={searchTerm}
            placeholder='Search for album, artist or playlist'
            onChange={(e) => setSearchTerm(e.target.value)}
            autoComplete='off'
          ></FormControl>
          <Button variant='primary' type='submit'>
            Search
          </Button>
          <Logout></Logout>
        </InputGroup>
      </Form>
    </div>
  );
};
