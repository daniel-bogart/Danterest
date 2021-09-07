import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";

class PinEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: `${this.props.pin.title}`,
      description: `${this.props.pin.description}`
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { title, description } = this.state;
    const { pin, userId } = this.props;
    let updatedPin = {
      id: pin.id,
      author_id: userId,
      title: title,
      description: description
    }
    await this.props.updatePin(updatedPin)
    this.props.closeModal();
  }

  render() {
    return (
      <div className="pin-edit-container">
        <div className="pin-edit-header">Edit this pin</div>
        <div className="pin-edit-box">
          <div className="pin-edit-input">
            <div className="pin-edit-input-text">
              <div className="peit-1">Title</div>
              <div className="peit-2">Description</div>
            </div>
            <div className="pin-edit-input-box">
              <input
                type="text"
                value={this.state.title}
                onChange={this.handleInput('title')}
                maxLength="50"
              />
              <textarea
                className="pin-edit-description-input"
                type="text"
                value={this.state.description}
                onChange={this.handleInput('description')}
                maxLength="500"
              />
            </div>
          </div>
          <div className="pin-edit-image-wrapper">
            <img className="pin-edit-image" src={this.props.pin.photoUrl}/>
          </div>
        </div>
        <div className="pin-edit-btns">
          <div 
          onClick={() => this.props.openModal('delete-pin')} 
          className="cancel-btn">Delete</div>
          <div className="pin-edit-btns-right">
            <div 
              onClick={() => this.props.closeModal()} 
              className="cancel-btn">Cancel</div>
            <div 
              onClick={this.handleSubmit} 
              className="pin-edit-save-btn">Save</div>
          </div>
        </div>
      </div>
    )
  }

}

export default PinEdit;