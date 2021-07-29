import React from 'react';

class BoardCreate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="board-create-container">
        <h1>Create Board</h1>
        <div className="board-create-input">
          <h6>Name</h6>
          <input
          type="text"
          placeholder='Like "Places to Go" or "Recipies to Make"'
          />
        </div>
        <button>Create</button>
      </div>
    )
  }
}

export default BoardCreate;