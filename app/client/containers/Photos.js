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
    const pages = Math.ceil(this.props.photos.length/this.props.defaultSettings.perPage);
    return (
      <section className="photoGrid">
        <PhotoGrid {...this.props}/>
        <Pagination
          next
          prev
          first
          last
          boundaryLinks
          bsSize="small"
          items={pages}
          activePage={this.props.defaultSettings.url}
          onSelect={this.changePage} />
      </section>
    );
  }
}

