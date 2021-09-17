import React from 'react';
import Dino from './Dino';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let dino = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property!",
    comments: ["First!", "Great post", "Hire this author now!"]
}
  return (
    <div>
      <Dino 
        title={dino.title}
        author={dino.author}
        body={dino.body}
        comments={dino.comments}
      />
    </div>
  );
}

export default App;
