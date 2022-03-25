import _ from 'lodash';
import React from 'react';
import { Card } from 'react-bootstrap';

export const ArtistItem = ({ artist }) => {
  return (
    <React.Fragment>
      <Card style={{ width: '18rem' }} className='m-2'>
        <a
          target='_blank'
          href={artist.external_urls.spotify}
          rel='noopener noreferrer'
          className='card-image-link'
        >
          {!_.isEmpty(artist.images) ? (
            <Card.Img variant='top' src={artist.images[0].url} alt='' />
          ) : (
            <Card.Img variant='top' src='not-found.jpg' alt='' />
          )}
        </a>
        <Card.Body>
          <Card.Title>{artist.name}</Card.Title>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};
