import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loadMoreArtists } from '../actions/actions';
import { ArtistItem } from './ArtistItem';

export const ArtistList = ({ artists }) => {
  const dispatch = useDispatch();

  const loadMore = () => {
    dispatch(loadMoreArtists(artists.next));
  };
  return (
    <div className='d-flex flex-row flex-wrap justify-content-center'>
      {Object.keys(artists).length > 0 && (
        <React.Fragment>
          {artists.items.map((artist, index) => {
            return <ArtistItem artist={artist} key={index}></ArtistItem>;
          })}
          {artists.next && (
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
