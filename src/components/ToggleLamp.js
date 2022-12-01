import React from 'react';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';

/**
 * @todo
 * ubahlah implementasi stateful component dari class ke function
 * dengan memanfaatkan useState().
 */

class ToggleLamp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lamp: 'off'
    };

    this.toggleLamp = this.toggleLamp.bind(this);
  }

  toggleLamp() {
    this.setState((prevState) => {
      return {
        lamp: prevState.lamp === 'off' ? 'on' : 'off'
      };
    });
  }

  render() {
    return (
      <div className={this.state.lamp}>
        <button onClick={this.toggleLamp}>{this.state.lamp === 'on' ? <FaLightbulb /> : <FaRegLightbulb />}</button>
        <h3>Hooks keren!</h3>
      </div>
    );
  }
}

export default ToggleLamp;
