import React from 'react';
import { Grid, Row, Thumbnail, Button, Col } from 'react-bootstrap';

const PhotoGrid = ({ props }) => {
  console.log('sdf');
  return (
    <Grid>
      <Row>
        { props.photos.map(photo => (
          <Col xs={4} md={3} key={photo.id}>
            <Thumbnail src={photo.image} alt="242x200">
              <h4>{photo.name}</h4>
              <p>
                <span><img src={photo.comments[0].avatar} alt="img" /></span>
                <b>{photo.comments[0].name}: </b>
                <i>{photo.comments[0].text}</i>
              </p>
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
};

PhotoGrid.propTypes = {
  props: React.PropTypes.Array.isRequired,
  photos: React.PropTypes.Object.isRequired,
};

export default PhotoGrid;
