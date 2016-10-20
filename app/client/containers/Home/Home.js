import React from 'react';
import { Button } from 'react-bootstrap';
import './assets/home.scss';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nameImage: '',
      name: '',
    };
    this.getNameImage = this.getNameImage.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.addNewPhoto = this.addNewPhoto.bind(this);
    this.changeName = this.changeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getNameImage(){
    const load = this.refs.load;
    this.setState({nameImage: load.files[0]});
  }

  uploadImage() {
    this.props.uploadImage(this.state.nameImage);
  }

  changeName(event) {
    event.preventDefault();
    this.setState({name: event.target.value});
  }

  addNewPhoto() {
    const name = this.state.name;
    const image = this.props.photo.url;
    const id = this.props.photos.length;
    this.props.addNewPhoto(name,image,id);
  }

  handleSubmit(event){
    event.preventDefault();
  }

  render() {

    return (
      <div>
        <form className="upload-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="name" placeholder="name" onChange={this.changeName} />
          <div className="upload-block">
            <input type="file" id="fileUpload" ref="load" title="Upload" onChange={this.getNameImage} />
            <Button bsStyle="primary" bsSize="small" value="Upload" onClick={this.uploadImage} disabled={!this.state.nameImage}>Upload Image</Button>
          </div>
          <img src={this.props.photo.url} alt=""/>
          <Button bsStyle="primary" className="add-photo" bsSize="small" disabled={!this.state.name || !this.props.photo.url} onClick={this.addNewPhoto}>Add new photo</Button>
        </form>
      </div>
    );
  }
}

