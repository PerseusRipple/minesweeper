import React, { Component } from 'react';
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>

class Cell extends Component {
  render() {
    if(this.props.character === "*"){
      return (
        <div>
        <i class="fas fa-ice-cream"></i></div>
      }
    else{
    return (
      <div>
        {this.props.character}
      </div>
    );
  }
}
}
export default Cell;