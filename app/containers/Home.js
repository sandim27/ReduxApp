import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import UploadBlock from '../components/UploadBlock';

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      newNamePhoto: '',
      newPhoto: {},
      activeName: true,
    };

    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.addNewPhoto = this.addNewPhoto.bind(this);
    this.addPhotoName = this.addPhotoName.bind(this);
  }

  uploadPhoto(event){
    this.props.uploadPhoto(event.target.files[0]);
    this.setState({newPhoto: event.target.files[0]});
    if(this.state.newNamePhoto)
      this.setState({activeName: true})
    else
      this.setState({activeName: false})
  }

  addPhotoName(event) {
    this.setState({newNamePhoto: event.target.value});
    this.setState({activeName: true})
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
            newPhoto={this.state.newPhoto}
            activeName={this.state.activeName}
          />
          <Button
            bsStyle="primary"
            className="add-photo"
            bsSize="small"
            disabled={!this.state.newNamePhoto || !uploadedImage.url}
            onClick={this.addNewPhoto}>
            Add new photo
          </Button>
          <p hidden={!uploadedImage.name}><strong>{uploadedImage.name }</strong> the photo was successfully uploaded!</p>
        </div>
      </div>
    );
  }
}

