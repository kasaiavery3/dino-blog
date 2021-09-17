import React from 'react';
import Toast from 'react-bootstrap/Toast';

function Comment(props) {
  return (
    <>
      <Toast>
        <Toast.Header>
          <img src="https://ca.slack-edge.com/T0351JZQ0-U029V13BPLH-cdf5e56c7880-48" style={{height: "25px", width: "25px"}}className="rounded me-2" alt="" />
          <strong className="me-auto">Comment</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>{props.body}</Toast.Body>
      </Toast>
    </>
  );
}

export default Comment;