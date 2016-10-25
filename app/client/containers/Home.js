import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import UploadBlock from '../components/UploadBlock';

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      newNamePhoto: '',
      newPhoto: {},
    };

    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.addNewPhoto = this.addNewPhoto.bind(this);
    this.addPhotoName = this.addPhotoName.bind(this);
  }

  uploadPhoto(event){
    this.props.uploadPhoto(event.target.files[0]);
    this.setState({newPhoto: event.target.files[0]});
  }

  addPhotoName(event) {
    this.setState({newNamePhoto: event.target.value});
  }

  addNewPhoto() {
    const { photos, uploadedImage, addNewPhoto } = this.props;

    const newPhoto = this.state.newPhoto;
    const newName = this.state.newNamePhoto;
    const newUrl = uploadedImage.url;
    const newId = photos[0].id;

    addNewPhoto(newPhoto, newName, newUrl, newId);
  }

  render() {
    const { uploadedImage } = this.props;

    return (
      <div>
        <div className="upload-form">
          <UploadBlock
            addPhotoName={this.addPhotoName}
            uploadPhoto={this.uploadPhoto}
            uploadedImage={uploadedImage}
          />
          <Button
            bsStyle="primary"
            className="add-photo"
            bsSize="small"
            disabled={!this.state.newNamePhoto || !uploadedImage.url}
            onClick={this.addNewPhoto}>
            Add new photo
          </Button>
        </div>
      </div>
    );
  }
}

