import React, { Component } from "react";

class card extends Component {
  render() {
    return (
      <section>
        <button>Start Game</button>

        <section className="menu">
          <button>Easy</button>
          <button>Medium</button>
          <button>Hard</button>
        </section>
      </section>
    );
  }
}

export default card;
