import { createAction, createReducer } from '@reduxjs/toolkit';

export const setPlaylist = createAction('setPlaylist');
export const addPlaylist = createAction('addPlaylist');

export const playlistReducer = createReducer(
  {},
  {
    setPlaylist: (state, action) => action.payload,
    addPlaylist: (state, action) => {
      return {
        ...state,
        next: action.payload.next,
        items: [...state.items, ...action.payload.items],
      };
    },
  }
);
