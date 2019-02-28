import React, { Component } from "react";
import axios from "axios";
import Cell from "./components/Cell";

class App extends Component {
  state = {
    game: [[]],
    id: 0,
    gameStatus: "",
    difficulty: 0
  };

  componentDidMount() {
    axios
      .post("https://minesweeper-api.herokuapp.com/games", {
        difficulty: this.state.difficulty
      })
      .then(resp => {
        console.log({ resp });
        this.setState({
          game: resp.data.board,
          id: resp.data.id
        });
      });
  }

  setDifficulty = event => {
    console.log(event.target.value);
    this.setState(
      {
        difficulty: event.target.value
      },
      () => {
        this.resetGame();
      }
    );
  };

  resetGame = () => {
    axios
      .post("https://minesweeper-api.herokuapp.com/games", {
        difficulty: this.state.difficulty
      })
      .then(resp => {
        console.log({ resp });
        this.setState({
          game: resp.data.board,
          id: resp.data.id
        });
      });
  };

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
        if (resp.data.state === "lost") {
          this.setState({
            game: resp.data.board,
            gameStatus: "Bummer... Try again"
          });
        } else if (resp.data.state === "won") {
          this.setState({
            game: resp.data.board,
            gameStatus: "Weeee you won!"
          });
        } else {
          this.setState({
            game: resp.data.board,
            gameStatus: "playing..."
          });
        }
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

  // endGame(x, y) {
  //   axios
  //   .post(
  //     `https://minesweeper-api.herokuapp.com/games/${this.state.id}/state`,
  //     {
  //       id: this.state.id,
  //         row: x,
  //         col: y

  //     }
  //     .then(resp => {
  //       console.log({ resp});
  //       this.setState({
  //         game: resp.data.board
  //       })
  //     })
  //   )
  // }

  render() {
    return (
      <>
        <section className="container">
          <h1 className="name">Ba BOOM!</h1>
          <section className="scoreboard">
            <h2>{this.state.gameStatus}</h2>
            <section className="counter" />
            <section className="timer" />
            <section className="selector">
              <select
                onChange={this.setDifficulty}
                value={this.state.difficulty}
              >
                <option value="0">Easy</option>
                <option value="1">Medium</option>
                <option value="2">Hard</option>
              </select>
              {/* <button className="difficulty" onClick={() => this.setDifficulty()}>
              Set Difficulty
            </button> */}
              {/* <h1>{this.state.gameStatus}</h1>  */}
              <button className="reset" onClick={() => this.resetGame()}>
                Reset
              </button>{" "}
            </section>
          </section>
        </section>
        <section className="game_board" />

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
                        <Cell character={col} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
