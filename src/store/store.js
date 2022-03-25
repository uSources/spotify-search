import { configureStore } from '@reduxjs/toolkit';
import { albumsReducer } from '../reducers/albums';
import { artistsReducer } from '../reducers/artists';
import { playlistReducer } from '../reducers/playlists';

export const store = configureStore({
  reducer: {
    albums: albumsReducer,
    artists: artistsReducer,
    playlist: playlistReducer,
  },
});
