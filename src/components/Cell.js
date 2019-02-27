import React, { Component } from "react";

class Cell extends Component {
  render() {
    if (this.props.character === "*") {
      return <i class="fas fa-bomb" />;
    } else if (this.props.character === "F") {
      return <i class="far fa-flag" />;
    } else {
      return <>{this.props.character}</>;
    }
  }
}

export default Cell;
