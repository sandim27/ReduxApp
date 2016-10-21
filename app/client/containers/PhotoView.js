import React from 'react';
import Comments from '../components/Comments';
import SinglePhoto from '../components/SinglePhoto';
import { Button } from 'react-bootstrap';

class PhotoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.photos.findIndex(photo => photo.id == props.params.id),
    };
    this.deletePhoto = this.deletePhoto.bind(this);
  }

  deletePhoto(){
    this.props.deletePhoto(this.props.photos[this.state.index].id, this.props.defaultSettings.url, this.state.index);
  }

  render() {
    const photo = this.props.photos[this.state.index];
    return (
      <div className="photo-view">
        <SinglePhoto photo={photo} />
        <Comments {...this.props} photo={photo} index={this.state.index}/>
        <Button bsStyle="danger" onClick={this.deletePhoto}>Delete</Button>
      </div>
    )
  }
};

export default PhotoView;
