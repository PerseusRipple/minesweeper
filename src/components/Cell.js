import React, { Component } from "react";

class Cell extends Component {
  render() {
    if (this.props.character === "*") {
      return <i class="fas fa-ice-cream" />;
    } else {
      return <>{this.props.character}</>;
    }
  }
}
export default Cell;
