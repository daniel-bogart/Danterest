import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import BoardIndexDropdown from '../boards/board_index_dropdown';
import { MdAccountCircle } from "react-icons/md";
import PinOptionsDrop from './pin_options_drop';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: 'false'
    }

    this.goBack = this.goBack.bind(this);
  }

  handleClick() {
    if (this.state.expanded === 'false') {
    document.getElementById("pin-background").className = 'darken-background';
    document.getElementById("image-modal").className = 'expanded-image';
    this.setState({expanded: 'true'});
    } else {
      document.getElementById("image-modal").className = 'pin-show-image';
      document.getElementById("pin-background").className = 'pin-container';
      this.setState({expanded: 'false'});
    }
  }



  componentDidMount() {
    this.props.fetchPin(this.props.match.params.pinId);
    this.props.fetchAllBoards(this.props.userId);
    this.props.fetchAllUsers();
  }
  goBack() {
    this.props.history.goBack();
  }
  render() {
    if (this.props.pin === undefined ) return null;
    const authorId = this.props.pin.author_id;
    const author = this.props.users[authorId];
    if (author === undefined) return null;
    return (
      <div id="pin-background" className="pin-container">
        <div className="pin" key={this.props.pin.id}>
          <div className="pin-show-image-container">
            <img onClick={()=>this.handleClick()} 
            id="image-modal" className="pin-show-image" src={this.props.pin.photoUrl} />
          </div>
          <div className="pinfo">
            <div className="pinfo-nav">
              <div className="pinfo-nav-left">
                <FaArrowLeft 
                className="back-button"
                onClick={this.goBack}
                size={22}
                />
                <PinOptionsDrop
                currentUser = {this.props.userId}
                authorId = {this.props.pin.author_id}
                openModal = {this.props.openModal}
                />
              </div>
              <div className="save-board-button-box">
                <BoardIndexDropdown 
                fetchAllBoards={this.props.fetchAllBoards}
                openModal={this.props.openModal} 
                boards={this.props.boards}
                savePin={this.props.savePin}
                pin={this.props.pin}
                userId={this.props.userId}
                deletePinOnBoard={this.props.deletePinOnBoard}
                />
                {/* <button className="save-board-button">Save</button> */}
              </div>
            </div>
            <div className="pinfo-text">
              <h1 className="pinfo-title">{this.props.pin.title}</h1>
              <h3 className="pinfo-description">{this.props.pin.description}</h3>
            </div>
            <div className="pin-author">
              <MdAccountCircle className="pin-author-photo" size={52}/>
              <div className="pin-author-name">{`${author.first_name} ${author.last_name}`}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default PinShow;