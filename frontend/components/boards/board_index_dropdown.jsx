import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';


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
    return (
      <div className="session-dropdown-container">
        <div 
        className="session-dropdown-box"
        onClick={() => {
          this.showMenu();
        }}>
          <MdKeyboardArrowDown 
          className="def-btn nav-dropdown" 
          size={25} />
        </div>
        {this.state.showMenu ? (
            <div className="drop-menu-index">
              <div>Test</div>
              <div>Test1</div>
              <div>Test2</div>
              <div>Test3</div>
              <div>Test4</div>
            </div>
          ) : null}
      </div>
    )
  }
}

export default BoardIndexDropdown