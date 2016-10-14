import React from 'react';
import { Grid, Row } from 'react-bootstrap';

import './assets/photoGrid.scss';

import PhotoCol from '../PhotoCol';

const PhotoGrid = (props) => {
  const perPage = props.page.perPage;

  const startOffset = (perPage - 1) * props.page.url;
  const endOffset = ((perPage - 1) * props.page.url) + perPage;

  const filteredPhotos = props.photos.filter(
    (photo, index) => index >= startOffset && index < endOffset
  );

  return (
    <Grid>
      <Row>
        {filteredPhotos.map(photo => (
          <PhotoCol photo={photo} key={photo.id} />
        ))}
      </Row>
    </Grid>
  );
};

PhotoGrid.propTypes = {
  photos: React.PropTypes.array,
  page: React.PropTypes.object,
};

export default PhotoGrid;
