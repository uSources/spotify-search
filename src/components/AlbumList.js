import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loadMoreAlbums } from '../actions/actions';
import { AlbumItem } from './AlbumItem';

export const AlbumsList = ({ albums }) => {
  const dispatch = useDispatch();

  const loadMore = () => {
    dispatch(loadMoreAlbums(albums.next));
  };
  return (
    <div className='d-flex flex-row flex-wrap justify-content-center'>
      {Object.keys(albums).length > 0 && (
        <React.Fragment>
          {albums.items.map((album, index) => {
            return <AlbumItem album={album} key={index}></AlbumItem>;
          })}
          {albums.next && (
            <div className='d-flex d-row justify-content-center'>
              <Button className='' variant='info' onClick={loadMore}>
                Read more
              </Button>
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  );
};
