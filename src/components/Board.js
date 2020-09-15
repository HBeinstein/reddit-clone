import React from "react";
import PropTypes from "prop-types";

function Board(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBoardClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <button onClick = {() => props.onBoardDeleteBoard(props.id)}></button>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  whenBoardClicked: PropTypes.func,
  onBoardDeleteBoard: PropTypes.func
}