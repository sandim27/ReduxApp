import React from 'react';
import Comments from '../components/Comments';
import SinglePhoto from '../components/SinglePhoto';
import { Button } from 'react-bootstrap';

class PhotoView extends React.Component {
  constructor(props) {
    super(props);
    this.deletePhoto = this.deletePhoto.bind(this);
  }

  deletePhoto(){

    const index =  this.props.photos.findIndex(photo => photo.id == this.props.params.id);
    this.props.deletePhoto(index, this.props.defaultSettings.url);
    console.log(this.props.photos[index].id, this.props.params.id);
  }

  render() {

    const index =  this.props.photos.findIndex(photo => photo.id == this.props.params.id);
    const photo = this.props.photos[index];
    return (
      <div className="photo-view">
        <SinglePhoto photo={photo} />
        <Comments {...this.props} photo={photo} index={index}/>
        <Button bsStyle="danger" onClick={this.deletePhoto}>Delete</Button>
      </div>
    )
  }
};

export default PhotoView;
