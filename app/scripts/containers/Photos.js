import { Grid, Row, Thumbnail, Button, Col } from 'react-bootstrap';
import 'bootstrapCss';
import { default as React, Component } from 'react';

export default class Photos extends Component {
  render() {
    return (
      <div>
        <h1>Photos</h1>
        <Grid>
          <Row>
            {this.props.photos.map((photo) => (
              <Col xs={4} md={3} key={photo.id}>
                <Thumbnail src={photo.image} alt="242x200">
                <h4>{photo.name}</h4>
                  <p>
                    <span><img src={photo.comments[0].avatar}/></span>
                    <b>{photo.comments[0].name}: </b>
                    <i>{photo.comments[0].text}</i>
                  </p>
                <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
                </p>
                </Thumbnail>
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    );
  }
}

