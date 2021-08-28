import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import BIIDropdown from './bii_dropdown';
import { FaPlus } from 'react-icons/fa';
import BIIPCDropdown from './bii_pc_dropdown';


class BoardIndexDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu() {
    this.setState({ showMenu: true});
  }

  closeMenu() {
    this.setState({ showMenu: false });
  }

  componentDidUpdate() {
    const { showMenu } = this.state;

    setTimeout(() => {
      if (showMenu) {
        window.addEventListener("click", this.closeMenu);
      } else {
        window.removeEventListener("click", this.closeMenu);
      }
    }, 0);
  }

  render() {

    const biCurrentLocation = window.location.href;
    const BIIDropdownDisplay = this.props.currentLocation === biCurrentLocation ? (
      <div>
        <div className="pin-show-board-index">
          {this.props.boards.map((board) => 
          <BIIPCDropdown 
          className="index-board"
          fetchAllBoards={this.props.fetchAllBoards}
          openModal={this.props.openModal} 
          savePin={this.props.savePin}
          key={board.id} 
          board={board}
          pin={this.props.pin}
          userId={this.props.userId}
          createPin={this.props.createPin}
          title={this.props.title}
          description={this.props.description}
          photoFile={this.props.photoFile}
          />)}
            <div onClick={() => this.props.openModal('create-board')} className="bii-dropdown fa-create-board-box">
              <FaPlus className="faplus-create-board" size={24}/>
              <div className="create-board-drop-btn">Create board</div>
            </div>
        </div>
      </div>
    ) : (
      <div className="pin-show-board-index">
        {this.props.boards.map((board) => 
        <BIIDropdown 
        className="index-board"
        fetchAllBoards={this.props.fetchAllBoards}
        openModal={this.props.openModal} 
        savePin={this.props.savePin}
        key={board.id} 
        board={board}
        pin={this.props.pin}
        userId={this.props.userId}
        />)}
          <div onClick={() => this.props.openModal('create-board')} className="bii-dropdown fa-create-board-box">
          <FaPlus className="faplus-create-board" size={24}/>
          <div className="create-board-drop-btn">Create board</div>
        </div>
      </div>
    );
      
    return (
      <div className="session-dropdown-container">
        <div 
        className="session-dropdown-box"
        onClick={() => {
          this.showMenu();
        }}>
          <div className="save-board-button-container">
            <MdKeyboardArrowDown 
            className="board-pin-dropdown" 
            size={25} />
            <button className="save-board-button">Save</button>
          </div>
        </div>
        {this.state.showMenu ? (
          BIIDropdownDisplay
          ) : null}
      </div>
    )
  }
}

export default BoardIndexDropdown