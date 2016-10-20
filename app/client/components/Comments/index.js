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
    const index = this.props.index;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    const myAvatar = this.props.defaultSettings.myAvatar;
    this.props.addComment(myAvatar, author, comment, index);
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <div className="photo-view_comments">
        <ul>
          { this.props.photo.comments ? this.props.photo.comments.map((comment, indexComment) => (
            <Comment
              key={indexComment}
              comment={comment}
              indexComment={indexComment}
              indexPhoto={this.props.index}
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
  addComment: React.PropTypes.func,
  defaultSettings: React.PropTypes.object,
  removeComment: React.PropTypes.func,
};
