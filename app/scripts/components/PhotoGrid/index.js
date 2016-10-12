import React from 'react';
import { Grid, Row, Thumbnail, Button, Col } from 'react-bootstrap';

import './assets/style.scss';

const PhotoGrid = props => (
  <Grid>
    <Row>
      { props.photos.map(photo => (
        <Col xs={4} md={3} key={photo.id}>
          <Thumbnail src={photo.image} alt="242x200">
            <h4>{photo.name}</h4>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
      )) }
    </Row>
  </Grid>
);

PhotoGrid.propTypes = {
  photos: React.PropTypes.array,
};

export default PhotoGrid;
