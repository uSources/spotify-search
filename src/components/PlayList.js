import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loadMorePaylist } from '../actions/actions';
import { PlaylistItem } from './PlayListItem';

export const PlayList = ({ playlist }) => {
  const dispatch = useDispatch();

  const loadMore = () => {
    dispatch(loadMorePaylist(playlist.next));
  };
  return (
    <div className='d-flex flex-row flex-wrap justify-content-center'>
      {Object.keys(playlist).length > 0 && (
        <React.Fragment>
          {playlist.items.map((item, index) => {
            return <PlaylistItem item={item} key={index}></PlaylistItem>;
          })}
          {playlist.next && (
            <div className='d-flex d-row justify-content-center'>
              <Button className='' variant='info' onClick={() => loadMore()}>
                Read more
              </Button>
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  );
};
