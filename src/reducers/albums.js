import { createAction, createReducer } from '@reduxjs/toolkit';

export const setAlbums = createAction('setAlbums');
export const addAlbums = createAction('addAlbums');

export const albumsReducer = createReducer(
  {},
  {
    setAlbums: (state, action) => action.payload,
    addAlbums: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        next: action.payload.next,
        items: [...state.items, ...action.payload.items],
      };
    },
  }
);
