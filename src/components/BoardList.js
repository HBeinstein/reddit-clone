import React from "react";
import Board from "./Board";
import PropTypes from "prop-types";

function BoardList(props){
  return(
    <React.Fragment>
      {Object.valuseCallback(props.boardList).map((board) =>
        return <Board
        whenBoardClicked={props.onBoardSelection}
        name={board.name}
        description={board.description}
        id={board.id}
        key={board.id}
      )}
    </React.Fragment>
  )
}