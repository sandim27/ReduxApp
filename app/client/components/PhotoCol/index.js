import React from 'react';
import { Thumbnail, Button, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import './assets/photoCol.scss';

const PhotoCol = ({ photo }) => {
  const tooltip = (
    <Tooltip id="tooltip">{photo.comments.map(
      (comment, index) => (
        <strong key={index}>{comment.name}<br /></strong>
      )
    )}</Tooltip>
  );

  return (
    <Col xs={4} md={3}>
      <Thumbnail src={photo.image} alt="images">
        <h5>{photo.name}</h5>
        <p>
          <LinkContainer to={`/photo/view/${photo.id}`}>
            <Button bsStyle="primary" bsSize="small">Show photo</Button>
          </LinkContainer>
        </p>
        <OverlayTrigger overlay={tooltip} placement="bottom">
          <div className="fa fa-comment-o" aria-hidden="true"> {photo.comments.length}</div>
        </OverlayTrigger>
      </Thumbnail>
    </Col>
  );
};

PhotoCol.propTypes = {
  photo: React.PropTypes.object,
};

export default PhotoCol;
