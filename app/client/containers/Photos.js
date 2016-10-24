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
    const { defaultSettings, photos } = this.props;
    const pages = Math.ceil(photos.length/defaultSettings.perPage);
    const perPage = defaultSettings.perPage;
    const startOffset = perPage * (defaultSettings.url - 1);
    const endOffset = perPage * defaultSettings.url;
    const filteredPhotos = photos.filter(
      (photo, index) => index >= startOffset && index < endOffset
    );
    return (
      <section className="photoGrid">
        <PhotoGrid {...this.props} filteredPhotos={filteredPhotos} />
        <Pagination
          next
          prev
          first
          last
          boundaryLinks
          bsSize="small"
          items={pages}
          activePage={defaultSettings.url}
          onSelect={this.changePage} />
      </section>
    );
  }
}

