import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
// import DownloadLink from 'react-download-link';


class PinOptionsDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    // this.getDataFromURL = this.getDataFromURL.bind(this);
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
  
  // getDataFromURL = (url) => new Promise((resolve, reject) => {
  //   console.log("THIS IS THE URL", url)
  //   setTimeout(() => {
  //       fetch(url)
  //           .then(response => response.text())
  //           .then(data => {
  //               resolve(data)
  //           });
  //   });
  // }, 2000);

  render() {

    // console.log("PHOTOURL", this.props.pin.photoUrl)

    const { authorId, currentUser} = this.props;

    const isOwner = authorId === parseInt(currentUser) ? (
      <div
      onClick={() => this.props.openModal('edit-pin')}
      >Edit Pin</div>
    ) : (
      null
    );
      
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
        <div className="pin-options-drop-index">
          {isOwner}
          <div>Download image</div>
          {/* <DownloadLink
          label="Download image"
          filename={`${this.props.pin.title}`}
          exportFile={() => Promise.resolve(this.getDataFromURL(this.props.pin.photoUrl))}
          /> */}
        </div>
        ) : null}
    </div>
    )
  }
}

export default PinOptionsDrop;