import React from 'react';
import './assets/uploadBlock.scss';
import preloader from './assets/preloader.gif';

const UploadBlock = (props) => {
  const { addPhotoName, uploadPhoto, uploadedImage, activeName, newPhoto } = props;
  return (
    <div className="upload-block">
      <div>Please enter a title of photo</div>
      <input type="text" placeholder="name" onChange={addPhotoName} />
      <span hidden={activeName}>Required</span>

      <div className="upload-file">
        <input
          type="file"
          value=""
          onChange={uploadPhoto}
        />
      </div>
      <div className="activeImages">
        <img src={uploadedImage.url} alt="" />
        <img
          className="preloader"
          src={preloader}
          hidden={(newPhoto.name === undefined) || uploadedImage.url}
          alt=""
        />
      </div>
    </div>
  );
};

UploadBlock.propTypes = {
  addPhotoName: React.PropTypes.func,
  uploadPhoto: React.PropTypes.func,
  uploadedImage: React.PropTypes.object,
  activeName: React.PropTypes.bool,
  newPhoto: React.PropTypes.object,
};

export default UploadBlock;
