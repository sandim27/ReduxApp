import { Pagination } from 'react-bootstrap';
import 'bootstrapCss';
import React from 'react';
import { push } from 'react-router-redux';
import PhotoGrid from '../components/PhotoGrid'

export default class Photos extends React.Component {

  constructor(props) {
    super(props);
    this.changePage = this.props.changePage.bind(this);
  }

  render() {
    const pages = Math.ceil(this.props.photos.length/this.props.page.perPage);
    return (
      <section className="photoGrid">
        <h1>Photos</h1>
        <PhotoGrid {...this.props}/>
        <Pagination
          next
          prev
          first
          last
          boundaryLinks
          bsSize="small"
          items={pages}
          activePage={this.props.page.url}
          onSelect={this.changePage} />
      </section>
    );
  }
}

