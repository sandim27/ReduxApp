import React from 'react';
import Comments from '../components/Comments';
import SinglePhoto from '../components/BlockPhoto';
import { Button } from 'react-bootstrap';

class PhotoView extends React.Component {
  constructor(props) {
    super(props);
    this.deletePhoto = this.deletePhoto.bind(this);
    this.index = props.photos.findIndex(photo => photo.id == props.params.id);
    this.photo = props.photos[this.index];
  }

  deletePhoto(){
    this.props.deletePhoto(this.props.photos[this.index].id, this.props.defaultSettings.url, this.index);
  }

  render() {
    const index = this.props.photos.findIndex(photo => photo.id == this.props.params.id);
    const photo = this.props.photos[index];
    return (
      <div className="photo-view">
        <SinglePhoto photo={photo} />
        <Comments {...this.props} photo={photo} index={index} id={photo.id}/>
        <Button bsStyle="danger" onClick={this.deletePhoto}>Delete</Button>
      </div>
    )
  }
};

export default PhotoView;
