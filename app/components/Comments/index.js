import React from 'react';
import { Button } from 'react-bootstrap';
import './assets/comments.scss';
import Comment from '../Comment';

const Comments = (props) => {
  const {
    photo,
    index,
    removeComment,
    addComment,
    getAuthorValue,
    getCommentValue,
    comment,
    author } = props;
  return (
    <div className="photo-view_comments">
      <ul>
        { props.photo.comments ? props.photo.comments.map((commentPhoto, indexComment) => (
          <Comment
            key={indexComment}
            photo={photo}
            comment={commentPhoto}
            indexComment={indexComment}
            indexPhoto={index}
            removeComment={removeComment}
          />
        )) : null}
      </ul>
      <div className="comment-form">
        <input type="text" value={author} onChange={getAuthorValue} placeholder="author" />
        <textarea type="text" value={comment} onChange={getCommentValue} placeholder="comment..." />
        <Button
          bsStyle="primary"
          bsSize="small"
          disabled={!author || !comment}
          onClick={addComment}
        >
          Add Comment
        </Button>
      </div>
    </div>
  );
};

Comments.propTypes = {
  photo: React.PropTypes.object,
  index: React.PropTypes.number,
  removeComment: React.PropTypes.func,
  addComment: React.PropTypes.func,
  getAuthorValue: React.PropTypes.func,
  getCommentValue: React.PropTypes.func,
  author: React.PropTypes.string,
  comment: React.PropTypes.string,
};

Comments.defaultProps = {
  photo: {
    name: '',
    image: '',
    comments: [],
  },
};

export default Comments;
