import api from '../api/api';
import { addAlbums, setAlbums } from '../reducers/albums';
import { addArtists, setArtists } from '../reducers/artists';
import { addPlaylist, setPlaylist } from '../reducers/playlists';

export const initiateGetResult = (searchTerm) => {
  const API_URL = `search?query=${encodeURIComponent(
    searchTerm
  )}&type=album,playlist,artist`;
  return async (dispatch) => {
    const result = await api.get(API_URL);
    console.log(result);
    const { albums, artists, playlists } = result.data;
    dispatch(setAlbums(albums));
    dispatch(setArtists(artists));
    return dispatch(setPlaylist(playlists));
  };
};

export const loadMoreAlbums = (url) => {
  return async (dispatch) => {
    const result = await api.get(url);
    const albums = result.data.albums;
    return dispatch(addAlbums(albums));
  };
};

export const loadMoreArtists = (url) => {
  return async (dispatch) => {
    const result = await api.get(url);
    const artists = result.data.artists;
    return dispatch(addArtists(artists));
  };
};

export const loadMorePaylist = (url) => {
  return async (dispatch) => {
    const result = await api.get(url);
    const playlist = result.data.playlists;
    return dispatch(addPlaylist(playlist));
  };
};
