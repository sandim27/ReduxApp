import React from 'react';
import './assets/comment.scss';

const Comment = (props) => {
  const { photo, comment, indexPhoto, indexComment, removeComment } = props;
  return (
    <li>
      <span>
        <img src={comment.avatar} alt="avatar" />
      </span>
      <strong>{comment.name} </strong>
      <i>{comment.text}</i>
      <i
        className="fa fa-times"
        aria-hidden="true"
        onClick={removeComment.bind(null, photo, indexPhoto, indexComment)}
      />
    </li>
  );
};

Comment.propTypes = {
  comment: React.PropTypes.object,
  indexPhoto: React.PropTypes.number,
  indexComment: React.PropTypes.number,
  removeComment: React.PropTypes.func,
  photo: React.PropTypes.object,
};

export default Comment;
