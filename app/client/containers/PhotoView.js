import React from 'react';
import Comments from '../components/Comments';
import SinglePhoto from '../components/SinglePhoto';

class PhotoView extends React.Component {
  render() {
    const index = this.props.photos.findIndex(photo => photo.id == this.props.params.id);
    const photo = this.props.photos[index];

    return (
      <div className="photo-view">
        <SinglePhoto photo={photo} />
        <Comments {...this.props} photo={photo} index={index}/>
      </div>
    )
  }
};

export default PhotoView;
