import React from 'react';
// import the comment component
import Comment from './Comment.js';

function Dino(props) {
    let [state, setState]
  let allComments = props.comments.map((c, i)=>{
      return <Comment key={i} body={c}/>
  });

  return (
      <div>
        <h1>{props.title} Blog!</h1>
        <p>Written by {props.author}</p>
        <form onSubmit={handleFormEdit}>
            <label htmlFor="body">Add new blogpost: </label>
            <input 
                type="text"
                name="body"
                onChange={(e) => setState({ tempBody: e.target})}
            />
        <p>{props.body}</p>
        {allComments}
      </div>
    );
}

export default Dino;