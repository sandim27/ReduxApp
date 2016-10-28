import React from 'react';
import './assets/singlePhoto.scss';

const BlockPhoto = ({ photo }) => (
  <div className="photo-view_img">
    <h1>{photo.name}</h1>
    <img src={photo.image} alt="image" />
  </div>
);

BlockPhoto.propTypes = {
  photo: React.PropTypes.object,
};

BlockPhoto.defaultProps = {
  photo: {
    name: '',
    image: '',
    comments: [],
  },
};

export default BlockPhoto;
