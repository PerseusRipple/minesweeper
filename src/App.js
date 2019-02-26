import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    game: [[]],
    id: 0
  };

  componentDidMount() {
    axios
      .post("https://minesweeper-api.herokuapp.com/games", {
        difficulty: 0
      })
      .then(resp => {
        console.log({ resp });
        this.setState({
          game: resp.data.board,
          id: resp.data.id
        });
      });
  }

  checkForBomb(x, y) {
    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${this.state.id}/check`,

        {
          id: this.state.id,
          row: x,
          col: y
        }
      )
      .then(resp => {
        console.log({ resp });
        this.setState({
          game: resp.data.board
        });
      });
  }

  flagTile(x, y) {
    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${this.state.id}/flag`,
        {
          id: this.state.id,
          row: x,
          col: y
        }
      )
      .then(resp => {
        console.log({ resp });
        this.setState({
          game: resp.data.board
        });
      });
  }

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
              {this.state.game.map((row, x) => {
                return (
                  <tr key={x}>
                    {row.map((col, y) => {
                      return (
                        <td
                          key={y}
                          onClick={() => this.checkForBomb(x, y)}
                          onContextMenu={() => this.flagTile(x, y)}
                        >
                          {col}
                        </td>
                      );
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
