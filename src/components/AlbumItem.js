import _ from 'lodash';
import React from 'react';
import { Card } from 'react-bootstrap';

export const AlbumItem = ({ album }) => {
  return (
    <React.Fragment>
      <Card style={{ width: '18rem' }} className='m-2'>
        <a
          target='_blank'
          href={album.external_urls.spotify}
          rel='noopener noreferrer'
          className='card-image-link'
        >
          {!_.isEmpty(album.images) ? (
            <Card.Img variant='top' src={album.images[0].url} alt='' />
          ) : (
            <Card.Img variant='top' src='not-found.jpg' alt='' />
          )}
        </a>
        <Card.Body>
          <Card.Title>{album.name}</Card.Title>
          <Card.Text>
            <small>
              {album.artists.map((artist) => artist.name).join(', ')}
            </small>
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};
