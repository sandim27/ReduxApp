import React from 'react';
import './assets/photo.scss'
import Comments from '../../components/Comments';

class Photo extends React.Component {
  render() {
    const index = this.props.photos.findIndex(photo => photo.id == this.props.params.id);
    const photo = this.props.photos[index];
    return (
      <div className="photo-view">
        <h1>{photo.name}</h1>

        <div className="photo-view_img">
          <img src={photo.image} alt="photo"/>
        </div>
        <Comments {...this.props} photo={photo} index={index}/>
      </div>
    )
  }
};

export default Photo;
