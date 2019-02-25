import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    game: [[]]
  };

  componentDidMount() {
    axios
      .post("https://minesweeper-api.herokuapp.com/games", { difficulty: 0 })
      .then(resp => {
        console.log({ resp });
        this.setState({
          game: resp.data.board
        });
      });
  }

  /*checkForBomb() {
    axios
    .get("https://minesweeper-api.herokuapp.com/games", { id: " " })
      .then(resp => {
        console.log({ resp });
        this.setState({
          game: resp.data.board
        });
      });
    }
  } */

  render() {
    return (
      <>
        <section>
          <header>
            <h1>Ba BOOM!</h1>
          </header>
          <section className="scoreboard">
            <section className="counter" />
            <section className="timer" />
          </section>
        </section>

        <section className="gameboard">
          <table>
            <tbody>
              {this.state.game.map(row => {
                return (
                  <tr onClick={this.checkForBomb}>
                    {row.map(col => {
                      return <td>{col}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </>
    );
  }
}

export default App;
