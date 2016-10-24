import React from 'react';
import Comments from '../components/Comments';
import BlockPhoto from '../components/BlockPhoto';
import { Button } from 'react-bootstrap';

class SinglePhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      comment:'',
    };
    this.deletePhoto = this.deletePhoto.bind(this);
    this.addComment = this.addComment.bind(this);
    this.getAuthorValue = this.getAuthorValue.bind(this);
    this.getCommentValue = this.getCommentValue.bind(this);
  }

  getSinglePhoto(){
    return this.props.photos.findIndex(photo => photo.id == this.props.params.id);
  }

  deletePhoto(){
    const{ photos, defaultSettings, deletePhoto } = this.props;
    const index = this.getSinglePhoto();
    deletePhoto(photos[index].id, defaultSettings.url, index);
  }

  getAuthorValue(event){
    this.setState({author: event.target.value});
  }

  getCommentValue(event){
    this.setState({comment: event.target.value});
  }

  addComment() {
    const{ photos, defaultSettings, addComment } = this.props;
    const index = this.getSinglePhoto();
    const photo = photos[index];
    const id = photo.id;
    const author = this.state.author;
    const comment = this.state.comment;
    const myAvatar = defaultSettings.myAvatar;

    this.setState({comment: '', author:''});
    addComment(photo, myAvatar, author, comment, index, id);
  }

  render() {
    const index = this.getSinglePhoto();
    const photo = this.props.photos[index];
    return (
      <div className="photo-view">
        <BlockPhoto photo={photo} />
        <Comments
          {...this.props}
          photo={photo}
          index={index}
          id={photo.id}
          comment={this.state.comment}
          author={this.state.author}
          addComment={this.addComment}
          getCommentValue={this.getCommentValue}
          getAuthorValue={this.getAuthorValue}
        />
        <Button bsStyle="danger" onClick={this.deletePhoto}>Delete photo</Button>
      </div>
    )
  }
};

export default SinglePhoto;
