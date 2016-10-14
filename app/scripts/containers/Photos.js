import { Pagination } from 'react-bootstrap';
import 'bootstrapCss';
import React from 'react';
import { Grid, Row, Thumbnail, Button, Col } from 'react-bootstrap';
import { push } from 'react-router-redux';
import store from '../store';
//import PhotoGrid from '../components/PhotoGrid'

export default class Photos extends React.Component {

  constructor(props) {
    super(props);
    this.changePage = this.props.changePage.bind(this);
  }

  render() {

    const per_page = 10;
    const pages = Math.ceil(this.props.photos.length/per_page);
    const start_offset = (per_page-1)*this.props.page;
    let start_count = 0;

    return (
      <section className="photoGrid">
        <h1>Photos</h1>
        <Grid>
          <Row>
            { this.props.photos.map((photo,index) => {
              if (index >= start_offset && start_count < per_page) {
                start_count++;
                return (
                  <Col xs={4} md={3} key={photo.id}>
                    <Thumbnail src={photo.image} alt="242x200">
                      <h4>{photo.name}</h4>
                      <p>
                        <Button bsStyle="primary">Button</Button>&nbsp;
                        <Button bsStyle="default">Button</Button>
                      </p>
                    </Thumbnail>
                  </Col>
                )
              }
            })}
          </Row>
        </Grid>
        <Pagination
          next
          prev
          first
          last
          maxButtons={10}
          boundaryLinks
          bsSize="small"
          items={pages}
          activePage={this.props.page}
          onSelect={this.changePage} />
      </section>
    );
  }
}

