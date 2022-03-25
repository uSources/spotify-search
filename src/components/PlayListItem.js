import _ from 'lodash';
import React from 'react';
import { Card } from 'react-bootstrap';

export const PlaylistItem = ({ item }) => {
  return (
    <React.Fragment>
      <Card style={{ width: '18rem' }} className='m-2'>
        <a
          target='_blank'
          href={item.external_urls.spotify}
          rel='noopener noreferrer'
          className='card-image-link'
        >
          {!_.isEmpty(item.images) ? (
            <Card.Img variant='top' src={item.images[0].url} alt='' />
          ) : (
            <Card.Img variant='top' src='not-found.jpg' alt='' />
          )}
        </a>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            <small>By {item.owner.display_name}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};
