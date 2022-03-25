import { createSelector } from '@reduxjs/toolkit';

export const selectStore = createSelector((state) => state);
export const selectAlbums = createSelector((state) => state.albums);
export const selectArtists = createSelector((state) => state.artists);
export const selectPlaylist = createSelector((state) => state.playlist);
