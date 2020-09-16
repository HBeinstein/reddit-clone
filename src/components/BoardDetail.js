import React from "react";
import PropTypes from "prop-types";

function BoardDetail(props){
  const { board } = props;

  return (
    <React.Fragment>
      <h1>Board details</h1>
      <h2>{board.name}</h2>
      <h3>{board.description}</h3>
      {props.postList.map((post) => 
      <Post
      title={post.title}
      body={post.body}
      date={post.date}
      upvotes={post.upvotes}
      id={post.id}
      key={post.id}/>
      )}
    </React.Fragment>
  )
}