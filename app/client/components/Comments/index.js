import React from 'react';
import './assets/comments.scss';
import Comment from '../Comment';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const photo = this.props.photo;
    const index = this.props.index;
    const id = this.props.photo.id;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    const myAvatar = this.props.defaultSettings.myAvatar;
    this.props.addComment(photo, myAvatar, author, comment, index, id);
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <div className="photo-view_comments">
        <ul>
          { this.props.photo.comments ? this.props.photo.comments.map((comment, indexComment) => (
            <Comment
              key={indexComment}
              photo={this.props.photo}
              comment={comment}
              indexComment={indexComment}
              indexPhoto={this.props.index}
              id={this.props.id}
              removeComment={this.props.removeComment}
            />
          )) : null}
        </ul>
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

Comments.propTypes = {
  photo: React.PropTypes.object,
  index: React.PropTypes.number,
  id: React.PropTypes.number,
  addComment: React.PropTypes.func,
  defaultSettings: React.PropTypes.object,
  removeComment: React.PropTypes.func,
};
