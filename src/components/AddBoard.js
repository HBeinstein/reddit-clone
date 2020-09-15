import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';


function AddBoard(props) {

  function handleNewBoardFormSubmission(event) {
    event.preventDefault();
    props.onNewBoardCreation({
      name: event.target.name.value,
      description: event.target.description.value,
      id: v4()
    });
  }

  return(
    <React.Fragment>
      <form onSubmit={handleNewBoardFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Board Name' />
        <input
          type='text'
          name='description'
          placeholder='Board Description' />
        <button type='submit' className='btn btn-info'>Create Board!</button>
      </form>
    </React.Fragment>
  );
}

AddBoard.propTypes = {
  onNewBoardCreation: PropTypes.func
}

export default AddBoard;