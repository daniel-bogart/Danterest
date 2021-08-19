import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import BoardIndexDropdown from '../boards/board_index_dropdown';
import { MdKeyboardArrowDown } from 'react-icons/md';

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
  }
  goBack() {
    this.props.history.goBack();
  }
  render() {

    if (this.props.pin === undefined ) return null;
    return (
      <div id="pin-background" className="pin-container">
        <div className="pin" key={this.props.pin.id}>
          <div className="pin-show-image-container">
            <img onClick={()=>this.handleClick()} 
            id="image-modal" className="pin-show-image" src={this.props.pin.photoUrl} />
          </div>
          <div className="pinfo">
            <div className="pinfo-nav">
              <FaArrowLeft className="back-button" onClick={this.goBack}/>
              <div className="save-board-button-box">
                <BoardIndexDropdown openModal={this.props.openModal} boards={this.props.boards}/>
                {/* <button className="save-board-button">Save</button> */}
              </div>
            </div>
            <div className="pinfo-text">
              <h1 className="pinfo-title">{this.props.pin.title}</h1>
              <h3 className="pinfo-description">{this.props.pin.description}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default PinShow;