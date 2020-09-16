import React from 'react';
import PropTypes from 'prop-types';

function EditBoard(props) {
  const { board } = props;

  function handleEditBoardFormSubmission(event) {
    event.preventDefault();
    props.onEditBoard({
      name: event.target.name.value,
      description: event.target.description.value,
      id: board.id
    });
  }

  return(
    <React.Fragment>
      <form onSubmit={handleEditBoardFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Board Name' />
        <input
          type='text'
          name='description'
          placeholder='Board Description' />
        <button type='submit' className='btn btn-info'>Update Board!</button>
      </form>
    </React.Fragment>
  );
}

EditBoard.propTypes = {
  onEditBoard: PropTypes.func
}

export default EditBoard;