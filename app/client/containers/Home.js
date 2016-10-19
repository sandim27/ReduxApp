import React from 'react';
import { Button } from 'react-bootstrap';
export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nameImage: '',
    };
    this.getNameImage = this.getNameImage.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.addNewPhoto = this.addNewPhoto.bind(this);
  }

  getNameImage(){
    const load = this.refs.load;
    this.setState({nameImage: load.files[0]});
  }

  uploadImage() {
    this.props.uploadImage(this.state.nameImage);
  }

  addNewPhoto() {
    const name = this.refs.name.value;
    const image = this.props.photo.url;
    const id = this.props.photos.length;
    this.props.addNewPhoto(name,image,id);
  }

  render() {

    return (
      <div>
        <h1>Home</h1>
        <form ref="commentForm" className="comment-form">
          <input type="text" ref="name" placeholder="name" />
          <input type="file" id="fileUpload" ref="load" onChange={this.getNameImage} />
          <img src={this.props.photo.url} alt=""/>
          <Button bsStyle="primary" bsSize="small" value="Upload" onClick={this.uploadImage}>Upload Image</Button>
          <Button bsStyle="primary" bsSize="small" onClick={this.addNewPhoto}>Add</Button>
        </form>
      </div>
    );
  }
}

