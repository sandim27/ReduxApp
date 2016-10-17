import React from 'react';
import { Grid, Row } from 'react-bootstrap';

import './assets/photoGrid.scss';

import PhotoCol from '../PhotoCol';

const PhotoGrid = (props) => {
  const perPage = props.defaultSettings.perPage;

  const startOffset = perPage * (props.defaultSettings.url - 1);
  const endOffset = perPage * props.defaultSettings.url;

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
  defaultSettings: React.PropTypes.object,
};

export default PhotoGrid;
