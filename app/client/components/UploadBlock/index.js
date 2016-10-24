import React from 'react';
import { Button } from 'react-bootstrap';
import './assets/uploadBlock.scss';

const UploadBlock = (props) => {
  const { changeName, getUrlPhoto, uploadPhoto, newUrlPhoto, photo } = props;
  return (
    <div className="upload-block">
      <input type="text" placeholder="name" onChange={changeName} />

      <div className="upload-file">
        <input
          type="file"
          onChange={getUrlPhoto}
        />
        <Button
          bsStyle="primary"
          bsSize="small"
          onClick={uploadPhoto}
          disabled={!newUrlPhoto.name}
        >
          Upload Photo
        </Button>
      </div>
      <img src={photo.url} alt="" />
    </div>
  );
};

UploadBlock.propTypes = {
  changeName: React.PropTypes.func,
  getUrlPhoto: React.PropTypes.func,
  uploadPhoto: React.PropTypes.func,
  newUrlPhoto: React.PropTypes.object,
  photo: React.PropTypes.object,
};

export default UploadBlock;
