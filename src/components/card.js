import React, { Component } from "react";

class card extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropDownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <section>
        <button> onClick={this.showMenu}>Start Game</button>

        {this.state.showMenu ? (
          <section className="menu">
            ref=
            {element => {
              this.dropDownMenu = element;
            }}
            ><button>Easy</button>
            <button>Medium</button>
            <button>Hard</button>
          </section>
        ) : null}
      </section>
    );
  }
}

export default card;
