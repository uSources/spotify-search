import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { initiateGetResult } from '../actions/actions';
import { useSession } from '../hooks/useSessionValid';
import { InvalidSession } from './InvalidSession';
import { SearchForm } from './SearchForm';
import { SearchResult } from './SearchResult';

export const Dashboard = () => {
  const [category, setCategory] = useState('albums');
  const dispatch = useDispatch();
  const isSessionValid = useSession();
  const handleSearch = (searchTerm) => {
    dispatch(initiateGetResult(searchTerm));
  };
  if (!isSessionValid) {
    return <InvalidSession></InvalidSession>;
  }

  return (
    <React.Fragment>
      <SearchForm handleSearch={handleSearch}></SearchForm>
      <SearchResult
        setCategory={setCategory}
        selectedCategory={category}
      ></SearchResult>
    </React.Fragment>
  );
};
