import { createAction, createReducer } from '@reduxjs/toolkit';

export const setArtists = createAction('setArtists');
export const addArtists = createAction('addArtists');

export const artistsReducer = createReducer(
  {},
  {
    setArtists: (state, action) => action.payload,
    addArtists: (state, action) => {
      return {
        ...state,
        next: action.payload.next,
        items: [...state.items, ...action.payload.items],
      };
    },
  }
);
