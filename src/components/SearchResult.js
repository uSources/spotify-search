import _ from 'lodash';
import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AlbumsList } from './AlbumList';
import { ArtistList } from './ArtistList';
import { PlayList } from './PlayList';

export const SearchResult = ({ selectedCategory, setCategory, loadMore }) => {
  const albums = useSelector((state) => state.albums);
  const artists = useSelector((state) => state.artists);
  const playlist = useSelector((state) => state.playlist);
  return (
    <React.Fragment>
      <Stack
        gap={3}
        direction='horizontal'
        className='justify-content-center m-3'
      >
        {!_.isEmpty(albums && albums.items) && (
          <Button
            variant={`${
              selectedCategory === 'albums' ? 'primary' : 'outline-primary'
            }`}
            onClick={() => setCategory('albums')}
          >
            Albums
          </Button>
        )}
        {!_.isEmpty(artists && artists.items) && (
          <Button
            variant={`${
              selectedCategory === 'artists' ? 'primary' : 'outline-primary'
            }`}
            onClick={() => setCategory('artists')}
          >
            Artists
          </Button>
        )}
        {!_.isEmpty(playlist && playlist.items) && (
          <Button
            variant={`${
              selectedCategory === 'playlist' ? 'primary' : 'outline-primary'
            }`}
            onClick={() => setCategory('playlist')}
          >
            PlayLists
          </Button>
        )}
      </Stack>
      {selectedCategory === 'albums' && <AlbumsList albums={albums} />}
      {selectedCategory === 'artists' && <ArtistList artists={artists} />}
      {selectedCategory === 'playlist' && <PlayList playlist={playlist} />}
    </React.Fragment>
  );
};
