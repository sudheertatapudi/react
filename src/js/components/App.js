import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Posts";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <>
    <div className="container">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="container">
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div className="container">
      <h2>API posts</h2>
      <Post />
    </div>
  </>
);

export default App;
