import React, { Component } from 'react';

class Cell extends Component {
  render() {
    if(this.props.character === "*"){
      return (
        
        <td>
        <i class="fas fa-ice-cream"></i></td>
    }
    else {
    return (
      <div>
        {this.props.character}
      </div>
    );
  }
}
}
export default Cell;