import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import PhotoItem from '../PhotoItem';
import './assets/photoGrid.scss';

const PhotoGrid = props => (
  <Grid>
    <Row>
      {props.filteredPhotos.map(photo => (
        <PhotoItem photo={photo} key={photo.id} />
      ))}
    </Row>
  </Grid>
);

PhotoGrid.propTypes = {
  filteredPhotos: React.PropTypes.array,
};

export default PhotoGrid;
