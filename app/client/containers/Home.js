import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import UploadBlock from '../components/UploadBlock';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      newNamePhoto: '',
      newUrlPhoto: {},
    };
    this.getUrlPhoto = this.getUrlPhoto.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.addNewPhoto = this.addNewPhoto.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  getUrlPhoto(event){
    this.setState({newUrlPhoto: event.target.files[0]});
  }

  uploadPhoto() {
    this.props.uploadPhoto(this.state.newUrlPhoto);
  }

  changeName(event) {
    this.setState({newNamePhoto: event.target.value});
  }

  addNewPhoto() {
    const { photos, photo, addNewPhoto } = this.props;
    const lengthPhotos = photos.length - 1;
    const newName = this.state.newNamePhoto;
    const newUrl = photo.url;
    const newId = photos[lengthPhotos].id;
    addNewPhoto(newName, newUrl, newId);
  }

  render() {
    const { photo } = this.props;
    return (
      <div>
        <div className="upload-form">
          <UploadBlock changeName={this.changeName} getUrlPhoto={this.getUrlPhoto} uploadPhoto={this.uploadPhoto} newUrlPhoto={this.state.newUrlPhoto} photo={photo} />
          <Button bsStyle="primary" className="add-photo" bsSize="small" disabled={!this.state.newNamePhoto || !photo.url} onClick={this.addNewPhoto}>Add new photo</Button>
        </div>
      </div>
    );
  }
}

