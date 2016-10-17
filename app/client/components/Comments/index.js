import React from 'react';
import './assets/comments.scss';

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
    this.refs.commentForm.reset();
    this.props.addComment(myAvatar, author, comment, index);
  }

  render() {
    return (
      <ul className="photo-view_comments">
        { this.props.photo.comments.map((comment, index) => (
          <li key={index}>
            <span>
              <img src={comment.avatar} alt="avatar" />
            </span>
            <strong>{comment.name} </strong>
            <i>{comment.text}</i>
          </li>
        ))}
        <li>
          <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
            <input type="text" ref="author" placeholder="author" />
            <input type="text" ref="comment" placeholder="comment" />
            <input type="submit" hidden />
          </form>
        </li>
      </ul>
    );
  }
}

Comments.propTypes = {
  photo: React.PropTypes.object,
  index: React.PropTypes.number,
  addComment: React.PropTypes.func,
  defaultSettings: React.PropTypes.object,
};
