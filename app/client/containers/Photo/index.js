import React from 'react';


const Photo = (props) => {
  const i = props.photos.findIndex(photo => photo.id == props.params.id);
  const photo = props.photos[i];
  console.log(i,photo,props.params.id);

  return (
    <div className="photo-view">
      <h1>{photo.name}</h1>

      <div className="photo-view_img">
        <img src={photo.image} alt="photo"/>
      </div>
      <ul className="photo-view_comments">
        {photo.comments.map((comment)=>(
          <li key={comment.id}>
            <span>
              <img src={comment.avatar} alt="avatar"/>
            </span>
            <strong>{comment.name}</strong>
            <span>{comment.text}</span>
          </li>))}
      </ul>
    </div>
  )
};

export default Photo;
