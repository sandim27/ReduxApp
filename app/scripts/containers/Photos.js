import { Grid, Row, Thumbnail, Button, Col } from 'react-bootstrap';
import 'bootstrapCss';
import { default as React, Component } from 'react';
import PhotoGrid from '../components/PhotoGrid'

export default class Photos extends Component {
  render() {
    return (
      <section className="photoGrid">
        <h1>Photos</h1>
        <PhotoGrid {...this.props} />
      </section>
    );
  }
}

