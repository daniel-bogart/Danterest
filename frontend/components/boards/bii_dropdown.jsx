import React from 'react';

class BIIDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedPin: false
    }
    this.handleClick = this.handleClick.bind(this);
    console.log("BOARD-ID", this.props.boardId)
  };

  // componentDidUpdate() {
  //   const {savePin} = this.state;
  //   if (savePin === true) {
  //     this.props.fetchAllBoards(this.props.userId);
  //     this.setState({savedPin: false})
  //   };
  // };

  componentDidMount() {
    this.props.fetchAllBoards(this.props.userId);
  }

  handleClick() {
    const currentPinId = this.props.pin.id;
    let saved = false
    {this.props.board.pins.map((pin) => {
      if (currentPinId === pin.id) {
        saved = true
      }
    })}
    if (saved === false) {
      this.props.savePin({board_id: this.props.board.id, pin_id: this.props.pin.id});
      this.props.openModal('saved-pin');
      this.setState({savedPin: true})
    } else {
      this.props.deletePinOnBoard({pin_id: this.props.pin.id, board_id: this.props.board.id})
      this.props.openModal('already-saved-pin')
    }
  }


  render() {
    return (
        <div onClick={() => this.handleClick()} className="bii-dropdown">
          <h1 className="board-title">{this.props.board.title}</h1>
        </div>
    )
  }
};

export default BIIDropdown;