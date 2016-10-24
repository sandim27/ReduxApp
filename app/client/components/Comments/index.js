import React from 'react';
import { Button } from 'react-bootstrap';
import './assets/comments.scss';
import Comment from '../Comment';

const Comments = (props) => {
  const {
    photo,
    index,
    removeComment,
    id,
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
            id={id}
            removeComment={removeComment}
          />
        )) : null}
      </ul>
      <div className="comment-form">
        <input type="text" value={author} onChange={getAuthorValue} placeholder="author" />
        <input type="text" value={comment} onChange={getCommentValue} placeholder="comment" />
        <Button
          bsStyle="primary"
          bsSize="small"
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
  id: React.PropTypes.number,
  removeComment: React.PropTypes.func,
  addComment: React.PropTypes.func,
  getAuthorValue: React.PropTypes.func,
  getCommentValue: React.PropTypes.func,
  author: React.PropTypes.string,
  comment: React.PropTypes.string,
};

export default Comments;
