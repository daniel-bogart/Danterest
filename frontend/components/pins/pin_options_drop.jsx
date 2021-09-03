import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';


class PinOptionsDrop extends React.Component {
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
      
    return (
    <div className="session-dropdown-container">
      <div 
      className="session-dropdown-box"
      onClick={() => {
        this.showMenu();
      }}>
        <div className="save-board-button-container">
          <HiDotsHorizontal 
          className="triple-dot"
          size={28}/>
        </div>
      </div>
      {this.state.showMenu ? (
        <div>
          <div>Edit Pin</div>
          <div>Download image</div>
        </div>
        ) : null}
    </div>
    )
  }
}

export default PinOptionsDrop;