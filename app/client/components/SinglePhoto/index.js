import React from 'react';
import './assets/singlePhoto.scss';

const singlePhoto = ({ photo }) => (
  <div className="photo-view_img">
    <h1>{photo.name}</h1>
    <img src={photo.image} alt="image" />
  </div>
);

singlePhoto.propTypes = {
  photo: React.PropTypes.object,
};

export default singlePhoto;
